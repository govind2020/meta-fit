'use client';
import { MagnifyingGlass, MapPin } from 'phosphor-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const Hero = () => {
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
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-10 mt-0">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hero-shape"
            >
              <Image
                src="/images/hero/hero.png"
                alt="hero"
                height={822}
                width={613}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="hero-content">
                <h1 className="hero-content-title">
                  Find a perfect Gym Where you&rsquo;ll love to Exercise
                </h1>
                <p className="hero-content-description">
                  We helps to Achieve Your Goal In Fitness.
                </p>
              </div>
              <div className="hero-form">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
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
                            <li onClick={() => handleCity('Florida')}>
                              Florida
                            </li>
                            <li onClick={() => handleCity('Orlendo')}>
                              Orlendo
                            </li>
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
                            <li
                              onClick={() => handleProperty('Multiplex House')}
                            >
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
                              <span className="dummyItem">
                                $15000 - $350000
                              </span>
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
                          className="btn btn-large submit-button d-flex align-items-center w-100 ms-auto justify-content-center"
                          type="submit"
                        >
                          <MagnifyingGlass size={30} weight="bold" />
                          <span className="d-md-none d-inline-block">
                            Search
                          </span>
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
                            <li onClick={() => handleCity('Florida')}>
                              Florida
                            </li>
                            <li onClick={() => handleCity('Orlendo')}>
                              Orlendo
                            </li>
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
                            <li
                              onClick={() => handleProperty('Multiplex House')}
                            >
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
                              <span className="dummyItem">
                                $15000 - $350000
                              </span>
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
                          <span className="d-md-none d-inline-block">
                            Search
                          </span>
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
                            <li onClick={() => handleCity('Florida')}>
                              Florida
                            </li>
                            <li onClick={() => handleCity('Orlendo')}>
                              Orlendo
                            </li>
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
                            <li
                              onClick={() => handleProperty('Multiplex House')}
                            >
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
                              <span className="dummyItem">
                                $15000 - $350000
                              </span>
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
                          <span className="d-md-none d-inline-block">
                            Search
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
