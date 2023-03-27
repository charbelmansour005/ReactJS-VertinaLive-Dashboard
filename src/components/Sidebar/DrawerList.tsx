// import "./SideDrawerList.css"
import {
  CatalogueListItem,
  MarketingListItem,
  OrdersListItem,
  ShopSelect,
  ListItems,
} from "../index"
import { Divider, List, Typography } from "@mui/material"
import {
  AttachMoneyOutlined,
  BrushOutlined,
  CreditCardOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  IntegrationInstructionsOutlined,
  LocalShippingOutlined,
  LogoutOutlined,
  Person2Outlined,
  SettingsOutlined,
  Share,
  VisibilityOutlined,
} from "@mui/icons-material"
import { DrawerListProps } from "../../../types"
import { ThemeColors } from "../../helpers/colors"

const SideDrawerList = ({
  handleClick,
  handleClose,
  handleToggleCollapseMarketingItems,
  handleStoreChange,
  openMenu,
  anchorEl,
  isCollapsed,
  shop,
}: DrawerListProps) => {
  return (
    <List>
      <ListItems icon={<HomeOutlined />} primaryText="Dashboard" />

      <CatalogueListItem
        handleClick={handleClick}
        handleClose={handleClose}
        openMenu={openMenu}
        anchorEl={anchorEl}
      />

      <OrdersListItem />

      <ListItems icon={<Person2Outlined />} primaryText="Customers" />

      <MarketingListItem
        isCollapsed={isCollapsed}
        handleToggleCollapseMarketingItems={handleToggleCollapseMarketingItems}
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

      <ShopSelect handleStoreChange={handleStoreChange} shop={shop} />
    </List>
  )
}

export default SideDrawerList
