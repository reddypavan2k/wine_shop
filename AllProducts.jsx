import React, { useContext, useState } from 'react';
import './AllProducts.css';
import { StoreContext } from '../../context/StoreContext';
import DrinkItem from '../../components/DrinkItem/DrinkItem';
import Search from '../Search/Search'; // Import Search component

const ITEMS_PER_PAGE = 50; // Set the number of items per page

const AllProducts = () => {
  const { food_list } = useContext(StoreContext);

  // States for search, category, price filters, and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  // Unique categories extracted from the food_list
  const categories = ['All', ...new Set(food_list.map((item) => item.category))];

  // Filter the food_list based on the search term, category, and price range
  const filteredFoodList = food_list.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesPrice =
      priceRange === 'All' ||
      (priceRange === 'Low' && item.price < 10) ||
      (priceRange === 'Medium' && item.price >= 10 && item.price <= 20) ||
      (priceRange === 'High' && item.price > 20);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredFoodList.length / ITEMS_PER_PAGE);

  // Get the current page's products
  const currentPageProducts = filteredFoodList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handle navigation to the next or previous page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="all-products-page">
      <h1>All Products</h1>

      {/* Filters Section */}
      <div className="filters">
        {/* Search Bar */}
        <Search
          searchTerm={searchTerm}
          onSearchChange={(value) => setSearchTerm(value)}
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-dropdown"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Price Filter */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="filter-dropdown"
        >
          <option value="All">All Prices</option>
          <option value="Low">Under $10</option>
          <option value="Medium">$10 - $20</option>
          <option value="High">Above $20</option>
        </select>
      </div>

      {/* Products List */}
      <div className="all-products-list">
        {currentPageProducts.length > 0 ? (
          currentPageProducts.map((item, index) => (
            <DrinkItem
              key={index}
              item={item}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No products found matching your filters.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {filteredFoodList.length > ITEMS_PER_PAGE && (
        <div className="pagination">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
