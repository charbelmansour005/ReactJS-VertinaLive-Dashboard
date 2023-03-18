import React, { useState, useCallback } from "react"
import { styled } from "@mui/material/styles"
import MuiAppBar from "@mui/material/AppBar"
import { AppBarProps, SidebarState } from "./interfaces"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import { SelectChangeEvent } from "@mui/material"
import {
  TopToolBar,
  SideDrawerHeader,
  SideDrawerList,
} from "../../components/index"
/**
 * TODO: add VisitorsCard to index.ts exports
 */
import VisitorsCard from "../../components/VisitorsCard/VisitorsCard"

const drawerWidth = 240

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

/**
 * @initialSideDrawerState
 * * I seperated initial states - just in case we have a lot of state to handle.
 */
const initialSideDrawerState: SidebarState = {
  open: true,
  anchorEl: null,
  isCollapsed: false,
  shop: "Fenoh Store",
}

export default function SideDrawerMain() {
  const [sideBarState, setSideBarState] = useState<SidebarState>(
    initialSideDrawerState
  )

  const openMenu = Boolean(sideBarState.anchorEl)

  const handleStoreChange = useCallback((event: SelectChangeEvent) => {
    setSideBarState((prevState) => ({ ...prevState, shop: event.target.value }))
  }, [])

  const handleDrawerOpen = useCallback(() => {
    setSideBarState((prevState) => ({
      ...prevState,
      open: true,
    }))
  }, [])

  const handleDrawerClose = useCallback(() => {
    setSideBarState((prevState) => ({
      ...prevState,
      open: false,
    }))
  }, [])

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setSideBarState((prevState) => ({
      ...prevState,
      anchorEl: event.currentTarget,
    }))
  }, [])

  const handleClose = useCallback(() => {
    setSideBarState((prevState) => ({
      ...prevState,
      anchorEl: null,
    }))
  }, [])

  const handleToggleCollapse = useCallback(() => {
    setSideBarState((prevState) => ({
      ...prevState,
      isCollapsed: !prevState.isCollapsed,
    }))
  }, [])

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={sideBarState.open}>
        <TopToolBar
          handleDrawerOpen={handleDrawerOpen}
          open={sideBarState.open}
        />
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={sideBarState.open}
      >
        <SideDrawerHeader handleDrawerClose={handleDrawerClose} />
        <SideDrawerList
          handleClick={handleClick}
          handleClose={handleClose}
          handleToggleCollapse={handleToggleCollapse}
          handleStoreChange={handleStoreChange}
          shop={sideBarState.shop}
          openMenu={openMenu}
          anchorEl={sideBarState.anchorEl}
          isCollapsed={sideBarState.isCollapsed}
        />
      </Drawer>
      <Main open={sideBarState.open}>
        <VisitorsCard />
      </Main>
    </Box>
  )
}
