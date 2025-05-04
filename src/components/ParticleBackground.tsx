
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
    
    // More vibrant colors for particles
    const particleColors = [
      '#8B5CF6', // vibrant purple
      '#D946EF', // magenta pink
      '#F97316', // bright orange
      '#0EA5E9', // ocean blue
      '#EC4899', // hot pink
      '#10B981', // emerald green
      '#F59E0B', // amber
      '#6366F1', // indigo
    ];
    
    // Enhanced particle settings
    const particleCount = 200; // Increased particle count
    const minSize = 2;
    const maxSize = 8; // Slightly larger max size
    const minSpeed = 0.2;  // Increased for more movement
    const maxSpeed = 0.8;  // Increased for more movement
    const connectDistance = 150; // Increased connection distance
    const opacity = 0.75; // Increased opacity for more visibility
    
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
      pulseSpeed: number; // Added pulse effect
      pulseSize: number; // Current pulse size modifier
    }[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: minSize + Math.random() * (maxSize - minSize),
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        speedX: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
        speedY: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
        followForce: Math.random() * 0.06 + 0.02, // Enhanced follow force
        pulseSpeed: Math.random() * 0.05 + 0.01,
        pulseSize: 0
      });
    }
    
    // Enhanced mouse tracking
    let mouse = { 
      x: canvas.width / 2, 
      y: canvas.height / 2,
      active: false,
      radius: 180 // Increased interaction radius
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
        radius: 180
      };
    };
    
    const handleMouseLeave = () => {
      mouse.active = false;
    };
    
    // Touch support for mobile devices
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse = {
          x: event.touches[0].clientX - rect.left,
          y: event.touches[0].clientY - rect.top,
          active: true,
          radius: 180
        };
        event.preventDefault();
      }
    };
    
    const handleTouchEnd = () => {
      mouse.active = false;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    
    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Pulsing effect
        particle.pulseSize = Math.sin(Date.now() * particle.pulseSpeed) * 0.5 + 0.5;
        const currentSize = particle.size * (1 + particle.pulseSize * 0.3);
        
        // Enhanced movement with slight wobble
        particle.x += particle.speedX + Math.sin(Date.now() * 0.001 + index) * 0.1;
        particle.y += particle.speedY + Math.cos(Date.now() * 0.001 + index) * 0.1;
        
        // Enhanced mouse interaction
        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Enhanced cursor following with more swirl effect
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            
            // Create swirling motion around cursor
            const swirl = index % 2 === 0 ? 1 : -1; // Alternate swirl direction
            const targetX = mouse.x + Math.cos(angle + Math.PI + (swirl * Math.PI / 4)) * 40;
            const targetY = mouse.y + Math.sin(angle + Math.PI + (swirl * Math.PI / 4)) * 40;
            
            // Apply smoother easing based on individual particle's follow force
            particle.x += (targetX - particle.x) * force * particle.followForce * 1.5;
            particle.y += (targetY - particle.y) * force * particle.followForce * 1.5;
          }
        }
        
        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        
        // Draw particle with enhanced glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = opacity;
        
        // Add subtle glow
        const glow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentSize * 2
        );
        glow.addColorStop(0, particle.color);
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Draw subtle glow around particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.globalAlpha = opacity * 0.3;
        ctx.fill();
        ctx.globalAlpha = opacity;
        
        // Connect nearby particles with enhanced connections
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectDistance) {
            // Calculate opacity based on distance
            const lineOpacity = opacity * (1 - distance / connectDistance) * 0.8;
            
            // Create gradient line for more vibrant connections
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, particles[j].color);
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = lineOpacity;
            ctx.lineWidth = 0.8; // Slightly thicker lines
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
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
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
