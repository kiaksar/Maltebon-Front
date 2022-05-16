import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";

import SignupPage from "../components/SignupPage/SignupPage";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("it should render signup page correctly", async () => {
  render(<SignupPage />);
  const usernameBox = screen.getByTestId("signup-usernameBox");
  const passwordBox = screen.getByTestId("signup-passwordBox");
  const confPasswordBox = screen.getByTestId("signup-confPasswordBox");
  const emailBox = screen.getByTestId("signup-emailBox");
  const signupButton = screen.getByTestId("signup-signupButton");
  expect(usernameBox).toBeInTheDocument();
  expect(passwordBox).toBeInTheDocument();
  expect(confPasswordBox).toBeInTheDocument();
  expect(emailBox).toBeInTheDocument();
  expect(signupButton).toBeInTheDocument();
});
it("should include signup states in the fields", async () => {
  const signupPage = shallow(<SignupPage />);
  signupPage.setState({ username: "user-test" });
  signupPage.setState({ password: "password-test" });
  signupPage.setState({ confPassword: "password-test" });
  signupPage.setState({ email: "test@email.com" });
  expect(signupPage.state("username")).toEqual("user-test");
  expect(signupPage.state("password")).toEqual("password-test");
  expect(signupPage.state("confPassword")).toEqual("password-test");
  expect(signupPage.state("email")).toEqual("test@email.com");
});
