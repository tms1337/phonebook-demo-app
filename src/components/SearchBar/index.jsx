import React from "react";
import TextField from "@material-ui/core/TextField";
import * as merge from "deepmerge";

import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

const SearchBar = ({ setSearchQuery, styles: propStyles = {} }) => {
  const styles = merge(defaultStyles, propStyles);

  return (
    <TextField
      style={styles.searchBox}
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

const defaultStyles = {
  searchBox: {
    width: "500px"
  }
};

export default SearchBar;
