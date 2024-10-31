import { useEffect, useRef } from 'react';

interface HackerBackgroundProps {
  color?: string;
  fontSize?: number;
  className?: string;
  speed?: number;
}

const HackerBackground: React.FC<HackerBackgroundProps> = ({
  color = '#D2990B',
  fontSize = 14,
  className = '',
  speed = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    let animationFrameId: number;

    // Recalculate columns and drops after resizing
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = new Array(columns).fill(1);

    const chars =
      'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()';

    let lastTime = 0;
    const interval = 33; // ~30 fps

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (currentTime - lastTime < interval) return;
      lastTime = currentTime;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speed; // Use the speed prop to control fall rate
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    // Update columns and drops when the window is resized
    const handleResize = () => {
      resizeCanvas();
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, fontSize, speed]);

  // Set default width and height to prevent hydration mismatch
  const defaultWidth = 800;
  const defaultHeight = 600;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      width={defaultWidth}
      height={defaultHeight}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default HackerBackground;
