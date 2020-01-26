import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Table from "./";

describe("Table Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Table data={[]} />);
  });

  it("Should render without errors", () => {
    expect(wrapper.length).toBe(1);
  });
});
