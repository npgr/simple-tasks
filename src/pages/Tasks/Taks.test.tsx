import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Tasks } from "./";

describe("Tasks Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Tasks />);
  });

  it("Should render without errors", () => {
    expect(wrapper.length).toBe(1);
  });
});
