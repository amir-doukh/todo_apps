import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the component", () => {
  render(<App />);
  const element = screen.getByText("Liste de TODO");
  expect(element).toBeTruthy();
});
