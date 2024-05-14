'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface CompanyProps {}

const Company: React.FC<CompanyProps> = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const animation1 = useAnimation();
  const ref2 = useRef<HTMLDivElement>(null);
  const animation2 = useAnimation();

  // Define animation variants
  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    // Trigger animations when component mounts
    animation1.start('visible');
    animation2.start('visible');
  }, [animation1, animation2]);

  return (
    <section className="company">
      <div className="container">
        {/* Company history section */}
        <motion.div
          ref={ref1}
          variants={variants}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="row"
        >
          <div className="col-md-6 order-2 order-md-1">
            <div className="company-history">
              <div className="company-history--header">
                <h3>
                  A note from our <br /> founders.
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour,
                </p>
              </div>
              <ol className="company-history--list">
                <li>
                  <div className="company-history--details">
                    <h6>It all started in 1995</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="company-history--details">
                    <h6>Donate launches in 2007</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="company-history--details">
                    <h6>
                      RealStatic holds its initial public offering in 2008
                    </h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="col-lg-5 col-md-6  order-1 order-md-2">
            <div className="company-history--thumb">
              <Image
                src="/images/about/company-history1.png"
                alt="company-details1"
                width={589}
                height={537}
                layout="responsive"
              />
            </div>
          </div>
        </motion.div>

        {/* Company vision section */}
        <motion.div
          ref={ref2}
          variants={variants}
          initial="hidden"
          animate={animation2}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="row align-items-center"
        >
          <div className="col-md-6 order-lg-1 order-md-2">
            <div className="company-vision--thumb">
              <Image
                src="/images/about/company-history2.png"
                alt="company-details2"
                width={589}
                height={537}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-5 ms-lg-auto  order-lg-2 order-md-1">
            <div className="company-vision--content">
              <h3>Our vision is simple.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. In a free hour, On the other hand, we denounce with
                righteous indignation and dislike men who are so beguiled and
                demoralized by the charms of pleasure of the moment.
                <br />
                <br />
                In a free hour, On the other hand, we denounce with righteous
                indignation and dislike men .
              </p>
              <div className="company-vision--content--author">
                <h6>Jacob Pial</h6>
                <p>CEO at Staticmania</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Company;
