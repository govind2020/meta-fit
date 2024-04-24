'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="about">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container"
      >
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8 mx-auto">
            <div className="about-content text-center">
              <h1>Reimagining real estate to make it easier to unlock.</h1>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="about-thumbs">
              <div className="about-thumbs-item grid-col-span-2 order-1 order-sm-1">
                <Image
                  src="/images/about/about1.png"
                  alt="about"
                  height={400}
                  width={792}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
              <div className="about-thumbs-item order-3 order-sm-2">
                <Image
                  src="/images/about/about2.png"
                  alt="about"
                  height={400}
                  width={384}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
              <div className="about-thumbs-item order-4 order-sm-3">
                <Image
                  src="/images/about/about3.png"
                  alt="about"
                  height={400}
                  width={384}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
              <div className="about-thumbs-item grid-col-span-2 oreder-2 order-sm-4">
                <Image
                  src="/images/about/about4.png"
                  alt="about"
                  height={400}
                  width={792}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
