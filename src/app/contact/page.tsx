'use client';
import { FC } from 'react';
import useTitle from '@/hooks/useTitle';
import { EnvelopeSimpleOpen, Phone, User } from 'phosphor-react';
import { socialMediaData } from '../../../public/data/data';

const Contact: FC = () => {
  useTitle('Contact Us | MetaFit');
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-10 mx-auto">
            <div className="contact-title text-center">
              <h1>Get In Touch</h1>
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
            <div className="contact-form">
              <div className="contact-form-layout">
                <h4>Send Message</h4>
                <form className="contact-form-items">
                  <div className="input-group">
                    <span className="input-group-text">
                      <User size={20} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <EnvelopeSimpleOpen size={20} />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <Phone size={20} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      rows={15}
                      cols={20}
                      defaultValue={''}
                    />
                  </div>
                  <div className="w-100 contact-form-button">
                    <button type="submit" className="btn btn-large">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="contact-form-address">
                <h6>Office Address</h6>
                <p>1421 San Pedro St, Los Angeles, CA 90015</p>
                <a
                  href="tel:+05656565656"
                  className="phone d-flex align-items-center"
                >
                  <Phone size={24} />
                  <span>(302) 555-0107</span>
                </a>
                <a
                  href="mailto:staticmania@gmail.com"
                  className="mail d-flex align-items-center"
                >
                  <EnvelopeSimpleOpen size={20} />
                  <span>staticmania@gmail.com</span>
                </a>
                <div className="contact-social">
                  <h6>Socila Links</h6>
                  <ul className="list-unstyled list-inline">
                    {socialMediaData.map((media) => (
                      <li key={media.id} className="list-inline-item">
                        <a href="#">{media.icon}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
