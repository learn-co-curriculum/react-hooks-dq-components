import React from "react";

function Search() {
  return (
    <form className="search">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        autoComplete="off"
      />
      <input type="submit" value="🔍" />
    </form>
  );
}

export default Search;
