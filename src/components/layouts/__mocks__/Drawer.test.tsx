import { Typography } from "@mui/material";
import { act, fireEvent, render } from "@testing-library/react";
import DrawerLayout, { useDrawerContext } from "../Drawer";

describe("<DrawerLayout />", () => {
  const DrawerChildComponent = ({ testID }: { testID: string }) => {
    const { isOpen } = useDrawerContext();
    return <Typography data-testid={testID}>{`${isOpen}`}</Typography>;
  };

  it("should render initial drawer status", () => {
    const drawerChildID = "drawer__test-id";
    const initialDrawerStatusString = "false";

    const { queryByTestId, queryByRole } = render(
      <DrawerChildComponent testID={drawerChildID} />,
      { wrapper: DrawerLayout }
    );
    expect(queryByTestId(drawerChildID)?.textContent).toBe(
      initialDrawerStatusString
    );

    const toggleButton = queryByRole("button");
    act(() => {
      fireEvent.click(toggleButton!);
    });
    expect(queryByTestId(drawerChildID)?.textContent).toBe("true");
  });
});
