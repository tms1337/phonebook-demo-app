import React from "react";
import renderer from "react-test-renderer";

import Header from ".";

describe("Header", () => {
  it("Snapshot renders", () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
