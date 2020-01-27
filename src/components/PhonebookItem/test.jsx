import React from "react";
import renderer from "react-test-renderer";

import PhonebookItem from ".";

describe("PhonebookItem", () => {
  it("Snapshot renders", () => {
    const item = {
      name: "Heso",
      surname: "Meso",
      phone: "+007862345"
    };

    const component = renderer.create(<PhonebookItem item={item} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
