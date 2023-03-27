import { ListItemButton, ListItemText } from "@mui/material"
import { ThemeColors } from "../../helpers/colors"
import { MarketingListItemsUIProps } from "../../../types/index"

const MarketingListItemsUI = ({
  children,
  tabIndex = 1,
  sx = {},
  ...props
}: MarketingListItemsUIProps) => {
  return (
    <ListItemButton
      {...props}
      sx={{ backgroundColor: ThemeColors.lightBlue, ...sx }}
    >
      <ListItemText
        primaryTypographyProps={{ fontSize: "0.9em" }}
        sx={{ color: "#183c64", textAlign: "start", ml: 7 }}
        primary={children}
        tabIndex={tabIndex}
      />
    </ListItemButton>
  )
}

export default MarketingListItemsUI
