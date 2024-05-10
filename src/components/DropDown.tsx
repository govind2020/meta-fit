'use client';

import React, { useState } from 'react';

function Dropdown() {
  const [selectedPrice, setSelectedPrice] = useState('Bid Price');

  const handleSelectPrice = (price: any) => {
    setSelectedPrice(price);
  };

  return (
    <div className="dropdown py-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedPrice == 'Price Bid' ? 'Bid Price' : selectedPrice}
      </button>
      <ul className="dropdown-menu">
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleSelectPrice('Normal Price')}
          >
            Normal Price
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleSelectPrice('30% Price')}
          >
            30% off
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
