import React from "react";
import renderer from "react-test-renderer";

import ErrorMessage from ".";

describe("ErrorMessage", () => {
  it("Snapshot renders", () => {
    const component = renderer.create(<ErrorMessage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
