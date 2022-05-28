import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LandingPage from "../components/LandingPage/LandingPage";

test("it should render landing page correctly", async () => {
  render(<LandingPage />);
  const getStartedButton = screen.getByTestId("landing-getStartedButton");
  const maltebonButton = screen.getByTestId("landing-maltebon");
  expect(getStartedButton).toBeInTheDocument();
  expect(maltebonButton).toBeInTheDocument();
});
