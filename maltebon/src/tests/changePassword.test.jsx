/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ChangePassword from "../components/UserPanel/ChangePassword";

test("it should render change password components correctly", async () => {
  render(<ChangePassword />);
  const oldPasswordBox = screen.getByText("Old password");
  const newPasswordBox = screen.getByText("New password");
  const confPasswordBox = screen.getByText("Confirm password");
  const changePasswordButton = screen.getByText("Change password");
  expect(oldPasswordBox).toBeInTheDocument();
  expect(newPasswordBox).toBeInTheDocument();
  expect(confPasswordBox).toBeInTheDocument();
  expect(changePasswordButton).toBeInTheDocument();
});
