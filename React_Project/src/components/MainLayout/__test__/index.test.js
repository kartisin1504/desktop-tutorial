import React from "react";
import MainLayout from "../index";
import { testRender } from "../../../../tests/helper";

describe("Main Layout", () => {
  it("should render its children with the main layout wrapping it", () => {
    const { asFragment, getByText } = testRender(
      <MainLayout>
        <h1>HELLO YOU</h1>
      </MainLayout>
    );
    expect(getByText("HELLO YOU")).toBeInTheDocument();
  });
});
