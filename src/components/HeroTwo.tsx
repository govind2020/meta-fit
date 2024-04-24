'use client';
import Image from 'next/image';
import { MagnifyingGlass, MapPin } from 'phosphor-react';
import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
const HeroTwo = () => {
  const [city, setCity] = useState(false);
  const [property, setProperty] = useState(false);
  const [price, setPrice] = useState(false);

  const [selectedCity, setSelectedCity] = useState('');

  const handleCity = (value: string) => {
    setSelectedCity(value);
    setCity(!city);
  };
  const [selectedProperty, setSelectedProperty] = useState('');

  const handleProperty = (value: string) => {
    setSelectedProperty(value);
    setProperty(!property);
  };
  const [selectedPrice, setSelectedPrice] = useState('');

  const handlePrice = (value: string) => {
    setSelectedPrice(value);
    setPrice(!price);
  };
  return (
    <section className="hero hero-v2">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="row"
        >
          <div className="col-xl-8 col-lg-10 mx-auto">
            <div className="hero-shape">
              <Image
                src="/images/hero/hero-bg-2.png"
                alt="hero-bg"
                height={605}
                width={1850}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div
              className="hero-content text-center"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration={1000}
            >
              <h1 className="hero-content-title">
                Find a perfect property Where you&rsquo;ll love to live
              </h1>
              <p className="hero-content-description">
                We helps businesses customize, automate and scale up their ad
                production and delivery.
              </p>
            </div>
            <div
              className="hero-form"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration={1000}
            >
              <nav>
                <div
                  className="nav nav-tabs justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-buy-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-buy"
                    type="button"
                    role="tab"
                    aria-controls="nav-buy"
                    aria-selected="true"
                  >
                    Buy
                  </button>
                  <button
                    className="nav-link"
                    id="nav-sell-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-sell"
                    type="button"
                    role="tab"
                    aria-controls="nav-sell"
                    aria-selected="false"
                  >
                    Sell
                  </button>
                  <button
                    className="nav-link"
                    id="nav-rent-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-rent"
                    type="button"
                    role="tab"
                    aria-controls="nav-rent"
                    aria-selected="false"
                  >
                    Rent
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-buy"
                  role="tabpanel"
                  aria-labelledby="nav-buy-tab"
                >
                  <form className="row align-items-center gutter-2">
                    <div className="col-md-3 col-6">
                      <label className="form-label">City/Street</label>
                      <div className="dropholder">
                        <div
                          onClick={() => setCity(!city)}
                          className={`customdropdown d-flex justify-content-between align-items-center  ${
                            city ? 'active' : ''
                          }`}
                        >
                          <p>
                            {selectedCity && <span>{selectedCity}</span>}
                            <span className="dummyItem">New York City </span>
                          </p>
                          <MapPin size={20} weight="bold" color="#1c4456" />
                        </div>
                        <ul className="dropdownMenu">
                          <li onClick={() => handleCity('New York City')}>
                            New York City
                          </li>
                          <li onClick={() => handleCity('Washington DC')}>
                            Washington DC
                          </li>
                          <li onClick={() => handleCity('Florida')}>Florida</li>
                          <li onClick={() => handleCity('Orlendo')}>Orlendo</li>
                          <li onClick={() => handleCity('Alaska')}>Alaska</li>
                          <li onClick={() => handleCity('Mexico City')}>
                            Mexico City
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <label className="form-label">Property Type</label>
                      <div className="dropholder">
                        <div
                          onClick={() => setProperty(!property)}
                          className={`customdropdown d-flex justify-content-between align-items-center  ${
                            property ? 'active' : ''
                          }`}
                        >
                          <p>
                            {selectedProperty && (
                              <span>{selectedProperty}</span>
                            )}
                            <span className="dummyItem">Duplex Huse</span>
                          </p>
                          <svg
                            width={9}
                            height={14}
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33333 9L4.16667 14L0 9"
                              fill="#417086"
                            />
                            <path
                              d="M0.000163078 5L4.16683 -3.64256e-07L8.3335 5"
                              fill="#417086"
                            />
                          </svg>
                        </div>
                        <ul className="dropdownMenu">
                          <li onClick={() => handleProperty('Duplex House')}>
                            Duplex House
                          </li>
                          <li onClick={() => handleProperty('Single House')}>
                            Single House
                          </li>
                          <li onClick={() => handleProperty('Multiplex House')}>
                            Multiplex House
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-8">
                      <label className="form-label">Property Price</label>
                      <div className="dropholder">
                        <div
                          onClick={() => setPrice(!price)}
                          className={`customdropdown d-flex justify-content-between align-items-center  ${
                            price ? 'active' : ''
                          }`}
                        >
                          <p>
                            {selectedPrice && <span>{selectedPrice}</span>}
                            <span className="dummyItem">$15000 - $350000</span>
                          </p>
                          <svg
                            width={9}
                            height={14}
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33333 9L4.16667 14L0 9"
                              fill="#417086"
                            />
                            <path
                              d="M0.000163078 5L4.16683 -3.64256e-07L8.3335 5"
                              fill="#417086"
                            />
                          </svg>
                        </div>
                        <ul className="dropdownMenu">
                          <li onClick={() => handlePrice('$15000 - $350000')}>
                            $15000 - $350000
                          </li>
                          <li onClick={() => handlePrice('$10000 - $300000')}>
                            $10000 - $30000
                          </li>
                          <li onClick={() => handlePrice('$20000 - $400000')}>
                            $20000 - $40000
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-6 text-md-end">
                      <button
                        className="btn btn-large submit-button d-flex align-items-center w-100 justify-content-center"
                        type="submit"
                      >
                        <MagnifyingGlass size={30} weight="bold" />
                        <span className="d-md-none d-inline-block">Search</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-sell"
                  role="tabpanel"
                  aria-labelledby="nav-sell-tab"
                >
                  <form className="row align-items-center gutter-2">
                    <div className="col-md-3 col-6">
                      <label className="form-label">City/Street</label>
                      <div className="dropholder">
                        <div
                          onClick={() => setCity(!city)}
                          className={`customdropdown d-flex justify-content-between align-items-center  ${
                            city ? 'active' : ''
                          }`}
                        >
                          <p>
                            {selectedCity && <span>{selectedCity}</span>}
                            <span className="dummyItem">New York City </span>
                          </p>
                          <MapPin size={20} weight="bold" color="#1c4456" />
                        </div>
                        <ul className="dropdownMenu">
                          <li onClick={() => handleCity('New York City')}>
                            New York City
                          </li>
                          <li onClick={() => handleCity('Washington DC')}>
                            Washington DC
                          </li>
                          <li onClick={() => handleCity('Florida')}>Florida</li>
                          <li onClick={() => handleCity('Orlendo')}>Orlendo</li>
                          <li onClick={() => handleCity('Alaska')}>Alaska</li>
                          <li onClick={() => handleCity('Mexico City')}>
                            Mexico City
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <label className="form-label">Property Type</label>
                      <div className="dropholder">
                        <div
                          onClick={() => setProperty(!property)}
                          className={`customdropdown d-flex justify-content-between align-items-center  ${
                            property ? 'active' : ''
                          }`}
                        >
                          <p>
                            {selectedProperty && (
                              <span>{selectedProperty}</span>
                            )}
                            <span className="dummyItem">Duplex Huse</span>
                          </p>
                          <svg
                            width={9}
                            height={14}
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33333 9L4.16667 14L0 9"
                              fill="#417086"
                            />
                            <path
                              d="M0.000163078 5L4.16683 -3.64256e-07L8.3335 5"
                              fill="#417086"
                            />
                          </svg>
                        </div>
                        <ul className="dropdownMenu">
                          <li onClick={() => handleProperty('Duplex House')}>
                            Duplex House
                          </li>
                          <li onClick={() => handleProperty('Single House')}>
                            Single House
                          </li>
                          <li onClick={() => handleProperty('Multiplex House')}>
                            Multiplex House
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-8">
                      <label className="form-label">Property Price</label>
                      <div className="dropholder">
                        <div
                          onClick={() => setPrice(!price)}
                          className={`customdropdown d-flex justify-content-between align-items-center  ${
                            price ? 'active' : ''
                          }`}
                        >
                          <p>
                            {selectedPrice && <span>{selectedPrice}</span>}
                            <span className="dummyItem">$15000 - $350000</span>
                          </p>
                          <svg
                            width={9}
                            height={14}
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33333 9L4.16667 14L0 9"
                              fill="#417086"
                            />
                            <path
                              d="M0.000163078 5L4.16683 -3.64256e-07L8.3335 5"
                              fill="#417086"
                            />
                          </svg>
                        </div>
                        <ul className="dropdownMenu">
                          <li onClick={() => handlePrice('$15000 - $350000')}>
                            $15000 - $350000
                          </li>
                          <li onClick={() => handlePrice('$10000 - $300000')}>
                            $10000 - $30000
                          </li>
                          <li onClick={() => handlePrice('$20000 - $400000')}>
                            $20000 - $40000
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-6 text-md-end">
                      <button
                        className="btn btn-large submit-button d-flex align-items-center w-100 justify-content-center"
                        type="submit"
                      >
                        <MagnifyingGlass size={30} weight="bold" />
                        <span className="d-md-none d-inline-block">Search</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-rent"
                  role="tabpanel"
                  aria-labelledby="nav-rent-tab"
                >
                  <form className="row align-items-center gutter-2">
                    <div className="col-md-3 col-6">
                      <label className="form-label">City/Street</label>
                      <div className="dropholder">
                        <div
                          onClick={() => setCity(!city)}
                          className={`customdropdown d-flex justify-content-between align-items-center  ${
                            city ? 'active' : ''
                          }`}
                        >
                          <p>
                            {selectedCity && <span>{selectedCity}</span>}
                            <span className="dummyItem">New York City </span>
                          </p>
                          <MapPin size={20} weight="bold" color="#1c4456" />
                        </div>
                        <ul className="dropdownMenu">
                          <li onClick={() => handleCity('New York City')}>
                            New York City
                          </li>
                          <li onClick={() => handleCity('Washington DC')}>
                            Washington DC
                          </li>
                          <li onClick={() => handleCity('Florida')}>Florida</li>
                          <li onClick={() => handleCity('Orlendo')}>Orlendo</li>
                          <li onClick={() => handleCity('Alaska')}>Alaska</li>
                          <li onClick={() => handleCity('Mexico City')}>
                            Mexico City
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <label className="form-label">Property Type</label>
                      <div className="dropholder">
                        <div
                          onClick={() => setProperty(!property)}
                          className={`customdropdown d-flex justify-content-between align-items-center  ${
                            property ? 'active' : ''
                          }`}
                        >
                          <p>
                            {selectedProperty && (
                              <span>{selectedProperty}</span>
                            )}
                            <span className="dummyItem">Duplex Huse</span>
                          </p>
                          <svg
                            width={9}
                            height={14}
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33333 9L4.16667 14L0 9"
                              fill="#417086"
                            />
                            <path
                              d="M0.000163078 5L4.16683 -3.64256e-07L8.3335 5"
                              fill="#417086"
                            />
                          </svg>
                        </div>
                        <ul className="dropdownMenu">
                          <li onClick={() => handleProperty('Duplex House')}>
                            Duplex House
                          </li>
                          <li onClick={() => handleProperty('Single House')}>
                            Single House
                          </li>
                          <li onClick={() => handleProperty('Multiplex House')}>
                            Multiplex House
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-8">
                      <label className="form-label">Property Price</label>
                      <div className="dropholder">
                        <div
                          onClick={() => setPrice(!price)}
                          className={`customdropdown d-flex justify-content-between align-items-center  ${
                            price ? 'active' : ''
                          }`}
                        >
                          <p>
                            {selectedPrice && <span>{selectedPrice}</span>}
                            <span className="dummyItem">$15000 - $350000</span>
                          </p>
                          <svg
                            width={9}
                            height={14}
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33333 9L4.16667 14L0 9"
                              fill="#417086"
                            />
                            <path
                              d="M0.000163078 5L4.16683 -3.64256e-07L8.3335 5"
                              fill="#417086"
                            />
                          </svg>
                        </div>
                        <ul className="dropdownMenu">
                          <li onClick={() => handlePrice('$15000 - $350000')}>
                            $15000 - $350000
                          </li>
                          <li onClick={() => handlePrice('$10000 - $300000')}>
                            $10000 - $30000
                          </li>
                          <li onClick={() => handlePrice('$20000 - $400000')}>
                            $20000 - $40000
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-6 text-md-end">
                      <button
                        className="btn btn-large submit-button d-flex align-items-center w-100 justify-content-center"
                        type="submit"
                      >
                        <MagnifyingGlass size={30} weight="bold" />
                        <span className="d-md-none d-inline-block">Search</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroTwo;
