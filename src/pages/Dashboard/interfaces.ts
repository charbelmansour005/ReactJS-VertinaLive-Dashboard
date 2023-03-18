import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

export interface SidebarState {
  open: boolean
  anchorEl: HTMLElement | null
  isCollapsed: boolean
  shop: string
}
