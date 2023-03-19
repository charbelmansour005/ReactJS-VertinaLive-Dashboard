import "./SideDrawerList.css"
import {
  SideCatalogueListItem,
  SideMarketingListItem,
  SideOrdersListItem,
  SideShopSelect,
  ListItems,
} from "../index"
import { Divider, List, Typography } from "@mui/material"
import {
  AttachMoneyOutlined,
  BrushOutlined,
  CreditCardOutlined,
  HelpOutlineOutlined,
  HouseOutlined,
  IntegrationInstructionsOutlined,
  LocalShippingOutlined,
  LogoutOutlined,
  Person2Outlined,
  SettingsOutlined,
  Share,
  VisibilityOutlined,
} from "@mui/icons-material"
import { Props } from "./types"
import { ThemeColors } from "../../helpers/colors"

const SideDrawerList = ({ ...props }: Props) => {
  return (
    <List>
      <ListItems icon={<HouseOutlined />} primaryText="Dashboard" />

      <SideCatalogueListItem
        handleClick={props.handleClick}
        handleClose={props.handleClose}
        openMenu={props.openMenu}
        anchorEl={props.anchorEl}
      />

      <SideOrdersListItem />

      <ListItems icon={<Person2Outlined />} primaryText="Customers" />

      <SideMarketingListItem
        isCollapsed={props.isCollapsed}
        handleToggleCollapse={props.handleToggleCollapse}
      />

      <ListItems
        icon={<LocalShippingOutlined />}
        primaryText="Delivery Options"
      />

      <ListItems icon={<AttachMoneyOutlined />} primaryText="Payment Options" />

      <ListItems icon={<BrushOutlined />} primaryText="Store Design" />

      <ListItems icon={<CreditCardOutlined />} primaryText="Subscription" />

      <ListItems
        icon={<IntegrationInstructionsOutlined />}
        primaryText="Integration"
      />

      <ListItems icon={<SettingsOutlined />} primaryText="Settings" />

      <ListItems icon={<LogoutOutlined />} primaryText="Logout" />

      <Divider sx={{ mb: 3, mt: 3 }} />

      <ListItems
        icon={<HelpOutlineOutlined />}
        primaryText="Customer Support"
      />

      <ListItems icon={<Share />} primaryText="Share your shop" />

      <ListItems icon={<VisibilityOutlined />} primaryText="View your shop" />

      <Typography
        variant="subtitle1"
        sx={{ ml: 2, mt: 5, color: ThemeColors.textInActive }}
      >
        Select your shop
      </Typography>

      <SideShopSelect
        handleStoreChange={props.handleStoreChange}
        shop={props.shop}
      />
    </List>
  )
}

export default SideDrawerList
