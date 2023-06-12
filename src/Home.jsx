import React, { useState } from "react";
import TrendingTVShows from "./TrendingTVShows";
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
  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <div>
      <button onClick={toggleSortDropdown}>
        Sort Order:
      </button>
      {isSortDropdownOpen && (
        <div>
          <button onClick={() => handleSortOrder("asc")}>Ascending</button>
          <button onClick={() => handleSortOrder("desc")}>Descending</button>
        </div>
      )}
    </div>
       <TrendingTVShows sortOrder={sortOrder}  searchQuery={searchQuery} />
    </div>
  );
};
export default Home
;





