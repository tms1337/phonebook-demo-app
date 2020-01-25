import React from "react";

const Header = ({ title, styles: customStyles }) => {
  return (
    <div
      style={{
        ...styles.container,
        ...styles.contentCentered,
        ...customStyles
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

const styles = {
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
