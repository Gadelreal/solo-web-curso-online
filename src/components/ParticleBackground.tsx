
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
    
    // Brighter, more vibrant colors for particles
    const particleColors = [
      '#FF6B6B', // bright coral red
      '#FFA07A', // light salmon
      '#8A2BE2', // blue violet
      '#00BFFF', // deep sky blue
      '#32CD32', // lime green
      '#FF69B4', // hot pink
      '#FFD700', // gold
      '#9370DB', // medium purple
    ];
    
    // Particle settings - increased count and connection distance
    const particleCount = 200; // More particles
    const minSize = 2;
    const maxSize = 6;
    const minSpeed = 0.2;  // Increased for more movement
    const maxSpeed = 0.6;  // Increased for more movement
    const connectDistance = 150; // Increased connection distance
    const opacity = 0.75; // Increased opacity
    
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
        followForce: Math.random() * 0.08 + 0.02, // Increased follow force
        pulseDirection: Math.random() > 0.5 ? 1 : -1,
        pulseSpeed: Math.random() * 0.03 + 0.01
      });
    }
    
    // Mouse/touch tracking with improved smoothness
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
    
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse = {
          x: event.touches[0].clientX - rect.left,
          y: event.touches[0].clientY - rect.top,
          active: true,
          radius: 180
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
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Apply pulsing effect
        particle.size += particle.pulseDirection * particle.pulseSpeed;
        
        // Reverse pulse direction when reaching size thresholds
        if (particle.size > particle.originalSize * 1.5 || particle.size < particle.originalSize * 0.7) {
          particle.pulseDirection *= -1;
        }
        
        // Regular movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Mouse interaction - enhanced with swirl effect
        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Enhanced cursor following with swirl effect
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            
            // Create a swirl motion around the cursor
            const swirl = Math.PI / 2; // 90 degrees offset for swirl
            const targetX = mouse.x + Math.cos(angle + swirl) * (40 + Math.random() * 20);
            const targetY = mouse.y + Math.sin(angle + swirl) * (40 + Math.random() * 20);
            
            // Apply smooth easing with individual particle's follow force
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
        
        // Connect nearby particles with vibrant connections
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectDistance) {
            // Calculate opacity and width based on distance
            const lineOpacity = opacity * (1 - distance / connectDistance);
            const lineWidth = Math.max(0.5, 2 * (1 - distance / connectDistance));
            
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
