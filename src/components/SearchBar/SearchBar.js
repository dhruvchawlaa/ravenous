import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortOption) => (
      <li key={sortByOptions[sortOption]}>{sortOption}</li>
    ));
  };

  return (
    <div className={styles["search-bar"]}>
      <div className={styles["sort-options"]}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles["input-container"]}>
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className={styles["submit-button"]}>
        <button>Let's Go</button>
      </div>
    </div>
  );
}

export default SearchBar;
