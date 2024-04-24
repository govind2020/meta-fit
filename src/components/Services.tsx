'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useAnimation from '@/hooks/useAnimation';
const Services = () => {
  const ref: any = useRef();
  const animation = useAnimation(ref);
  const ref2: any = useRef();
  const animation2 = useAnimation(ref2);
  return (
    <section className="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="service-title">
              <h3>Simple &amp; easy way to find your dream apartment</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="row service-top"
        >
          <div className="col-lg-9 col-sm-12">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <div className="service-card">
                  <Image
                    src="/images/services/service1.png"
                    alt="service"
                    className="service-card--thumb"
                    height={360}
                    width={350}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />

                  <div className="service-card--content">
                    <h4>1. Search your location</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-sm-6">
                <div className="service-card">
                  <Image
                    src="/images/services/service2.png"
                    alt="service"
                    className="service-card--thumb"
                    height={360}
                    width={350}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />

                  <div className="service-card--content">
                    <h4>2. Visit Apartment</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation2}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="row service-bottom"
        >
          <div className="col-lg-9 offset-lg-3 col-sm-12">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <div className="service-card">
                  <Image
                    src="/images/services/service3.png"
                    alt="service"
                    className="service-card--thumb"
                    height={360}
                    width={350}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                  <div className="service-card--content">
                    <h4>3. Get your dream house</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-sm-6">
                <div className="service-card">
                  <Image
                    src="/images/services/service4.png"
                    alt="service"
                    className="service-card--thumb"
                    height={360}
                    width={350}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />

                  <div className="service-card--content">
                    <h4>4. Enjoy your Apartment</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
