import React from "react";
import { render, screen } from "@testing-library/react";
import TodoDetails from "../componant/TodoDetails";
import { todosList } from "./fixture";
test("renders the component", () => {
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
      _id: 1,
    }),
    useRouteMatch: () => ({ url: "/todos/1" }),
  }));
  render(<TodoDetails todos={todosList} />);
  const element = screen.getByText("Retour à la liste");
  expect(element).toBeTruthy();
});
