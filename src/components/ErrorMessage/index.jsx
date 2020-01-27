import React from "react";
import * as merge from "deepmerge";

import { colors } from "../../ui";

const ErrorMessage = ({ styles: propStyles = {} }) => {
  const styles = merge(defaultStyles, propStyles);

  return <div style={styles.root}>An error has occcured</div>;
};

const defaultStyles = {
  root: {
    color: colors.DANGER
  }
};

export default ErrorMessage;
