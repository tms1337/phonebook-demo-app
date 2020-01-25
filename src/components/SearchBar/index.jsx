import React from "react";
import TextField from "@material-ui/core/TextField";

import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

const SearchBar = ({ setSearchQuery, styles: customStyles }) => {
  return (
    <TextField
      style={{ ...styles.searchBox, ...customStyles }}
      id="standard-basic"
      label="Enter your search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        )
      }}
      onChange={({ target: { value } }) => {
        setSearchQuery(value);
      }}
    />
  );
};

const styles = {
  searchBox: {
    width: "500px"
  }
};

export default SearchBar;
