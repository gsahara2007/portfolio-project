import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  blur: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Theme-aware colors - dimmed for light mode
    const lightColors = [
      'rgba(99, 102, 241, 0.3)', 
      'rgba(236, 72, 153, 0.25)', 
      'rgba(0, 199, 190, 0.3)', 
      'rgba(245, 158, 11, 0.25)'
    ];
    
    const darkColors = [
      'rgba(99, 102, 241, 0.3)',
      'rgba(236, 72, 153, 0.2)', 
      'rgba(0, 255, 136, 0.2)',
      'rgba(0, 212, 255, 0.25)'
    ];

    const colors = darkMode ? darkColors : lightColors;

    // Glass bubbles
    const bubbles: Bubble[] = [];
    for (let i = 0; i < 30; i++) {
      bubbles.push({
        id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        size: Math.random() * 100 + 20,
        speed: Math.random() * 2 + 0.5,
        opacity: darkMode ? Math.random() * 0.6 + 0.1 : Math.random() * 0.3 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: darkMode ? Math.random() * 8 + 2 : Math.random() * 2 + 0.5
      });
    }

    const drawBubble = (bubble: Bubble) => {
      ctx.save();
      
      // Apply blur effect
      ctx.filter = `blur(${bubble.blur}px)`;
      
      // Create radial gradient for glass effect
      const gradient = ctx.createRadialGradient(
        bubble.x - bubble.size * 0.3, bubble.y - bubble.size * 0.3, 0,
        bubble.x, bubble.y, bubble.size
      );
      
      if (darkMode) {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
        gradient.addColorStop(0.3, bubble.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
      } else {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        gradient.addColorStop(0.2, bubble.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      }
      
      ctx.fillStyle = gradient;
      ctx.globalAlpha = bubble.opacity;
      
      // Draw bubble
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add bubble highlight
      ctx.filter = 'none';
      const highlightGradient = ctx.createRadialGradient(
        bubble.x - bubble.size * 0.4, bubble.y - bubble.size * 0.4, 0,
        bubble.x - bubble.size * 0.4, bubble.y - bubble.size * 0.4, bubble.size * 0.3
      );
      
      const highlightOpacity = darkMode ? 0.4 : 0.8;
      highlightGradient.addColorStop(0, `rgba(255, 255, 255, ${highlightOpacity})`);
      highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = highlightGradient;
      ctx.beginPath();
      ctx.arc(bubble.x - bubble.size * 0.3, bubble.y - bubble.size * 0.3, bubble.size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach(bubble => {
        drawBubble(bubble);
        
        bubble.y -= bubble.speed;
        
        if (bubble.y < -bubble.size) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [darkMode]);

  // Dynamic background based on theme
  const backgroundStyle = darkMode 
    ? { background: '#000000' }
    : { background: '#ffffff' };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
        style={backgroundStyle}
      />
      

    </>
  );
};

export default ParticleBackground;