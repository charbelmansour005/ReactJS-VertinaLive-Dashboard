import { IconButton, Typography } from "@mui/material"
import { styled, useTheme } from "@mui/material/styles"
import { Theme } from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { ThemeColors } from "../../helpers/colors"
import { DrawerHeaderProps } from "../../../types/index"

const DrawerHeader = ({ handleDrawerClose }: DrawerHeaderProps) => {
  const theme: Theme = useTheme()

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }))
  return (
    <>
      <DrawerHeader>
        <Typography
          variant="h6"
          sx={{ position: "absolute", left: 10, fontWeight: "normal" }}
        >
          <span style={{ color: ThemeColors.textInActive }}>vetrina</span>
          <span style={{ color: ThemeColors.textActive }}>live</span>
        </Typography>

        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
    </>
  )
}

export default DrawerHeader
