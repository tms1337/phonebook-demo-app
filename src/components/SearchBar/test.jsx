import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import SearchBar from ".";

describe("SearchBar", () => {
  it("renders snapshot correctly", () => {
    const component = renderer.create(<SearchBar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("sets the query correctly", () => {
    const setSearchQuery = jest.fn(query => {});
    const component = mount(<SearchBar setSearchQuery={setSearchQuery} />);

    const queryValue = "Jello";

    component.find("input").simulate("change", {
      target: {
        value: queryValue
      }
    });

    expect(setSearchQuery).toHaveBeenCalledTimes(1);
    expect(setSearchQuery).toHaveBeenCalledWith(queryValue);
  });
});
