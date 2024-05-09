'use client';
import useAnimation from '@/hooks/useAnimation';
import Image from 'next/image';
import { CheckCircle } from 'phosphor-react';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gymMate from '../../public/images/services/gymmate.jpg';

const SweatySwip = () => {
  const ref: any = useRef();
  const animation = useAnimation(ref);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animation}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="row align-items-center feature-bottom"
    >
      <div className="col-md-6 order-xl-1 order-md-2">
        <div className="feature-content-thumb">
          <Image
            height={589}
            width={537}
            src={gymMate}
            alt="feature5"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div className="col-md-6 col-lg-5 me-lg-auto ms-xl-auto order-xl-2 order-md-1">
        <div className="feature-content">
          <h3>Fitness Patner</h3>
          <p>Find Your Fitness Patner 💪 To Achieve Your Goal Faster ⏱</p>
          <ul className="">
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Stay Focused</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Challenge &amp;Each Other</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Grow Together</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Many More..</span>
            </li>
          </ul>
          <a href="/sweatySwip" className="btn btn-small">
            Fitness Patner
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SweatySwip;
