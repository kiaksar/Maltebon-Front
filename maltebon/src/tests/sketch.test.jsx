import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";

import SketchPage from "../components/SketchPage/SketchPage";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("it should render canvas correctly", async () => {
  render(<SketchPage />);
  const canvas = screen.getByTestId("sketch-canvas");
  expect(canvas).toBeInTheDocument();
});
