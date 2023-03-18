import { ListItemButton, ListItemText } from "@mui/material"
import { ThemeColors } from "../../helpers/colors"

type ListItemProps = {
  children: React.ReactNode
  tabIndex?: number
  sx?: object
}

export const MarketingListItemsUI = ({
  children,
  tabIndex = 1,
  sx = {},
  ...props
}: ListItemProps) => {
  return (
    <ListItemButton
      {...props}
      sx={{ backgroundColor: ThemeColors.lightBlue, ...sx }}
    >
      <ListItemText
        primaryTypographyProps={{ fontSize: "0.9em" }}
        sx={{ color: "#183c64", textAlign: "start", marginLeft: "4.4vw" }}
        primary={children}
        tabIndex={tabIndex}
      />
    </ListItemButton>
  )
}
