import PropertyPagination from '@/components/PropertyPagination';
import PropertyMapInfo from '@/components/PropertyMapInfo';
import PropertySlider from '@/components/PropertySlider';
import { propertiesData } from '../../../../public/data/data';
import {
  StarIcon,
  Arrow,
  PhoneIcon,
  EnvelopeIcon,
} from '../../../../public/data/svgImages';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: { title: string } = {
  title: 'Property Details | RealStatic',
};

export const generateStaticParams = async (): Promise<{ id: string }[]> => {
  return propertiesData.map((properties) => ({
    id: properties.id.toString(),
  }));
};

interface FeatureDetails {
  parking: boolean;
  outdoor: boolean;
  ac: boolean;
  buildYear: number;
  hoa: boolean;
  persqftprice: number;
  listed: boolean;
  property: any;
}

interface AgentInfo {
  id: string;
  img: string;
  name: string;
  rating: number;
  phone: string;
  email: string;
}

interface PropertyDetails {
  title: string;
  location: string;
  price: number;
  monthlyPayment: number;
  details: {
    title: string;
    description: string;
  };
  images: string[];
  features: FeatureDetails;
  agentInfo: AgentInfo;
}

interface PageParams {
  id: string;
}

const page = ({ params }: { params: PageParams }): JSX.Element => {
  const property: PropertyDetails | any = propertiesData.find(
    (property) => property.id === +params.id,
  );

  if (!property) {
    return <div>Property not found</div>;
  }

  const { features, agentInfo } = property;

  return (
    <section className="property-details" id="property-details">
      <div className="property-details-bottom-bar d-lg-none d-block position-fixed">
        <button type="button" className="btn btn-large">
          Request for Visit
        </button>
      </div>
      <div className="container">
        <PropertySlider images={property.images} />
        <div className="row">
          <div className="col-lg-8">
            <div className="property-details-content">
              <div className="property-details-content-title">
                <h4>{property.title}</h4>
                <p className="bold">{property.location}</p>
              </div>
              <div className="property-details-content-radio-button">
                <div className="property-details-content-radio-button-item">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option1"
                  />
                  <label className="property-price-payment" htmlFor="option1">
                    <span className="price">
                      ${property.price.toLocaleString()}
                    </span>
                    <span className="time-period">Online / Cash Payment</span>
                  </label>
                </div>
                <div className="property-details-content-radio-button-item">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option2"
                  />
                  <label className="property-price-payment" htmlFor="option2">
                    <span className="price">
                      ${property.monthlyPayment.toLocaleString()} / month
                    </span>
                    <span className="time-period">0% EMI for 6 Months</span>
                  </label>
                </div>
              </div>
              <div className="property-details-content-details">
                <p className="bold">{property.details.title}</p>
                <p>{property.details.description}</p>
              </div>
              <PropertyMapInfo />
            </div>
            <div className="property-details-highlights">
              <h4>Home Highlights</h4>
              <div className="row">
                <div className="col-sm-6">
                  <dl className="row">
                    <dt className="col-md-4 col-6">Parking</dt>
                    <dd className="col-md-8 col-6">
                      {features.parking ? 'Yes' : 'No Info'}
                    </dd>
                    <dt className="col-md-4 col-6">Outdoor</dt>
                    <dd className="col-md-8 col-6">
                      {features.outdoor ? 'Yes' : 'No Info'}
                    </dd>
                    <dt className="col-md-4 col-6">A/C</dt>
                    <dd className="col-md-8 col-6">
                      {features.ac ? 'Yes' : 'No Info'}
                    </dd>
                    <dt className="col-md-4 col-6">Year Built</dt>
                    <dd className="col-md-8 col-6">{features.buildYear}</dd>
                  </dl>
                </div>
                <div className="col-sm-6">
                  <dl className="row">
                    <dt className="col-md-4 col-6">HOA</dt>
                    <dd className="col-md-8 col-6">
                      {features.hoa ? 'Yes' : 'No Info'}
                    </dd>
                    <dt className="col-md-4 col-6">Price/Sqft</dt>
                    <dd className="col-md-8 col-6">${features.persqftprice}</dd>
                    <dt className="col-md-4 col-6">Listed</dt>
                    <dd className="col-md-8 col-6">
                      {features.listed ? 'Yes' : 'No Info'}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="property-details-agent">
              <h4>Agent Information</h4>
              <div className="property-details-agent-content d-flex align-items-center">
                <div className="property-details-agent-content-thumb">
                  <Image
                    src={agentInfo.img}
                    alt="agent"
                    height={183}
                    width={183}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                <div className="property-details-agent-content-name">
                  <Link href={`/agent/${agentInfo.id}`}>{agentInfo.name}</Link>
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
                    <span>{agentInfo.rating} review</span>
                  </div>
                  <div className="property-details-agent-content-contact">
                    <a
                      href="tel:+05656565656"
                      className="phone d-flex gap-2 align-items-center"
                    >
                      <PhoneIcon />
                      <span>{agentInfo.phone}</span>
                    </a>
                    <a
                      href="tel:+05656565656"
                      className="mail d-flex gap-2 align-items-center"
                    >
                      <EnvelopeIcon />
                      <span>{agentInfo.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="property-details-form d-none d-lg-block">
              <h4>Request for Visit</h4>
              <form className="contact-form-items">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ph-user" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ph-envelope-simple-open" />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ph-phone" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ph-calendar" />
                  </span>
                  <input type="date" className="form-control" />
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
                  <button type="submit" className="btn btn-large d-block w-100">
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 mb-4">
            <div className="d-flex align-items-center justify-content-between properties-header">
              <h3>Featured Properties</h3>
              <Link
                href="/property"
                className="d-md-flex align-items-center d-none"
              >
                <span>Explore All </span>
                <Arrow />
              </Link>
            </div>
          </div>
          <div className="col-12">
            <PropertyPagination
              property={propertiesData}
              showPagination={false}
              category={undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
