'use client';
import { testimonialData } from '../../public/data/data';
import { QuoteIcon } from '../../public/data/svgImages';
import Image from 'next/image';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { MouseEventHandler } from 'react';
const PrevArrow = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="slick-prev slick-arrow mt-md-0 mt-5 d-block"
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
      className="slick-next slick-arrow mt-md-0 mt-5 d-block"
    >
      Next
      <ArrowRight size={16} weight="bold" />
    </button>
  );
};

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={undefined} />,
    nextArrow: <NextArrow onClick={undefined} />,
  };
  return (
    <section className="testimonial">
      <div className="testimonial-shape-left">
        <Image
          height={781}
          width={390}
          src="/images/testimonial/testimonial-shape-1.png"
          alt="testimonial-shape"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="testimonial-shape-right-top">
        <Image
          height={200}
          width={200}
          src="/images/testimonial/testimonial-shape-2.png"
          alt="testimonial-shape"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="testimonial-shape-right-bottom" />
      <div className="container">
        <div className="row">
          <div className="col-lg-11 offset-lg-1">
            <div className="testimonial-slider">
              <Slider {...settings}>
                {testimonialData.map((item) => {
                  return (
                    <div key={item.id} className="testimonial-slider--item">
                      <div className="testimonial-slider--item--thumb">
                        <Image
                          height={402}
                          width={384}
                          src={item.user.img}
                          alt="client"
                        />
                      </div>
                      <div className="testimonial-slider--item--content">
                        <div className="testimonial-slider--item--header d-flex align-items-center justify-content-between">
                          <div className="testimonial-slider--item--author">
                            <h4>{item.user.name}</h4>
                            <p>{item.user.position}</p>
                          </div>
                          <QuoteIcon />
                        </div>
                        <div className="testimonial-slider--item--details">
                          <h5>{item.review}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
