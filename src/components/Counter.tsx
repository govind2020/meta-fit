'use client';
import { counterData } from '../../public/data/data';
import useAnimation from '@/hooks/useAnimation';
import CounterUp from '@/utils/CounterUp';
import { useRef } from 'react';
import { Variants, motion } from 'framer-motion';
interface CounterProps {
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const animation = useAnimation(ref);

  const animationVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={`${className} counter`}>
      <motion.div
        ref={ref}
        variants={animationVariants}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container"
      >
        <div className="row">
          <div className="col-12">
            <div className="counter--container d-flex">
              {counterData.map((item) => {
                const { id, description, Icon, leftIcon, count, rightIcon } =
                  item;
                return (
                  <div key={id} className="counter--content">
                    <div className="counter--content-icon">{Icon}</div>
                    <div className="counter--content-percent">
                      <h2>
                        {leftIcon && leftIcon}
                        <CounterUp number={count} />
                        {rightIcon && rightIcon}
                      </h2>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: description }}
                      className="bold"
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Counter;
