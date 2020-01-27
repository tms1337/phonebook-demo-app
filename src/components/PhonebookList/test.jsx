import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import PhonebookList from ".";
import PhonebookItem from "../PhonebookItem";

describe("PhonebookList", () => {
  it("renders snasphot correctly", () => {
    const items = [
      {
        name: "Heso",
        surname: "Meso",
        phone: "+007862345",
        address: "Dzembe Lembe 3"
      }
    ];

    const component = renderer.create(<PhonebookList phonebook={items} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders children data correctly", () => {
    const items = [
      {
        name: "Heso",
        phone: "+007862345",
        address: "Dzembe Lembe 3"
      },
      {
        name: "Meso",
        phone: "+002362345",
        address: "Trese Hase 4"
      }
    ];

    const component = mount(<PhonebookList phonebook={items} />);
    expect(component.find(PhonebookItem)).toHaveLength(items.length);

    for (const item of items) {
      expect(component.contains(item.name)).toBe(true);
      expect(component.contains(item.address)).toBe(true);
      expect(component.contains(item.phone)).toBe(true);
    }
  });
});
