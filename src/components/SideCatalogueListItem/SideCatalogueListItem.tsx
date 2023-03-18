import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  ShoppingCartOutlined,
} from "@mui/icons-material"
import {
  Fade,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material"
import { catalogItems } from "../../helpers/fakeData"
import { Props } from "./types"
import { ThemeColors } from "../../helpers/colors"

export default function SideCatalogueListItem({ ...props }: Props) {
  const imageStyle = {
    marginRight: 15,
    height: 50,
    width: 50,
    borderRadius: 2,
  }
  const mappedItems = () => {
    return (
      <div>
        {catalogItems.map((item, index) => (
          <MenuItem
            key={`${item.id + Math.random() + index * 900}`}
            sx={{ backgroundColor: "#fff", padding: 2 }}
            onClick={props.handleClose}
          >
            <img src={item.image} alt={item.name} style={imageStyle} />
            <div>
              <Typography variant="body2">{item.name}</Typography>
              <Typography variant="body2" color={"gray"}>
                {item.description}
              </Typography>
              <Typography variant="body2" color={"gray"}>
                ${item.price}
              </Typography>
            </div>
          </MenuItem>
        ))}
      </div>
    )
  }

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={props.handleClick} tabIndex={1}>
        <ListItemIcon
          sx={{
            color: ThemeColors.textInActive,
          }}
        >
          <ShoppingCartOutlined />
        </ListItemIcon>
        <ListItemText
          tabIndex={1}
          primary={"Catalogue"}
          sx={{ color: ThemeColors.textInActive }}
          primaryTypographyProps={{ fontSize: "0.9em" }}
        />
        <ListItemIcon
          sx={{
            color: ThemeColors.textInActive,
          }}
        >
          {props.openMenu ? (
            <KeyboardArrowUp
              sx={{ position: "absolute", right: 10, bottom: 10 }}
            />
          ) : (
            <KeyboardArrowDown
              sx={{ position: "absolute", right: 10, bottom: 10 }}
            />
          )}
        </ListItemIcon>
      </ListItemButton>
      <Menu
        elevation={1}
        variant="menu"
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={props.anchorEl}
        open={props.openMenu}
        onClose={props.handleClose}
        TransitionComponent={Fade}
      >
        {mappedItems()}
      </Menu>
    </ListItem>
  )
}
