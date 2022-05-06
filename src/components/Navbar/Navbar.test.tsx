import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("<Navbar />", () => {
  it("render correctly", () => {
    const testID = "navbar-separator";
    const { getByTestId } = render(
      <Navbar />
    );
    expect(getByTestId(testID)).toBeDefined();
  });
  it("render correctly the side components", () => {
    const { queryByText } = render(
      <Navbar renderLeft={<>left component</>} renderRight={<>right component</>} />
    )
    expect(queryByText('left component')).toBeDefined();
    expect(queryByText('right component')).toBeDefined();
  });
});
