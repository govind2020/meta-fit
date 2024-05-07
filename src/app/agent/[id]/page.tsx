'use client';
import Properties from '@/components/PropertyPagination';
import {
  agentInformationData,
  propertiesData,
  reviewData,
} from '../../../../public/data/data';
import { StarIcon } from '../../../../public/data/svgImages';
import useTitle from '@/hooks/useTitle';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Link as PageLink } from 'react-scroll';
import { EnvelopeSimpleOpen, Phone, Plus } from 'phosphor-react';
import React, { useRef } from 'react';
import { UrlObject } from 'url';

interface AgentInformation {
  id: number;
  image: string;
  name: string;
  rating: number;
  phone: string;
  email: string;
  about: string[];
  experience: number;
  propertyType: string[];
  area: string;
  address: string;
  license: string;
  website: string;
  socialMedia: { id: number; icon: JSX.Element; link: string }[];
}

interface ReviewData {
  id: number;
  review: string;
  rating: number;
  date: string;
  user: {
    name: string;
    position: string;
    image: string;
  };
}

interface AgentProps {
  params: {
    id: string;
  };
}

const Agent: React.FC<AgentProps> = ({ params }) => {
  const agent: any = agentInformationData.find(
    (info) => info.id === +params.id,
  );
  const property = useRef<HTMLDivElement>(null);
  const propertyInView = useInView(property);

  const about = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(about);

  const review = useRef<HTMLDivElement>(null);
  const reviewInView = useInView(review);

  return (
    <section className="agent-details">
      <div className="agent-details--hero">
        <div className="agent-details--hero-banner">
          <Image
            height={250}
            width={1800}
            src="/images/agent/agent-cover-bg.png"
            alt="agent-cover-bg"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="agent-details--content">
                <div className="agent-details--content-thumb">
                  <Image
                    height={183}
                    width={183}
                    src={agent.image}
                    alt="agent"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
                <div className="agent-details--content-name">
                  <h5>{agent.name}</h5>
                  <div className="review-stars d-flex align-items-center">
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item active">
                        <StarIcon />
                      </li>
                      <li className="list-inline-item active">
                        <StarIcon />
                      </li>
                      <li className="list-inline-item active">
                        <StarIcon />
                      </li>
                      <li className="list-inline-item active">
                        <StarIcon />
                      </li>
                      <li className="list-inline-item ">
                        <StarIcon />
                      </li>
                    </ul>
                    <span>{agent.rating} review</span>
                  </div>
                </div>
                <div className="agent-details--content-contact">
                  <a
                    href="tel:+05656565656"
                    className="phone d-flex align-items-end"
                  >
                    <Phone size={24} />
                    <span>{agent.phone}</span>
                  </a>
                  <a
                    href="tel:+05656565656"
                    className="mail d-flex align-items-center"
                  >
                    <EnvelopeSimpleOpen size={24} />
                    <span>{agent.email}</span>
                  </a>
                </div>
                <div className="agent-details--content-button">
                  <Link href="/contact" className="btn">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="agent-details--items">
        <div className="container">
          <div className="row scrollspy">
            <div className="col-12">
              <ul className="list-unstyled">
                <li className="list-inline-item">
                  <PageLink
                    activeClass="active"
                    to="rent"
                    spy={true}
                    smooth={true}
                    offset={-250}
                    duration={300}
                    className={`btn btn-small btn-outline ${
                      propertyInView && !aboutInView && 'active'
                    }`}
                  >
                    For rent
                  </PageLink>
                </li>
                <li className="list-inline-item">
                  <PageLink
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={300}
                    className={`btn btn-small btn-outline ${
                      aboutInView &&
                      !reviewInView &&
                      !propertyInView &&
                      'active'
                    }`}
                  >
                    About
                  </PageLink>
                </li>
                <li className="list-inline-item">
                  <PageLink
                    activeClass="active"
                    to="review"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={300}
                    className={`btn btn-small btn-outline ${
                      reviewInView && !aboutInView && 'active'
                    }`}
                  >
                    Review
                  </PageLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5" ref={property} id="rent">
        <Properties limit={6} showPagination property={propertiesData} />
      </div>
      <div className="container" ref={about} id="about">
        <div className="row">
          <div className="col-12">
            <div className="agent-details--about">
              <div className="agent-details--about-info">
                <div className="agent-details--about-info-author d-flex align-items-center">
                  <div className="agent-details--about-info-author-thumb">
                    <Image
                      height={183}
                      width={183}
                      src={agent.image}
                      alt="agent"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </div>
                  <div className="agent-details--about-info-author-details">
                    <h5>{agent.name}</h5>
                    <div className="review-stars d-flex align-items-center">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item active">
                          <a href="#">
                            <StarIcon />
                          </a>
                        </li>
                        <li className="list-inline-item active">
                          <StarIcon />
                        </li>
                        <li className="list-inline-item active">
                          <StarIcon />
                        </li>
                        <li className="list-inline-item active">
                          <StarIcon />
                        </li>
                        <li className="list-inline-item ">
                          <StarIcon />
                        </li>
                      </ul>
                      <span>{agent.rating}review</span>
                    </div>
                    <a
                      href={`tel:+05656565656`}
                      className="phone d-flex gap-2 align-items-center"
                    >
                      <Phone color="#1c4456" size={24} />
                      <span>{agent.phone}</span>
                    </a>
                    <a
                      href="tel:+05656565656"
                      className="mail d-flex gap-2 align-items-center"
                    >
                      <EnvelopeSimpleOpen size={24} color="#1c4456" />
                      <span>{agent.email}</span>
                    </a>
                  </div>
                </div>
                <p className="agent-details--about-info-author-description">
                  {agent.about.map((item: string, i: number) => {
                    return (
                      <span key={i}>
                        {item} <br /> <br />
                      </span>
                    );
                  })}
                </p>
                <Link href="/contact" className="btn">
                  Contact
                </Link>
              </div>
              <div className="agent-details--about-profile">
                <div className="agent-details--about-profile-experience">
                  <h6>Experience</h6>
                  <p>{agent.experience}+ years experience</p>
                </div>
                <div className="agent-details--about-profile-experience">
                  <h6>Property Types</h6>
                  <p>
                    {agent.propertyType.map((item: string, i: number) => {
                      return <span key={i}>{item}</span>;
                    })}
                  </p>
                </div>
                <div className="agent-details--about-profile-experience">
                  <h6>Aria</h6>
                  <p>{agent.area}</p>
                </div>
                <div className="agent-details--about-profile-experience">
                  <h6>Address</h6>
                  <p>{agent.address}</p>
                </div>
                <div className="agent-details--about-profile-experience d-flex align-items-center justify-content-between flex-wrap">
                  <div className="agent-details--about-profile-experience">
                    <h6>Licencse No.</h6>
                    <p>{agent.license}</p>
                  </div>
                  <div className="agent-details--about-profile-experience">
                    <h6>Website</h6>
                    <p>{agent.website}</p>
                  </div>
                </div>
                <div className="contact-social">
                  <h6>Socila Links</h6>
                  <ul className="list-unstyled list-inline">
                    {agent.socialMedia.map(
                      (item: {
                        id: React.Key | null | undefined;
                        link: string | UrlObject;
                        icon:
                          | string
                          | number
                          | bigint
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | Promise<React.AwaitedReactNode>
                          | null
                          | undefined;
                      }) => (
                        <li key={item.id} className="list-inline-item">
                          <Link target="_blank" href={item.link}>
                            {item.icon}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" ref={review} id="review">
        <div className="row">
          <div className="col-12">
            <div className="agent-details--review">
              <div className="agent-details--review-title d-flex align-items-center justify-content-between">
                <h4>Clients Review</h4>
                <a
                  href="#"
                  className="btn btn-large d-flex align-items-center gap-1"
                >
                  <span>Write a Review</span>
                  <Plus size={24} />
                </a>
              </div>
              {reviewData.map((item) => {
                return (
                  <div key={item.id} className="agent-details--review-item">
                    <p className="agent-details--review-item-description">
                      {item.review}
                    </p>
                    <div className="review-stars d-flex align-items-end">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item active">
                          <StarIcon />
                        </li>
                        <li className="list-inline-item active">
                          <StarIcon />
                        </li>
                        <li className="list-inline-item active">
                          <StarIcon />
                        </li>
                        <li className="list-inline-item active">
                          <StarIcon />
                        </li>
                        <li className="list-inline-item ">
                          <StarIcon />
                        </li>
                      </ul>
                      <span className="me-5">{item.rating} review</span>
                      <span>{item.date}</span>
                    </div>
                    <div className="agent-details--review-item-author d-flex align-items-center">
                      <div className="agent-details--review-item-author-thumb">
                        <Image
                          src={item.user.image}
                          alt="review"
                          height={80}
                          width={80}
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                          }}
                        />
                      </div>
                      <div className="agent-details--review-item-author-details">
                        <h4>{item.user.name}</h4>
                        <p>{item.user.position}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agent;
