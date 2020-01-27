import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import PhonebookItem from ".";

describe("PhonebookItem", () => {
  it("renders snapshot", () => {
    const item = {
      name: "Heso",
      surname: "Meso",
      phone: "+007862345"
    };

    const component = renderer.create(<PhonebookItem item={item} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders fields correctly", () => {
    const item = {
      name: "Heso",
      address: "Meso",
      phone: "+007862345"
    };

    const component = shallow(<PhonebookItem item={item} />);

    expect(component.contains(item.name)).toBe(true);
    expect(component.contains(item.address)).toBe(true);
    expect(component.contains(item.phone)).toBe(true);
  });
});
