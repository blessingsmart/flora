import React, { useState, useEffect } from 'react';
import ProductFilter from '../component/ProductFilter'; // Import the ProductFilter component

const ProductCategory = () => {
  const [products, setProducts] = useState([]); // State for product data
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Sample API call simulation (replace with your actual API call)
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null); // Clear any previous errors

      try {
        const response = await fetch('https://your-api.com/products'); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on price range
  useEffect(() => {
    const [minPrice, maxPrice] = products.length > 0 ? products.reduce((acc, product) => {
      return [Math.min(acc[0], product.price), Math.max(acc[1], product.price)];
    }, [products[0].price, products[0].price]) : [0, 1000]; // Handle cases with no products

    const filtered = products.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);
    setFilteredProducts(filtered);
  }, [products, priceRange]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4">
          <ProductFilter />
        </div>
        <div className="w-full md:w-3/4">
          <h2 className="text-2xl font-medium mb-4">Product Category</h2>
          {isLoading ? (
            <p className="text-gray-600">Loading products...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  <p className="text-gray-600">₦{product.price}</p>
                  {/* Add product details, image, etc. as needed */}
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" /> {/* Add image if available */}
                  <p className="text-sm">{product.description}</p> {/* Add description if available */}
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
