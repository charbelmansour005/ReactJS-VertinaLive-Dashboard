import { KeyboardArrowUp, Radar } from "@mui/icons-material"
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material"
import React from "react"
import { ThemeColors } from "../../helpers/colors"
import { items } from "../../helpers/marketingSubItems"
import { styled } from "@mui/system"
import MarketingListItemsUI from "../ReusableUI/MarketingListItemsUI"
import { MarketingListItemProps } from "../../../types/index"

const AnimatedArrow = styled(KeyboardArrowUp)({
  transition: "transform 0.2s",
  transform: "rotate(0deg)",
  "&.open": {
    transform: "rotate(180deg)",
  },
  "&.isCollapsed": {
    transform: "rotate(0deg)",
  },
})

export default function MarketingListItem({
  isCollapsed,
  handleToggleCollapseMarketingItems,
}: MarketingListItemProps) {
  const IconStyle = { position: "absolute", right: 10, bottom: 10 }

  return (
    <React.Fragment>
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleToggleCollapseMarketingItems}
          tabIndex={1}
        >
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
            <AnimatedArrow
              sx={IconStyle}
              className={isCollapsed ? "open isCollapsed" : "open"}
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Collapse in={isCollapsed}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, index) => (
            <MarketingListItemsUI key={index}>{item.text}</MarketingListItemsUI>
          ))}
        </Box>
      </Collapse>
    </React.Fragment>
  )
}
