
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
    ];
    
    // Particle settings
    const particleCount = 80;
    const minSize = 2;
    const maxSize = 6;
    const minSpeed = 0.2;
    const maxSpeed = 0.6;
    const connectDistance = 100;
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
    }[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: minSize + Math.random() * (maxSize - minSize),
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        speedX: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
        speedY: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed
      });
    }
    
    // Mouse tracking
    let mouse = { 
      x: canvas.width / 2, 
      y: canvas.height / 2,
      active: false
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true
      };
      
      // Set target positions for some particles to follow cursor
      particles.forEach((particle, index) => {
        // Only some particles follow the cursor directly
        if (index % 3 === 0) {
          particle.targetX = mouse.x + (Math.random() - 0.5) * 100;
          particle.targetY = mouse.y + (Math.random() - 0.5) * 100;
        }
      });
    };
    
    const handleMouseLeave = () => {
      mouse.active = false;
      
      // Clear target positions when mouse leaves
      particles.forEach(particle => {
        particle.targetX = undefined;
        particle.targetY = undefined;
      });
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Follow cursor if target is set
        if (particle.targetX !== undefined && particle.targetY !== undefined) {
          const dx = particle.targetX - particle.x;
          const dy = particle.targetY - particle.y;
          
          // Ease toward target
          particle.x += dx * 0.02;
          particle.y += dy * 0.02;
        } else {
          // Regular movement
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        
        // Connect nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectDistance) {
            // Calculate opacity based on distance
            const lineOpacity = opacity * (1 - distance / connectDistance);
            ctx.beginPath();
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = lineOpacity * 0.8;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        
        // Additional mouse interaction for particles without targets
        if (mouse.active && particle.targetX === undefined) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            // Create gentle attraction toward cursor
            const force = (maxDistance - distance) / maxDistance * 0.7;
            const angle = Math.atan2(dy, dx);
            const attractX = Math.cos(angle) * force;
            const attractY = Math.sin(angle) * force;
            
            particle.x += attractX;
            particle.y += attractY;
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
