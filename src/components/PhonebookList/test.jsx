import React from "react";
import renderer from "react-test-renderer";

import PhonebookList from ".";

describe("PhonebookList", () => {
  it("Snapshot renders", () => {
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
});
