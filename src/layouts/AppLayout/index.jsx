import React from "react";
import Header from "../../components/Header";
import { colors } from "../../ui";

const AppLayout = ({ children }) => {
  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <Header
          title="Phonebook"
          styles={{ container: styles.headerContent }}
        />
      </div>
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  root: {
    display: "flex",
    flexDirection: "column"
  },
  header: {
    width: "100vw",
    marginBottom: "5%"
  },
  headerContent: {
    background: colors.PRIMARY
  },
  content: {
    width: "80vw",
    marginLeft: "10vw",
    marginRight: "10vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default AppLayout;
