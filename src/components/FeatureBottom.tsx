'use client';
import useAnimation from '@/hooks/useAnimation';
import Image from 'next/image';
import { CheckCircle } from 'phosphor-react';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const FeatureBottom = () => {
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
            src="/images/feature/feature5.png"
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
          <h3>Secure payment system</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. In a free hour, when our power of choice is untrammelled.
          </p>
          <ul className="">
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Find excellent deals</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Friendly host &amp; Fast support</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Secure payment system</span>
            </li>
          </ul>
          <a href="/about" className="btn btn-small">
            Learn More
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureBottom;
