import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { ThemeColors } from "../../../helpers/colors"
import { KeyboardArrowUp } from "@mui/icons-material"
import ListOutlinedIcon from "@mui/icons-material/ListOutlined"
import { useState } from "react"
import { Menu } from "@mui/material"
import { styled } from "@mui/system"

const AnimatedArrow = styled(KeyboardArrowUp)({
  transition: "transform 0.5s",
  transform: "rotate(0deg)",
  "&.open": {
    transform: "rotate(180deg)",
  },
  "&.isCollapsed": {
    transform: "rotate(0deg)",
  },
})

export default function OrdersCard() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [timeFrame, setTimeFrame] = useState("this month")
  const open = Boolean(anchorEl)
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }
  return (
    <Card
      elevation={4}
      sx={{ minWidth: 275, height: 170, ml: "1vw", mt: "1vw", mb: "1vw" }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <ListOutlinedIcon sx={{ mr: 1, mt: 0.2 }} fontSize="small" />
            <Typography
              variant="subtitle1"
              color={ThemeColors.textInActive}
              gutterBottom
            >
              Orders
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", mt: 0.2 }}>
            <Button onClick={handleOpenMenu}>
              <Typography variant="caption" color={"GrayText"} sx={{ mr: 1 }}>
                {timeFrame}
              </Typography>
              <AnimatedArrow
                sx={{ fontSize: 15 }}
                className={open ? "open isCollapsed" : "open"}
              />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color={"Gray"} sx={{ mt: 1 }}>
            Orders received:
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, color: ThemeColors.textInActive }}
          >
            156
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color={"Gray"} sx={{ mt: 1 }}>
            Earnings:
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, color: ThemeColors.textInActive }}
          >
            $1893,24
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Typography
            variant="caption"
            sx={{
              color: ThemeColors.textActive,
              textDecorationLine: "underline",
            }}
          >
            10 free tips to increase your sales
          </Typography>
        </Button>
      </CardActions>
      <Menu
        elevation={8}
        variant="menu"
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
      >
        <Box sx={{ p: 0.5 }}>
          <Button onClick={() => setTimeFrame("Today")}>
            <Typography variant="caption" color={"GrayText"} sx={{ mr: 1 }}>
              Today
            </Typography>
          </Button>
          <Button onClick={() => setTimeFrame("This month")}>
            <Typography variant="caption" color={"GrayText"} sx={{ mr: 1 }}>
              This month
            </Typography>
          </Button>
          <Button onClick={() => setTimeFrame("This year")}>
            <Typography variant="caption" color={"GrayText"} sx={{ mr: 1 }}>
              This year
            </Typography>
          </Button>
        </Box>
      </Menu>
    </Card>
  )
}
