import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer as MUIDrawer,
  DrawerProps as MUIDrawerProps,
} from "@mui/material";
import { createContext, useContext, useState } from "react";

import Navbar from "../Navbar";

type DrawerActions = {
  openDrawer: () => void;
  closeDrawer: () => void;
};

type DrawerContext = DrawerActions & { isOpen: boolean };

type Props = {
  children?: React.ReactNode;
  drawerContent?: React.ReactNode;
  drawerMinWidth?: string;
} & MUIDrawerProps;

const drawerContext = createContext<DrawerContext>({} as DrawerContext);

const DrawerLayout: React.FC<Props> = ({
  children,
  drawerContent,
  drawerMinWidth = "160px",
  ...rest
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => setIsDrawerOpen(false);
  const openDrawer = () => setIsDrawerOpen(true);

  return (
    <drawerContext.Provider
      value={{
        closeDrawer,
        isOpen: isDrawerOpen,
        openDrawer,
      }}
    >
      <MUIDrawer
        anchor="right"
        BackdropProps={{ onClick: closeDrawer }}
        SlideProps={{ style: { width: "55%", minWidth: "250px", maxWidth: "300px" } }}
        open={isDrawerOpen}
        {...rest}
      >
        <Box
          component="header"
          minHeight="48px"
          position="absolute"
          right="12px"
          top="12px"
          zIndex={9}
        >
          <div role="button" onClick={closeDrawer}>
            <CloseIcon />
          </div>
        </Box>
        <Box
          bgcolor="#ffffff"
          minHeight="calc(100% - 48px)"
          minWidth={drawerMinWidth}
        >
          {drawerContent}
        </Box>
      </MUIDrawer>
      <Navbar
        containerProps={{
          sx: {
            backgroundColor: "#fff",
            boxShadow: '0px 0px 5px #d5d5d5',
            position: "fixed",
            right: 0,
            top: 0,
            width: "100%",
            zIndex: 9,
          },
        }}
        renderRight={
          <div
            role="button"
            onClick={() => setIsDrawerOpen((prevStatus) => !prevStatus)}
          >
            <MenuIcon />
          </div>
        }
      />
      <Box pt="48px">{children}</Box>
    </drawerContext.Provider>
  );
};

export const useDrawerContext = () => useContext(drawerContext);

export default DrawerLayout;
