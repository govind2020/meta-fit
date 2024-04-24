import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AreaIcon,
  BathIcon,
  BedIcon,
  Location,
  PropertyTypeIcon,
} from '../../public/data/svgImages';

interface PropertyCardProps {
  location?: string;
  bed?: number;
  bath?: number;
  area?: number;
  type?: string;
  price?: number;
  coverImg?: string;
  title?: string;
  id?: string | number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  location,
  bed,
  bath,
  area,
  type,
  price = '',
  coverImg = '',
  title = '',
  id,
}) => {
  return (
    <motion.div
      layout
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 25,
      }}
      className="properties-card agriculture resident"
    >
      <motion.div className="properties-card--thumb">
        <Image
          height={260}
          width={384}
          src={coverImg}
          alt={title}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </motion.div>
      <motion.div className="properties-card--content">
        <motion.div className="properties-card--content--title">
          <Link href={`/property/${id}`}>
            <span>{title.split(' ').slice(0, 5).join(' ')}</span>
          </Link>
        </motion.div>
        <motion.div className="d-flex align-items-center properties-card--content--address">
          <Location />
          <span>{location}</span>
        </motion.div>
        <motion.ul className="list-unstyled properties-card--content--features">
          <motion.li className="d-flex align-items-center">
            <BedIcon />
            <span>{bed} Bed Room</span>
          </motion.li>
          <motion.li className="d-flex align-items-center">
            <BathIcon />
            <span>{bath} Bath</span>
          </motion.li>
          <motion.li className="d-flex align-items-center">
            <AreaIcon />
            <span>{area} sqft</span>
          </motion.li>
          <motion.li className="d-flex align-items-center">
            <PropertyTypeIcon />
            <span>{type}</span>
          </motion.li>
        </motion.ul>
        <motion.div className="properties-card--footer d-flex align-items-center justify-content-between">
          <Link href={`/property/${id}`} passHref>
            <span className="btn btn-small">View Details</span>
          </Link>
          <h5>${price.toLocaleString()}</h5>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PropertyCard;
