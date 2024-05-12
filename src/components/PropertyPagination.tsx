'use client';
import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import Pagination from './Pagination';
import { AnimatePresence } from 'framer-motion';
import { propertiesData, GymData } from '../../public/data/data';

interface PropertyData {
  [key: string]: any;
}

interface PaginateFunction {
  [key: string]: any;
}

interface PropertyPaginationProps {
  showPagination: boolean;
  limit?: number;
  property: PropertyData[];
  category?: string;
}

const PropertyPagination: React.FC<PropertyPaginationProps> = ({
  showPagination,
  limit = 3,
  property,
  category,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = limit;
  const totalPage: number = Math.ceil(property?.length / itemsPerPage);

  const paginateData = (): PropertyData[] => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return property?.slice(startIndex, endIndex) || [];
  };

  const currentPageData: PropertyData[] = paginateData();

  const goToNextPage = () => {
    setCurrentPage((prevPage: number) => prevPage + 1);
  };

  const paginateFunction: PaginateFunction = {
    totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
  };

  return (
    <>
      <div className="grid row row-cols-xl-3 row-cols-md-2 g-4">
        {!category &&
          currentPageData.map((property) => (
            <PropertyCard
              location={''}
              bed={0}
              bath={''}
              area={0}
              type={''}
              price={0}
              coverImg={''}
              title={''}
              id={''}
              key={property.id}
              {...property}
            />
          ))}
        {category &&
          GymData.filter((item) => item.category.includes(category))
            .slice(0, limit)
            .map((property) => (
              <AnimatePresence key={property.id}>
                <PropertyCard key={property.id} {...property} />
              </AnimatePresence>
            ))}
      </div>
      {showPagination && <Pagination paginateFunction={paginateFunction} />}
    </>
  );
};

export default PropertyPagination;
