'use client';
import { CaretDown, MagnifyingGlass } from 'phosphor-react';
const PropertyFilter = ({ propertyFilterFunctionality }: any) => {
  const {
    propertiesData,
    type,
    setType,
    selectedType,
    setBed,
    bed,
    selectedBed,
    search,
    handleSearch,
    handleBed,
    handleType,
    handleReset,
  } = propertyFilterFunctionality;
  return (
    <div className="container">
      <div className="row">
        <div className="filter-title">
          <h3>Find Property</h3>
        </div>
        <div className="filter-content">
          <div className="filter-content-properties d-flex align-items-center">
            <div className="input-group filter-input">
              <input
                type="text"
                className="form-control"
                placeholder="Enter State Address"
                value={search}
                onChange={handleSearch}
              />
              <span className="input-group-text">
                <MagnifyingGlass size={20} weight="bold" />
              </span>
            </div>
            <div className="filter-buy">
              <div className="dropholder">
                <div
                  onClick={() => setType(!type)}
                  className={`customdropdown d-flex justify-content-between align-items-center  ${
                    type ? 'active' : ''
                  }`}
                >
                  <p className="btn btn-large btn-outline d-flex align-items-center">
                    {selectedType && <span>{selectedType}</span>}
                    <span className="dummyItem">Type</span>
                    <span>
                      <CaretDown size={20} weight="bold" />
                    </span>
                  </p>
                </div>
                <ul className="dropdownMenu">
                  {/* {[...new Set(propertiesData.map((item) => item.type))].map((type) => ( */}
                  {propertiesData?.map((item: any) => (
                    <li key={item.type} onClick={() => handleType(type)}>
                      {item.type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="filter-bed">
              <div className="dropholder">
                <div
                  onClick={() => setBed(!bed)}
                  className={`customdropdown d-flex justify-content-between align-items-center  ${
                    bed ? 'active' : ''
                  }`}
                >
                  <p className="btn btn-large btn-outline">
                    {selectedBed && <span>{selectedBed}</span>}
                    <span className="dummyItem">Bed-3</span>
                    <span>
                      <CaretDown size={20} weight="bold" />
                    </span>
                  </p>
                </div>
                <ul className="dropdownMenu">
                  <li onClick={() => handleBed('Bed-2')}>Bed-2</li>
                  <li onClick={() => handleBed('Bed-3')}>Bed-3</li>
                  <li onClick={() => handleBed('Bed-4')}>Bed-4</li>
                </ul>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="btn btn-large close-filter-content"
            >
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
