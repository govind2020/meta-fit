'use client';
import {
  AreaIcon,
  BathIcon,
  BedIcon,
  MapIcon,
  PropertyTypeIcon,
} from '../../public/data/svgImages';
import Image from 'next/image';
import React, { useState } from 'react';

const PropertyMapInfo = () => {
  const menu = ['Map', 'School', 'Cinema', 'Shop'];
  const [active, setActive] = useState(0);
  return (
    <div className="property-details-content-local-info">
      <h4>Local Information</h4>
      <ul
        className="nav nav-tabs property-details-content-local-info-tabs"
        id="myTab"
        role="tablist"
      >
        {menu.map((item, index) => (
          <li key={item} className="nav-item" role="presentation">
            <button
              className={active === index ? 'nav-link active' : 'nav-link'}
              id="map-tab"
              onClick={() => setActive(index)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className={active === 0 ? 'tab-pane active' : 'tab-pane fade'}
          id="map"
          role="tabpanel"
          aria-labelledby="map-tab"
        >
          <div className="listing-map">
            <Image
              height={400}
              width={849}
              src="/images/listing/map2.png"
              alt="listing"
              className="listing-map--image"
            />
            <div className="listing-map--shape1 listing-map--pin">
              <Image
                height={44}
                width={34}
                src="/images/listing/pin.png"
                alt="listing"
              />
              <div className="listing-map--pin-content">
                <div className="d-flex align-items-center properties-card--content--address">
                  <MapIcon />
                  <span>2861 62nd Ave, Oakland, CA 94605</span>
                </div>
                <ul className="list-unstyled properties-card--content--features">
                  <li className="d-flex align-items-center">
                    <BedIcon />
                    <span>3 Bed Room</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <BathIcon />
                    <span>1 Bath</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <AreaIcon />
                    <span>1,032 sqft</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <PropertyTypeIcon />
                    <span>Family</span>
                  </li>
                </ul>
                <div className="properties-card--footer d-flex align-items-center justify-content-between">
                  <h5>$649,900</h5>
                </div>
              </div>
            </div>
            <div className="listing-map--shape2 listing-map--pin">
              <Image
                height={44}
                width={34}
                src="/images/listing/pin.png"
                alt="listing"
              />
              <div className="listing-map--pin-content">
                <div className="d-flex align-items-center properties-card--content--address">
                  <MapIcon />
                  <span>2861 62nd Ave, Oakland, CA 94605</span>
                </div>
                <ul className="list-unstyled properties-card--content--features">
                  <li className="d-flex align-items-center">
                    <BedIcon />
                    <span>3 Bed Room</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <BathIcon />
                    <span>1 Bath</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <AreaIcon />
                    <span>1,032 sqft</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <PropertyTypeIcon />
                    <span>Family</span>
                  </li>
                </ul>
                <div className="properties-card--footer d-flex align-items-center justify-content-between">
                  <h5>$649,900</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={active === 1 ? 'tab-pane active' : 'tab-pane fade'}
          id="school"
          role="tabpanel"
          aria-labelledby="school-tab"
        >
          <div className="listing-map">
            <Image
              height={400}
              width={849}
              src="/images/listing/map2.png"
              alt="listing"
              className="listing-map--image"
            />
            <div className="listing-map--shape1 listing-map--pin">
              <Image
                height={44}
                width={34}
                src="/images/listing/pin.png"
                alt="listing"
              />
              <div className="listing-map--pin-content">
                <div className="d-flex align-items-center properties-card--content--address">
                  <MapIcon />
                  <span>2861 62nd Ave, Oakland, CA 94605</span>
                </div>
                <ul className="list-unstyled properties-card--content--features">
                  <li className="d-flex align-items-center">
                    <BedIcon />
                    <span>3 Bed Room</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <BathIcon />
                    <span>1 Bath</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <AreaIcon />
                    <span>1,032 sqft</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <PropertyTypeIcon />
                    <span>Family</span>
                  </li>
                </ul>
                <div className="properties-card--footer d-flex align-items-center justify-content-between">
                  <h5>$649,900</h5>
                </div>
              </div>
            </div>
            <div className="listing-map--shape4 listing-map--pin">
              <Image
                height={44}
                width={34}
                src="/images/listing/pin.png"
                alt="listing"
              />
              <div className="listing-map--pin-content">
                <div className="d-flex align-items-center properties-card--content--address">
                  <MapIcon />
                  <span>2861 62nd Ave, Oakland, CA 94605</span>
                </div>
                <ul className="list-unstyled properties-card--content--features">
                  <li className="d-flex align-items-center">
                    <BedIcon />
                    <span>3 Bed Room</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <BathIcon />
                    <span>1 Bath</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <AreaIcon />
                    <span>1,032 sqft</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <PropertyTypeIcon />
                    <span>Family</span>
                  </li>
                </ul>
                <div className="properties-card--footer d-flex align-items-center justify-content-between">
                  <h5>$649,900</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={active === 2 ? 'tab-pane active' : 'tab-pane fade'}
          id="crime"
          role="tabpanel"
          aria-labelledby="crime-tab"
        >
          <div className="listing-map">
            <Image
              height={400}
              width={849}
              src="/images/listing/map2.png"
              alt="listing"
              className="listing-map--image"
            />
            <div className="listing-map--shape3 listing-map--pin">
              <Image
                height={44}
                width={34}
                src="/images/listing/pin.png"
                alt="listing"
              />
              <div className="listing-map--pin-content">
                <div className="d-flex align-items-center properties-card--content--address">
                  <MapIcon />
                  <span>2861 62nd Ave, Oakland, CA 94605</span>
                </div>
                <ul className="list-unstyled properties-card--content--features">
                  <li className="d-flex align-items-center">
                    <BedIcon />
                    <span>3 Bed Room</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <BathIcon />
                    <span>1 Bath</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <AreaIcon />
                    <span>1,032 sqft</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <PropertyTypeIcon />
                    <span>Family</span>
                  </li>
                </ul>
                <div className="properties-card--footer d-flex align-items-center justify-content-between">
                  <h5>$649,900</h5>
                </div>
              </div>
            </div>
            {/*Listing map Pins */}
            <div className="listing-map--shape5 listing-map--pin">
              <Image
                height={44}
                width={34}
                src="/images/listing/pin.png"
                alt="listing"
              />
              <div className="listing-map--pin-content">
                <div className="d-flex align-items-center properties-card--content--address">
                  <MapIcon />
                  <span>2861 62nd Ave, Oakland, CA 94605</span>
                </div>
                <ul className="list-unstyled properties-card--content--features">
                  <li className="d-flex align-items-center">
                    <BedIcon />
                    <span>3 Bed Room</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <BathIcon />
                    <span>1 Bath</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <AreaIcon />
                    <span>1,032 sqft</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <PropertyTypeIcon />
                    <span>Family</span>
                  </li>
                </ul>
                <div className="properties-card--footer d-flex align-items-center justify-content-between">
                  <h5>$649,900</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={active === 3 ? 'tab-pane active' : 'tab-pane fade'}
          id="shop"
          role="tabpanel"
          aria-labelledby="shop-tab"
        >
          <div className="listing-map">
            <Image
              height={400}
              width={849}
              src="/images/listing/map2.png"
              alt="listing"
              className="listing-map--image"
            />
            <div className="listing-map--shape2 listing-map--pin">
              <Image
                height={44}
                width={34}
                src="/images/listing/pin.png"
                alt="listing"
              />
              <div className="listing-map--pin-content">
                <div className="d-flex align-items-center properties-card--content--address">
                  <MapIcon />
                  <span>2861 62nd Ave, Oakland, CA 94605</span>
                </div>
                <ul className="list-unstyled properties-card--content--features">
                  <li className="d-flex align-items-center">
                    <BedIcon />
                    <span>3 Bed Room</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <BathIcon />
                    <span>1 Bath</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <AreaIcon />
                    <span>1,032 sqft</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <PropertyTypeIcon />
                    <span>Family</span>
                  </li>
                </ul>
                <div className="properties-card--footer d-flex align-items-center justify-content-between">
                  <h5>$649,900</h5>
                </div>
              </div>
            </div>
            <div className="listing-map--shape3 listing-map--pin">
              <Image
                height={44}
                width={34}
                src="/images/listing/pin.png"
                alt="listing"
              />
              <div className="listing-map--pin-content">
                <div className="d-flex align-items-center properties-card--content--address">
                  <MapIcon />
                  <span>2861 62nd Ave, Oakland, CA 94605</span>
                </div>
                <ul className="list-unstyled properties-card--content--features">
                  <li className="d-flex align-items-center">
                    <BedIcon />
                    <span>3 Bed Room</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <BathIcon />
                    <span>1 Bath</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <AreaIcon />
                    <span>1,032 sqft</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <PropertyTypeIcon />
                    <span>Family</span>
                  </li>
                </ul>
                <div className="properties-card--footer d-flex align-items-center justify-content-between">
                  <h5>$649,900</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyMapInfo;
