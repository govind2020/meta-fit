'use client';
import React, { useEffect, useState } from 'react';
import PropertyPagination from './PropertyPagination';
import PropertyFilter from './PropertyFilter';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface PropertyData {
  type: string;
  bed: number;
  location: string;
  // Add other fields as needed
}

interface MainPropertyAreaProps {
  propertiesData: PropertyData[];
}

const MainPropertyArea: React.FC<MainPropertyAreaProps> = ({
  propertiesData,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchFromUrl = useSearchParams();
  const searchType = searchFromUrl.get('type');
  const searchBed = searchFromUrl.get('bed');
  const searchLocation = searchFromUrl.get('location');

  const [mainProperty, setMainProperty] = useState<PropertyData[]>([
    ...propertiesData,
  ]);
  const [type, setType] = useState<boolean>(false);
  const [bed, setBed] = useState<boolean>(false);
  const [price, setPrice] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBed, setSelectedBed] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');

  const originalData: PropertyData[] = [...propertiesData];

  const handleType = (value: string) => {
    router.push(pathname + '?type=' + value);
    setSelectedBed(null);
    setSearch('');
    setSelectedType(value);
    setType(!type);
  };

  const handleBed = (value: string) => {
    router.push(pathname + '?bed=' + value);
    setSelectedBed(value);
    setBed(!bed);
    setSelectedType(null);
    setSearch('');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    router.push(pathname + '?location=' + searchValue);
    setSearch(searchValue);
    setSelectedType(null);
    setSelectedBed(null);
  };

  const handleReset = () => {
    router.push(pathname);
    setSelectedType(null);
    setSelectedBed(null);
    setSearch('');
    setMainProperty(originalData);
  };

  useEffect(() => {
    if (!type || !bed || !search) {
      setMainProperty(originalData);
    }

    if (searchType) {
      const filteredData = originalData.filter(
        (property) => property.type === searchType,
      );
      setMainProperty(filteredData);
      setSelectedType(searchType);
    }

    if (searchBed) {
      const bedNumber = +searchBed.split('-')[1];
      const filteredData = originalData.filter(
        (property) => property.bed === bedNumber,
      );
      setMainProperty(filteredData);
      setSelectedBed(searchBed);
    }

    if (searchLocation) {
      const filteredData = originalData.filter((property) =>
        property.location.toLowerCase().includes(searchLocation.toLowerCase()),
      );
      setMainProperty(filteredData);
      setSearch(searchLocation);
    }
  }, []);

  const propertyFilterFunctionality = {
    propertiesData,
    type,
    setType,
    selectedType,
    price,
    setPrice,
    bed,
    selectedBed,
    search,
    handleSearch,
    handleReset,
    handleBed,
    setBed,
    handleType,
  };

  return (
    <section className="filter">
      {/* <PropertyFilter propertyFilterFunctionality={propertyFilterFunctionality} /> */}
      <div className="container">
        <div className="listing">
          <PropertyPagination
            limit={6}
            showPagination
            property={mainProperty}
          />
        </div>
      </div>
    </section>
  );
};

export default MainPropertyArea;
