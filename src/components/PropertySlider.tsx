'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ImageIcon } from '../../public/data/svgImages';
import Image from 'next/image';
import Slider from 'react-slick';

const PropertySlider = ({ images }: any) => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="property-details-banner property-details-banner-for">
          <div className="property-details-banner-featured">
            <Slider
              asNavFor={nav2}
              ref={slider1Ref}
              fade={true}
              autoplay={true}
              speed={1000}
            >
              {images?.map((img: string, i: number) => (
                <span key={i} className="property-details-banner-link">
                  <Image
                    src={img}
                    alt="properties-banner"
                    height={550}
                    width={792}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </span>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="property-details-banner-container">
          <div className="property-details-banner property-details-banner-nav">
            <Slider
              asNavFor={nav1}
              ref={slider2Ref}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              vertical={true}
              verticalSwiping={true}
              autoplay={true}
              speed={1000}
            >
              {images.map((img: string, i: number) => (
                <div key={i} className="property-details-banner-featured">
                  <Image
                    src={img}
                    alt="properties-banner"
                    width={792}
                    height={550}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="totalslide d-flex align-items-center">
            <ImageIcon />
            <span id="totalslide">{images.length} photos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySlider;
