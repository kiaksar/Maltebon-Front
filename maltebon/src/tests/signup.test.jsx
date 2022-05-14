import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignupPage from "../components/SignupPage/SignupPage";

test("it should render signup page correctly", async () => {
  render(<SignupPage />);
  const usernameBox = screen.getByText("Username");
  const passwordBox = screen.getByText("Password");
  const confPasswordBox = screen.getByText("Conf-Password");
  const emailBox = screen.getByText("Email");
  const signupButton = screen.getByTitle("Sign up");
  expect(usernameBox).toBeInTheDocument();
  expect(passwordBox).toBeInTheDocument();
  expect(confPasswordBox).toBeInTheDocument();
  expect(emailBox).toBeInTheDocument();
  expect(signupButton).toBeInTheDocument();
});
