import React, { useState, useEffect, useRef } from 'react';

interface CounterUpProps {
  number: number;
}

const CounterUp: React.FC<CounterUpProps> = ({ number }) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
        } else {
          setIsCounting(false);
        }
      },
      { threshold: 0.5 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isCounting && count < number) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 2);
      }, 1);

      return () => {
        clearInterval(timer);
      };
    }
  }, [count, isCounting, number]);

  useEffect(() => {
    if (count >= number) {
      return;
    }
  }, [count, number]);

  return (
    <span ref={counterRef} className="counter--content-number">
      {count}
    </span>
  );
};

export default CounterUp;
