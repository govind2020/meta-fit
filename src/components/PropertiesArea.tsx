'use client';
import { useState } from 'react';
import PropertyPagination from './PropertyPagination';
import { propertiesCategory, propertiesData } from '../../public/data/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useAnimation from '@/hooks/useAnimation';
import { ArrowRight } from 'phosphor-react';

const PropertiesArea = () => {
  const [category, setCategory] = useState('residential');
  const ref: any = useRef();
  const animation = useAnimation(ref);
  return (
    <section className="properties">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container"
      >
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between properties-header">
              <h3>Featured Properties</h3>
              <Link
                href="/property"
                className="d-md-flex align-items-center d-none"
              >
                <span>Explore All </span>
                <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
            <div className="button-group filters-button-group properties-filter">
              {propertiesCategory.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCategory(item.category)}
                  className={`button ${
                    category === item.category ? 'is-checked' : ''
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <PropertyPagination
          limit={6}
          property={propertiesData}
          category={category}
          showPagination={false}
        />
      </motion.div>
    </section>
  );
};

export default PropertiesArea;
