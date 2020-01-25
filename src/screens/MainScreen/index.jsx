import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import useApi from "../../hooks/useApi";
import apiConfig from "../../config/api";
import AppLayout from "../../layouts/AppLayout";
import SearchBar from "../../components/SearchBar";
import PhonebookList from "../../components/PhonebookList";
import ErrorMessage from "../../components/ErrorMessage";

const MainScreen = () => {
  const { data, error, loading } = useApi({
    url: apiConfig.url,
    dataMapper: data => {
      const { contacts } = data;

      return contacts.map(contact => ({
        ...contact,
        phone: contact["phone_number"]
      }));
    }
  });
  const [filter, setFilter] = useState("");

  if (loading) {
    return (
      <AppLayout>
        <CircularProgress />
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout>
        <ErrorMessage error={error} />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div style={styles.searchBarContainer}>
        <SearchBar setSearchQuery={setFilter} />
      </div>

      <PhonebookList phonebook={data} filter={filter} />
    </AppLayout>
  );
};

const styles = {
  searchBarContainer: {
    marginBottom: "100px"
  }
};

export default MainScreen;
