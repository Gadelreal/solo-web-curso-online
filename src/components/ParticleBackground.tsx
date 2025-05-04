
import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full size of parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Pastel colors for particles
    const particleColors = [
      '#FEC6A1', // soft orange
      '#FFD1DC', // soft pink
      '#D3E4FD', // soft blue
      '#F2FCE2', // soft green
      '#E5DEFF', // soft purple
      '#FEF7CD', // soft yellow
      '#FDE1D3', // soft peach
    ];
    
    // Particle settings - increased particle count
    const particleCount = 150; // Increased from 80
    const minSize = 2;
    const maxSize = 6;
    const minSpeed = 0.1;  // Reduced for smoother movement
    const maxSpeed = 0.4;  // Reduced for smoother movement
    const connectDistance = 120; // Increased connection distance
    const opacity = 0.65;
    
    // Create particles
    const particles: {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      targetX?: number;
      targetY?: number;
      followForce: number; // Added follow force property
    }[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: minSize + Math.random() * (maxSize - minSize),
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        speedX: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
        speedY: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
        followForce: Math.random() * 0.04 + 0.01 // Random follow force for varied movement
      });
    }
    
    // Mouse tracking with improved smoothness
    let mouse = { 
      x: canvas.width / 2, 
      y: canvas.height / 2,
      active: false,
      radius: 150 // Interaction radius
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
        radius: 150
      };
    };
    
    const handleMouseLeave = () => {
      mouse.active = false;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Regular movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Mouse interaction - improved smoothness
        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Enhanced cursor following with easing
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            const targetX = mouse.x + Math.cos(angle + Math.PI) * 30; // Offset to create swirl effect
            const targetY = mouse.y + Math.sin(angle + Math.PI) * 30;
            
            // Apply smooth easing based on individual particle's follow force
            particle.x += (targetX - particle.x) * force * particle.followForce;
            particle.y += (targetY - particle.y) * force * particle.followForce;
          }
        }
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        
        // Connect nearby particles - improved connections
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectDistance) {
            // Calculate opacity based on distance
            const lineOpacity = opacity * (1 - distance / connectDistance);
            ctx.beginPath();
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = lineOpacity * 0.7; // Slightly reduced opacity for cleaner look
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      
      // Continue animation loop
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className || ''}`}
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  );
};

export default ParticleBackground;
