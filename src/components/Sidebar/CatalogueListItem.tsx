import { useState } from "react"
import {
  KeyboardArrowUp,
  ShoppingCartOutlined,
  TimerOutlined,
} from "@mui/icons-material"
import { v4 as uuid } from "uuid"
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
  Box,
} from "@mui/material"
import { ThemeColors } from "../../helpers/colors"
import { useQuery } from "@tanstack/react-query"
import { Posts, CatalogueListItemProps } from "../../../types"
import { fetchPosts } from "../../services/TansackFetchPosts"
import SideCatalogueSubItems from "./CatalogueSubItems"
import { styled } from "@mui/system"

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

export default function CatalogueListItem({
  handleClick,
  handleClose,
  ...props // Rest parameters syntax
}: CatalogueListItemProps) {
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const {
    status,
    error,
    data: posts = [], // renamed 'data' to posts 'and' initialized with an empty array
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    onError: (error: Error) => {
      setErrorMsg(error?.message)
    },
  })

  const itemsMap = () => {
    return (
      <Box sx={{ padding: "2%" }}>
        <Typography
          variant="subtitle1"
          sx={{
            p: 1,
            color: ThemeColors.textActive,
          }}
        >
          Catalogue
        </Typography>
        {posts.map((item: Posts, index: number) => (
          <SideCatalogueSubItems
            key={uuid()}
            id={item.id}
            title={item.title}
            index={index}
            body={item.body}
            userId={item.userId}
          />
        ))}
      </Box>
    )
  }

  const iconStyles = { position: "absolute", right: 10, bottom: 10 }

  const statusTypography = {
    loadingText: "Loading Catalogue Items...",
    errorText: "Please Check your internet connection...",
  }

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
        {statusTypography.loadingText}
      </Typography>
    </Stack>
  )

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick} tabIndex={1}>
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
          {status === "loading" ? (
            <TimerOutlined sx={iconStyles} />
          ) : (
            <AnimatedArrow
              sx={iconStyles}
              className={props.openMenu ? "open isCollapsed" : "open"}
            />
          )}
        </ListItemIcon>
      </ListItemButton>

      <Menu
        elevation={8}
        variant="menu"
        id="CatalogueListItem-fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={props.anchorEl}
        open={props.openMenu}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {posts.length > 0 &&
          status !== "loading" &&
          status !== "error" &&
          itemsMap()}

        {error && (
          <>
            <Typography variant="body2" color={"red"} sx={{ p: 10 }}>
              {`${errorMsg}`}
              {errorMsg === "Network Error" && (
                <>
                  <br /> {statusTypography.errorText}
                </>
              )}
            </Typography>
          </>
        )}

        {status === "loading" && isLoading()}
      </Menu>
    </ListItem>
  )
}
