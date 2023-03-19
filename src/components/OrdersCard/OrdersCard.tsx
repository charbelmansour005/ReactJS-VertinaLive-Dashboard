import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { ThemeColors } from "../../helpers/colors"
import {
  VisibilityOutlined,
  KeyboardArrowDown,
  East,
} from "@mui/icons-material"

export default function OrdersCard() {
  return (
    <Card elevation={4} sx={{ minWidth: 275 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <VisibilityOutlined sx={{ mr: 1, mt: 0.2 }} fontSize="small" />
            <Typography
              variant="subtitle1"
              color={ThemeColors.textInActive}
              gutterBottom
            >
              Visitors
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", mt: 0.2 }}>
            <Button>
              <Typography variant="caption" color={"GrayText"} sx={{ mr: 1 }}>
                This month
              </Typography>
              <KeyboardArrowDown sx={{ fontSize: 15 }} />
            </Button>
          </Box>
        </Box>
        <Typography
          variant="h4"
          sx={{ mt: 1, color: ThemeColors.textInActive }}
        >
          1824
        </Typography>
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
            Do you want more visits? Contact us!
          </Typography>

          <East
            sx={{ ml: 2, color: ThemeColors.textActive }}
            fontSize="small"
          />
        </Button>
      </CardActions>
    </Card>
  )
}
