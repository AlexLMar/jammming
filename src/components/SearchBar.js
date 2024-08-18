import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <>
      <form onSubmit={props.onSubmit} className={styles.searchBar}>
        <input
          value={props.userInput}
          onChange={props.onChange}
          className={styles.searchInput}
        />
        <button className={styles.searchButton} onClick={props.onSubmit}>
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
