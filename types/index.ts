import { SelectChangeEvent } from "@mui/material"
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"

type CatalogueListItemProps = {
  openMenu: boolean
  anchorEl: null | HTMLElement
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  handleClose: () => void
}

type CatalogueSubItemsProps = {
  id: number
  index: number
  title: string
  body: string
  userId: number
}

type ShopSelectProps = {
  shop: string
  handleStoreChange: (event: SelectChangeEvent) => void
}

type MarketingListItemProps = {
  isCollapsed: boolean
  handleToggleCollapseMarketingItems: () => void
}

type DrawerListProps = CatalogueListItemProps & {
  isCollapsed: boolean
  shop: string
  handleToggleCollapseMarketingItems: () => void
  handleStoreChange: (event: SelectChangeEvent) => void
}

type DrawerHeaderProps = {
  handleDrawerClose: () => void
}

type ListItemProps = {
  onClick?: () => void
  icon: JSX.Element
  primaryText: string
}

type MarketingListItemsUIProps = {
  children: React.ReactNode
  tabIndex?: number
  sx?: object
}

type Posts = {
  userId: number
  id: number
  title: string
  body: string
}

type TopToolBarProps = {
  open: boolean
  handleDrawerOpen: () => void
}

type AppBarProps = MuiAppBarProps & {
  open?: boolean
}

type SidebarState = {
  open: boolean
  anchorEl: HTMLElement | null
  isCollapsed: boolean
  shop: string
}

export type {
  SidebarState,
  AppBarProps,
  TopToolBarProps,
  Posts,
  MarketingListItemsUIProps,
  ListItemProps,
  DrawerHeaderProps,
  DrawerListProps,
  MarketingListItemProps,
  ShopSelectProps,
  CatalogueSubItemsProps,
  CatalogueListItemProps,
}
