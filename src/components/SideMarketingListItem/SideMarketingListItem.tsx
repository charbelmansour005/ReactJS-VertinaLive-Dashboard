import { KeyboardArrowDown, KeyboardArrowUp, Radar } from "@mui/icons-material"
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material"
import React from "react"
import { MarketingListItemsUI } from "../index"
import { Props } from "./types"
import { ThemeColors } from "../../helpers/colors"
import { items } from "../../helpers/marketingSubItems"

export default function SideMarketingListItem({
  isCollapsed,
  handleToggleCollapse,
}: Props) {
  const IconStyle = { position: "absolute", right: 10, bottom: 10 }
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
              <KeyboardArrowDown sx={IconStyle} />
            ) : (
              <KeyboardArrowUp sx={IconStyle} />
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
