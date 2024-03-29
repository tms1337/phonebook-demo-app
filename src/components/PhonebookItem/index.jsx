import React from "react";
import { colors } from "../../ui";
import * as merge from "deepmerge";

const PhonebookItem = ({
  item: { name, address, phone },
  styles: propStyles = {}
}) => {
  const styles = merge(defaultStyles, propStyles);

  return (
    <div style={styles.root}>
      <div style={styles.title}>{name}</div>
      <div style={styles.title}>{address}</div>
      <div style={styles.content}>{phone}</div>
    </div>
  );
};

const defaultStyles = {
  root: {
    width: "750px",
    textAlign: "center",
    border: "0.5px solid grey",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "25px"
  },
  title: {
    color: colors.SECONDARY
  },
  content: {
    color: colors.PRIMARY,
    fontWeight: 1000,
    fontSize: "25px"
  }
};

export default PhonebookItem;
