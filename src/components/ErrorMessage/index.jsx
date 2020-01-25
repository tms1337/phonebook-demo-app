import React from "react";
import { colors } from "../../ui";

const ErrorMessage = () => {
  return <div style={styles.root}>An error has occcured</div>;
};

const styles = {
  root: {
    color: colors.DANGER
  }
};

export default ErrorMessage;
