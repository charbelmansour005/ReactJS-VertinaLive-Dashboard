import { useState } from "react"
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  ShoppingCartOutlined,
  TimerOutlined,
} from "@mui/icons-material"
import {
  Fade,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
  LinearProgress,
  Stack,
} from "@mui/material"
import { Props } from "./types"
import { ThemeColors } from "../../helpers/colors"
import { useQuery } from "@tanstack/react-query"
import { Posts } from "../../api/fetchPosts"
import { fetchPosts } from "../../api/fetchPosts"
import SideCatalogueSubItems from "../SideCatalogueSubItems/SideCatalogueSubItems"

export default function SideCatalogueListItem({ ...props }: Props) {
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const {
    status,
    error,
    data: posts = [],
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    onError: (error: Error) => {
      setErrorMsg(error?.message)
    },
  })

  const mappedItems = () => {
    return (
      <div>
        {posts.map((item: Posts, index: number) => (
          <SideCatalogueSubItems
            id={item.id}
            title={item.title}
            index={index}
            body={item.body}
            userId={item.userId}
          />
        ))}
      </div>
    )
  }

  const iconStyles = { position: "absolute", right: 10, bottom: 10 }

  const isLoading = () => (
    <Stack sx={{ color: ThemeColors.textActive }}>
      <LinearProgress
        color="inherit"
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <Typography variant="body2" color={"gray"} sx={{ p: 10 }}>
        Loading items
      </Typography>
    </Stack>
  )

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
            <KeyboardArrowUp sx={iconStyles} />
          ) : status === "loading" ? (
            <TimerOutlined sx={iconStyles} />
          ) : (
            <KeyboardArrowDown sx={iconStyles} />
          )}
        </ListItemIcon>
      </ListItemButton>

      <Menu
        elevation={8}
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
        {posts.length > 0 && mappedItems()}
        {error && (
          <Typography variant="body2" color={"red"} sx={{ p: 10 }}>
            {`${errorMsg}`}
            {errorMsg === "Network Error" && (
              <>
                <br /> Check your internet connection...
              </>
            )}
          </Typography>
        )}
        {status === "loading" && isLoading()}
      </Menu>
    </ListItem>
  )
}
