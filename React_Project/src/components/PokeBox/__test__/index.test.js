import React from "react";
import PokeBox from "../index";
import { testRender } from "../../../../tests/helper";

describe("PokeBox", () => {
  it("should render correctly-ish [hehe]", () => {
    const { asFragment, getByText } = testRender(<PokeBox />);
    expect(getByText("PokeBox")).toBeInTheDocument();
  });
});
