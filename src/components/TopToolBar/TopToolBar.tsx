import {
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  Theme,
} from "@mui/material"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { Props } from "./types"
import { ThemeColors } from "../../helpers/colors"
import { OfflineBoltOutlined } from "@mui/icons-material"
import "./TopToolBar.css"

const TopToolBar = ({ ...props }: Props) => {
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
  const isScreenSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  )

  return (
    <Toolbar style={{ backgroundColor: "white" }} variant="dense">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleDrawerOpen}
        edge="start"
        sx={{
          mr: 2,
          ...(props.open && { display: "none" }),
          color: ThemeColors.textInActive,
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
