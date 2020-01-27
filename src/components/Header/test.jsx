import React from "react";
import renderer from "react-test-renderer";
import { render } from "enzyme";

import Header from ".";

describe("Header", () => {
  it("Snapshot renders", () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Displays title ", () => {
    const title = "Test title";
    const component = render(<Header title={title} />);
    expect(component.find("h1").text()).toBe(title);
  });
});
