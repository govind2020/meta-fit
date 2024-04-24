'use client';
import Pagination from '@/components/Pagination';
import { agentInformationData } from '../../../public/data/data';
import { StarIcon } from '../../../public/data/svgImages';
import useTitle from '@/hooks/useTitle';
import Image from 'next/image';
import Link from 'next/link';
import { CaretDown, MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';

interface AgentInformation {
  id: number;
  image: string;
  name: string;
  rating: number;
  propertyType: string[];
  area: string;
}

const AgentList: React.FC = () => {
  const [agentData, setAgentData] = useState<AgentInformation[]>([
    ...agentInformationData,
  ]);
  const [originalAgentData] = useState<AgentInformation[]>([
    ...agentInformationData,
  ]);
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 8;

  const totalPage: number = Math.ceil(agentData.length / itemsPerPage);

  const paginateData = (): AgentInformation[] => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return agentData.slice(startIndex, endIndex);
  };

  const currentPageData: AgentInformation[] = paginateData();

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const paginateFunction = {
    totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
  };

  const [review, setReview] = useState<boolean>(false);
  const [selectedReview, setSelectedReview] = useState<string | null>(null);

  const handleReview = (value: string) => {
    setSelectedReview(value);

    if (value === selectedReview) {
      setAgentData([...originalAgentData]);
    } else {
      const reviewData: AgentInformation[] = originalAgentData.filter(
        (review) => review.propertyType.includes(value),
      );
      setAgentData(reviewData);
    }

    setReview(!review);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue: string = e.target.value.toLowerCase();
    setSearch(searchValue);

    const filteredData: AgentInformation[] = originalAgentData.filter(
      (property) => property.area.toLowerCase().includes(searchValue),
    );
    setAgentData(filteredData);
  };

  const handleReset = () => {
    setSearch('');
    setSelectedReview(null);
    setAgentData([...agentInformationData]);
  };

  function collectUniquePropertyTypes(array: AgentInformation[]): string[] {
    const uniquePropertyTypes: Set<string> = new Set();
    array.forEach((item) => {
      if (Array.isArray(item.propertyType)) {
        item.propertyType.forEach((type) => {
          uniquePropertyTypes.add(type);
        });
      }
    });

    return Array.from(uniquePropertyTypes);
  }
  const types: string[] = collectUniquePropertyTypes(originalAgentData);

  return (
    <section className="filter">
      <div className="container">
        <div className="row">
          <div className="filter-title">
            <h3>Some Nearby Good Agents</h3>
          </div>
          <div className="filter-content">
            <div className="filter-content-properties d-flex align-items-center">
              <div className="input-group filter-input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter state address"
                  value={search}
                  onChange={handleSearch}
                />
                <span className="input-group-text">
                  <MagnifyingGlass size={20} />
                </span>
              </div>
              <div className="filter-buy">
                <div className="dropholder">
                  <div
                    onClick={() => setReview(!review)}
                    className={`customdropdown d-flex justify-content-between align-items-center  ${
                      review ? 'active' : ''
                    }`}
                  >
                    <p className="btn btn-large btn-outline">
                      {selectedReview && <span>{selectedReview}</span>}
                      <span className="dummyItem">Property Type </span>
                      <CaretDown size={20} weight="bold" />
                    </p>
                  </div>
                  <ul className="dropdownMenu">
                    {types.map((item) => (
                      <li key={item} onClick={() => handleReview(item)}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="filter-search">
                <button
                  onClick={handleReset}
                  className="btn btn-large d-flex align-content-center"
                >
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="agent">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-2 g-sm-4 g-3">
                {currentPageData.slice(0, 8).map((agent) => (
                  <div className="agent-card" key={agent.id}>
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      height={282}
                      width={282}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                    <div className="agent-card-content">
                      <h6>{agent.name}</h6>
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
                          <li className="list-inline-item">
                            <StarIcon />
                          </li>
                        </ul>
                        <span>{agent.rating} review</span>
                      </div>
                      <Link
                        href={`/agent/${agent.id}`}
                        className="btn btn-outline btn-small"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination paginateFunction={paginateFunction} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentList;
