import React, { useState } from 'react';
import Slider from 'react-input-slider';

const ProductFilter = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]); // Initial price range

  const handleSliderChange = ({ x }) => {
    setPriceRange(x);
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-medium mb-2">Price Range</h3>
      <div className="flex items-center">
        <span className="mr-2">₦{priceRange[0]}</span>
        <Slider
          xmin={0}
          xmax={1000} // Adjust max value based on your product prices
          x={priceRange}
          onChange={handleSliderChange}
          className="w-full" // Add styling classes as needed
          trackClassName="bg-gray-200 rounded-lg h-2"
          classNames={{
            slider: 'cursor-grab rounded-full bg-blue-500 h-2 w-4',
          }}
        />
        <span className="ml-2">₦{priceRange[1]} </span>
      </div>
    </div>
  );
};

export default ProductFilter;
