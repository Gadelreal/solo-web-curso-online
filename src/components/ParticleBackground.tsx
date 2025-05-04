
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
    
    // Soft, pastel colors for particles
    const particleColors = [
      '#F2FCE2', // soft green
      '#FEF7CD', // soft yellow
      '#FEC6A1', // soft orange
      '#E5DEFF', // soft purple
      '#FFDEE2', // soft pink
      '#FDE1D3', // soft peach
      '#D3E4FD', // soft blue
      '#F1F0FB', // soft gray
    ];
    
    // Particle settings - adjusted for softer appearance
    const particleCount = 150; // Reduced from 200 for a softer look
    const minSize = 2;
    const maxSize = 4; // Reduced for subtler particles
    const minSpeed = 0.1;  // Reduced for gentler movement
    const maxSpeed = 0.3;  // Reduced for gentler movement
    const connectDistance = 120; // Slightly reduced
    const opacity = 0.5; // Reduced opacity for softer look
    
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
      followForce: number;
      pulseDirection: number;
      pulseSpeed: number;
      originalSize: number;
    }[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const size = minSize + Math.random() * (maxSize - minSize);
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        originalSize: size,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        speedX: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
        speedY: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
        followForce: Math.random() * 0.05 + 0.01, // Reduced follow force for gentler interaction
        pulseDirection: Math.random() > 0.5 ? 1 : -1,
        pulseSpeed: Math.random() * 0.02 + 0.005 // Slower pulsing
      });
    }
    
    // Mouse/touch tracking with improved smoothness
    let mouse = { 
      x: canvas.width / 2, 
      y: canvas.height / 2,
      active: false,
      radius: 150 // Reduced interaction radius
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
    
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse = {
          x: event.touches[0].clientX - rect.left,
          y: event.touches[0].clientY - rect.top,
          active: true,
          radius: 150
        };
      }
    };
    
    const handleMouseLeave = () => {
      // Don't immediately deactivate to allow for smoother transitions
      setTimeout(() => {
        mouse.active = false;
      }, 500);
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchend', handleMouseLeave);
    
    // Animation function
    const animate = () => {
      // Clear canvas with a very subtle background tint
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Apply gentler pulsing effect
        particle.size += particle.pulseDirection * particle.pulseSpeed;
        
        // Reverse pulse direction when reaching size thresholds
        if (particle.size > particle.originalSize * 1.3 || particle.size < particle.originalSize * 0.8) {
          particle.pulseDirection *= -1;
        }
        
        // Slower movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Mouse interaction - gentler with swirl effect
        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Gentler cursor following with softer swirl effect
            const force = (mouse.radius - distance) / mouse.radius * 0.6; // Reduced force
            const angle = Math.atan2(dy, dx);
            
            // Create a gentler swirl motion around the cursor
            const swirl = Math.PI / 2.5; // Adjusted for softer swirl
            const targetX = mouse.x + Math.cos(angle + swirl) * (30 + Math.random() * 10);
            const targetY = mouse.y + Math.sin(angle + swirl) * (30 + Math.random() * 10);
            
            // Apply smoother, gentler easing
            particle.x += (targetX - particle.x) * force * particle.followForce;
            particle.y += (targetY - particle.y) * force * particle.followForce;
          }
        }
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle with softer appearance
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        
        // Connect nearby particles with softer connections
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectDistance) {
            // Calculate opacity and width based on distance - softer, more subtle
            const lineOpacity = opacity * 0.6 * (1 - distance / connectDistance);
            const lineWidth = Math.max(0.1, 1 * (1 - distance / connectDistance));
            
            // Create a gradient between the two particle colors
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, particles[j].color);
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = lineOpacity;
            ctx.lineWidth = lineWidth;
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
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchend', handleMouseLeave);
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
