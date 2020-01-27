import React from "react";
import PhonebookItem from "../PhonebookItem";

const PhonebookList = ({ phonebook, filter = "" }) => {
  const filteredPhoneBook = phonebook.filter(item => {
    return (
      item.name.includes(filter) ||
      item.address.includes(filter) ||
      item.phone.includes(filter)
    );
  });

  const phonebookItems = filteredPhoneBook.map(item => (
    <PhonebookItem key={item.phone} item={item} />
  ));

  return <div>{phonebookItems}</div>;
};

export default PhonebookList;
