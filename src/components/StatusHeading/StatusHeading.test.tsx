import { Typography } from "@mui/material";
import { render } from "@testing-library/react";
import StatusHeading from "./StatusHeading";

describe("<StatusHeading />", () => {
  it("the component should render the text corretly", () => {
    const mockedTitle = "random text";
    const { queryByText } = render(<StatusHeading statusText={mockedTitle} />);
    expect(queryByText(mockedTitle)).toBeDefined();
});

it("should render the jsx correctly", () => {
    const { getByTestId } = render(<StatusHeading statusText={<Typography data-testid="mockjsx-id">TEST</Typography>} />)
    expect(getByTestId('mockjsx-id')).toBeDefined()
  })
});
