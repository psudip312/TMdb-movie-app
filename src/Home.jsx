import React, { useState } from "react";
import TrendingTVShows from "./TrendingTVShows";
import Navbar from "./Navbar";
import './Home.css'
import { useEffect } from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Home
 = () => {
const [sortOrder, setSortOrder] = useState();
const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState("");
const handleSortOrder = (order) => {
  setSortOrder(order);
  setSortDropdownOpen(false);
};
const toggleSortDropdown = () => {
  setSortDropdownOpen(!isSortDropdownOpen);
};

  return (
    <div>
    <Navbar />
    <div className="search-container">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search for movies or TV shows"
      className="search-input"
    />
  </div>
  
  
  <div className="sort-container">
  <button onClick={toggleSortDropdown} className="sort-button">
    Sort Order:
  </button>
  {isSortDropdownOpen && (
    <div className="sort-dropdown">
      <button onClick={() => handleSortOrder("asc")} className="sort-option">Ascending</button>
      <button onClick={() => handleSortOrder("desc")} className="sort-option">Descending</button>
    </div>
  )}
</div>

       <TrendingTVShows sortOrder={sortOrder}  searchQuery={searchQuery} />
    </div>
  );
};
export default Home
;





