'use client';
import { testimonialData } from '../../public/data/data';
import useAnimation from '@/hooks/useAnimation';
import Image from 'next/image';
import { MouseEventHandler, useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
const PrevArrow = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="slick-prev slick-arrow d-block"
    >
      <ArrowLeft size={16} weight="bold" />
      Previous
    </button>
  );
};
const NextArrow = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="slick-next slick-arrow d-block"
    >
      Next
      <ArrowRight size={16} weight="bold" />
    </button>
  );
};
const TestimonialV2 = () => {
  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    prevArrow: <PrevArrow onClick={undefined} />,
    nextArrow: <NextArrow onClick={undefined} />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ref: any = useRef();
  const animation = useAnimation(ref);
  return (
    <section className="feedback">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="feedback-title">
                <h3>Review from real Client</h3>
              </div>

              <Slider {...settings} className="feedback-slider">
                {testimonialData.map((test) => (
                  <div key={test.id}>
                    <div className="feedback-slider--item">
                      <div className="feedback-slider--item--details">
                        <h5>{test.review}</h5>
                      </div>
                      <div className="feedback-slider--item--footer d-flex align-items-center ">
                        <Image
                          src={test.user.img}
                          alt="feedback-slider"
                          height={118}
                          width={118}
                        />
                        <div className="feedback-slider--item--author">
                          <h4>{test.user.name}</h4>
                          <p>{test.user.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialV2;
