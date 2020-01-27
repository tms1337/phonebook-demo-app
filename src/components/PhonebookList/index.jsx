import React from "react";
import * as merge from "deepmerge";

import PhonebookItem from "../PhonebookItem";

const PhonebookList = ({ phonebook, filter = "", styles: propStyles = {} }) => {
  const styles = merge(defaultStyles, propStyles);

  const filteredPhoneBook = phonebook.filter(item => {
    return (
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.address.toLowerCase().includes(filter.toLowerCase()) ||
      item.phone.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const phonebookItems = filteredPhoneBook.map(item => (
    <PhonebookItem key={item.phone} item={item} />
  ));

  return <div>{phonebookItems}</div>;
};

const defaultStyles = {};

export default PhonebookList;
