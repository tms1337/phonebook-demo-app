import React from "react";
import * as merge from "deepmerge";

const Header = ({ title, styles: propStyles = {} }) => {
  const styles = merge(defaultStyles, propStyles);

  return (
    <div
      style={{
        ...styles.container,
        ...styles.contentCentered
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

const defaultStyles = {
  container: {
    background: "black",
    height: "100px",
    color: "white"
  },
  contentCentered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default Header;
