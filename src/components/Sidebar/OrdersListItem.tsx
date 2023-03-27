import ListOutlinedIcon from "@mui/icons-material/ListOutlined"
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import { ThemeColors } from "../../helpers/colors"

export default function OrdersListItem() {
  const numbers = [14, 155, 54, 24, 225]
  const randomNumber = numbers[Math.floor(Math.random() * 5)]
  const chosenNumber: number = randomNumber

  const notificationStyle = {
    position: "absolute",
    right: 10,
    bottom: 13,
    backgroundColor: ThemeColors.themeGreem,
    color: "#fff",
    borderRadius: 15,
    paddingLeft: 0.5,
    paddingRight: 0.5,
    paddingTop: 0.2,
  }

  return (
    <ListItem disablePadding>
      <ListItemButton
        tabIndex={1}
        sx={{
          ":focus": {
            borderLeftWidth: 3,
            borderLeftColor: ThemeColors.textActive,
            borderLeftStyle: "solid",
            backgroundColor: ThemeColors.bgActive,
            "& .MuiSvgIcon-root": {
              color: ThemeColors.textActive,
            },
            "& .MuiListItemText-primary": {
              color: ThemeColors.textActive,
            },
          },
        }}
      >
        <ListItemIcon
          sx={{
            color: ThemeColors.textInActive,
          }}
        >
          <ListOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          tabIndex={-1}
          primary={"Orders"}
          sx={{ color: ThemeColors.textInActive }}
          primaryTypographyProps={{ fontSize: "0.9em" }}
        />
        <Typography sx={notificationStyle} variant="caption">
          {chosenNumber}
        </Typography>
      </ListItemButton>
    </ListItem>
  )
}
