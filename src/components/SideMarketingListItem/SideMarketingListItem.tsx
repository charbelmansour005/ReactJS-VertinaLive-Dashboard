import { KeyboardArrowDown, KeyboardArrowUp, Radar } from "@mui/icons-material"
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material"
import React from "react"
import { MarketingListItemsUI } from "../UI/MarketingListItemsUI"
import { Props } from "./types"
import { ThemeColors } from "../../helpers/colors"

export default function SideMarketingListItem({
  isCollapsed,
  handleToggleCollapse,
}: Props) {
  const items = [
    { text: "Discount Codes" },
    { text: "Exit Intent" },
    { text: "Checkout Features" },
    { text: "Post purchase conversion" },
    { text: "Cart abandonment" },
    { text: "Timer checkout" },
    { text: "Sell on Social" },
    { text: "Special Offer" },
    { text: "Seasonal Offer" },
  ]
  return (
    <React.Fragment>
      <ListItem disablePadding>
        <ListItemButton onClick={handleToggleCollapse} tabIndex={1}>
          <ListItemIcon
            sx={{
              color: ThemeColors.textInActive,
            }}
          >
            <Radar />
          </ListItemIcon>
          <ListItemText
            tabIndex={1}
            primary={"Marketing"}
            primaryTypographyProps={{ fontSize: "0.9em" }}
            sx={{ color: ThemeColors.textInActive }}
          />
          <ListItemIcon
            sx={{
              color: ThemeColors.textInActive,
            }}
          >
            {!isCollapsed ? (
              <KeyboardArrowDown
                sx={{ position: "absolute", right: 10, bottom: 10 }}
              />
            ) : (
              <KeyboardArrowUp
                sx={{ position: "absolute", right: 10, bottom: 10 }}
              />
            )}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Collapse in={isCollapsed}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, index) => (
            <MarketingListItemsUI key={index}>{item.text}</MarketingListItemsUI>
          ))}
        </div>
      </Collapse>
    </React.Fragment>
  )
}
