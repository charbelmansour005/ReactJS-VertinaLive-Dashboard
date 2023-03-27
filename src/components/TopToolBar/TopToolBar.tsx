import {
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  Theme,
} from "@mui/material"
import { TopToolBarProps } from "../../../types/index"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { ThemeColors } from "../../helpers/colors"
import { OfflineBoltOutlined } from "@mui/icons-material"
import "./TopToolBar.css"

const TopToolBar = ({ handleDrawerOpen, open }: TopToolBarProps) => {
  const isScreenSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  )

  const notificationStyle = {
    position: "absolute",
    right: 23,
    backgroundColor: ThemeColors.themeRed,
    color: ThemeColors.textWhite,
    borderRadius: 15,
    paddingLeft: 0.8,
    paddingRight: 0.8,
    paddingTop: 0.2,
    mb: 2,
    fontSize: "0.8em",
    fontWeight: "bold",
  }

  return (
    <Toolbar sx={{ bgcolor: "white", boxShadow: "none" }} variant="dense">
      <IconButton
        color="inherit"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          mr: 2,
          color: ThemeColors.textInActive,
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="subtitle1"
        noWrap
        component="div"
        color={ThemeColors.textInActive}
      >
        Dashboard
      </Typography>

      {!isScreenSmall && (
        <>
          <Box
            sx={{
              position: "absolute",
              right: 30,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button variant="text">
              <OfflineBoltOutlined sx={{ color: ThemeColors.textInActive }} />
              <Typography
                variant="caption"
                noWrap
                component="div"
                color={ThemeColors.textInActive}
                sx={{ mt: 0.5 }}
              >
                What's new
              </Typography>
            </Button>
          </Box>
          <Typography sx={notificationStyle}>2</Typography>
        </>
      )}
    </Toolbar>
  )
}

export default TopToolBar
