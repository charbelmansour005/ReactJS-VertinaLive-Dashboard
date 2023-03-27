import React, { useState, useCallback } from "react"
import { styled } from "@mui/material/styles"
import MuiAppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import { SelectChangeEvent, Grid } from "@mui/material"
import { TopToolBar, DrawerHeader, DrawerList } from "../../components/index"
import VisitorsCard from "./Cards/VisitorsCard"
import { ThemeColors } from "../../helpers/colors"
import { AppBarProps, SidebarState } from "../../../types/index"
import OrdersCard from "./Cards/OrdersCard"
import DashboardHeader from "./DashboardHeader/DashboardHeader"

const drawerWidth = 240

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),
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
 * * I seperated initial states in case we have a lot of state to handle.
 */
const initialSideDrawerState: SidebarState = {
  open: true,
  anchorEl: null,
  isCollapsed: false,
  shop: "Fenoh Store",
}

export default function DashboardMain() {
  const [sideBarState, setSideBarState] = useState<SidebarState>(
    initialSideDrawerState
  )

  const openMenu = Boolean(sideBarState.anchorEl)

  const handleStoreChange = useCallback(
    (event: SelectChangeEvent) => {
      setSideBarState((prevState) => ({
        ...prevState,
        shop: event.target.value,
      }))
    },
    [sideBarState.shop]
  )

  const handleDrawerOpen = useCallback(() => {
    setSideBarState((prevState) => ({
      ...prevState,
      open: true,
    }))
  }, [sideBarState.open])

  const handleDrawerClose = useCallback(() => {
    setSideBarState((prevState) => ({
      ...prevState,
      open: false,
    }))
  }, [sideBarState.open])

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setSideBarState((prevState) => ({
        ...prevState,
        anchorEl: event.currentTarget,
      }))
    },
    [sideBarState.anchorEl]
  )

  const handleClose = useCallback(() => {
    setSideBarState((prevState) => ({
      ...prevState,
      anchorEl: null,
    }))
  }, [sideBarState.anchorEl])

  const handleToggleCollapseMarketingItems = useCallback(() => {
    setSideBarState((prevState) => ({
      ...prevState,
      isCollapsed: !prevState.isCollapsed,
    }))
  }, [sideBarState.isCollapsed])

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: ThemeColors.dashBg,
        width: "100vw",
      }}
    >
      <AppBar
        sx={{ border: "1px solid lightgray" }}
        variant="outlined"
        elevation={0}
        position="fixed"
        open={sideBarState.open}
      >
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
        <DrawerHeader handleDrawerClose={handleDrawerClose} />
        <DrawerList
          handleClick={handleClick}
          handleClose={handleClose}
          handleToggleCollapseMarketingItems={
            handleToggleCollapseMarketingItems
          }
          handleStoreChange={handleStoreChange}
          shop={sideBarState.shop}
          openMenu={openMenu}
          anchorEl={sideBarState.anchorEl}
          isCollapsed={sideBarState.isCollapsed}
        />
      </Drawer>

      <Main id="Main" open={sideBarState.open} sx={{ bgcolor: "red" }}>
        {/* actual start of the dashboard content  */}
        <DashboardHeader sideBarOpen={sideBarState.open} />
        <Grid
          container
          sx={{
            bgcolor: ThemeColors.dashBg,
            pt: sideBarState.open ? 8 : 20,
          }}
        >
          <Grid item xs={8} sx={styles.mW}>
            <Box sx={styles.colRow}>
              <Box sx={styles.row}>
                <VisitorsCard />
                <OrdersCard />
              </Box>
              <Box sx={styles.row}>
                <VisitorsCard />
                <OrdersCard />
              </Box>
              <Box sx={styles.row}>
                <VisitorsCard />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={styles.mW}>
            <Box sx={styles.col}>
              <VisitorsCard />
              <VisitorsCard />
              <VisitorsCard />
              <VisitorsCard />
            </Box>
          </Grid>
        </Grid>
      </Main>
    </Box>
  )
}

const styles = {
  mW: {
    maxWidth: "100%",
  },
  colRow: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  row: {
    width: "100%",
    display: "flex",
    gap: 3,
    bgcolor: ThemeColors.dashBg,
  },
  col: {
    ml: 3,
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 3,
    mr: 2, // i added
  },
}
