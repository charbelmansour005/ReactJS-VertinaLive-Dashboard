import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { ThemeColors } from "../../helpers/colors"

interface ListItemsProps {
  icon: JSX.Element
  primaryText: string
  onClick?: () => void
}

export default function ListItems({
  icon,
  primaryText,
  onClick,
}: ListItemsProps) {
  const handleClick = () => {
    console.log("List item clicked!")
    if (onClick) {
      onClick()
    }
  }

  return (
    <ListItem disablePadding>
      <ListItemButton
        tabIndex={1}
        onClick={handleClick}
        sx={{
          ":focus": {
            borderLeftWidth: 3,
            borderLeftColor: ThemeColors.textActive,
            borderLeftStyle: "solid",
            backgroundColor: "#f8f4f4",
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
          {icon}
        </ListItemIcon>
        <ListItemText
          tabIndex={-1}
          primary={primaryText}
          sx={{ color: ThemeColors.textInActive }}
          primaryTypographyProps={{ fontSize: "0.9em" }}
        />
      </ListItemButton>
    </ListItem>
  )
}