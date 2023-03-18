import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { ThemeColors } from "../../helpers/colors"
import { VisibilityOutlined } from "@mui/icons-material"

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
)

export default function VisitorsCard() {
  return (
    <Card elevation={4} sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <VisibilityOutlined sx={{ mr: 1 }} fontSize="small" />
          <Typography
            variant="subtitle1"
            color={ThemeColors.textInActive}
            gutterBottom
          >
            Visitors
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
