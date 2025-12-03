import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  value: string;
  duration?: number;
}

export default function Counter({ value, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Parse the value to extract number and suffix
  const parseValue = (val: string): { number: number; suffix: string } => {
    const match = val.match(/^([\d.]+)(.*)$/);
    if (!match) {
      return { number: 0, suffix: val };
    }
    return {
      number: parseFloat(match[1]),
      suffix: match[2] || ''
    };
  };

  const { number: targetNumber, suffix } = parseValue(value);

  // Ease-out function for smooth animation
  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  useEffect(() => {
    // Reset state
    setCount(0);
    startTimeRef.current = null;

    // Cancel any existing animation
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      const currentCount = Math.floor(targetNumber * easedProgress);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    // Small delay to ensure component is mounted and DOM is ready
    const timeoutId = setTimeout(() => {
      animationFrameRef.current = requestAnimationFrame(animate);
    }, 50);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      startTimeRef.current = null;
    };
  }, [targetNumber, duration]);

  // Format the number based on suffix
  const formatNumber = (num: number): string => {
    if (suffix === 'K' || suffix === 'k') {
      return num.toString();
    }
    return Math.floor(num).toString();
  };

  return (
    <span>
      {formatNumber(count)}{suffix}
    </span>
  );
}

