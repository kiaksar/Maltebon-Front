import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LoginPage from "../components/LoginPage/LoginPage";
import { rest } from "msw";
import { setupServer } from "msw/node";

test("it should render login page correctly", async () => {
  render(<LoginPage />);
  const usernameBox = screen.getByText("Username");
  const passwordBox = screen.getByText("Password");
  const loginButton = screen.getByRole("button");
  expect(usernameBox).toBeInTheDocument();
  expect(passwordBox).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});
