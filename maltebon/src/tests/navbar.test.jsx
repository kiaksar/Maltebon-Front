import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Navbar from "../components/Navbar/Navbar";
test("it should render navbar correctly", async () => {
  render(<Navbar />);
  const maltebon = screen.getByTestId("navbar-maltebon");
  const loginButton = screen.getByTestId("navbar-login");
  const signupButton = screen.getByText("Sign Up");
  expect(maltebon).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(signupButton).toBeInTheDocument();
});
