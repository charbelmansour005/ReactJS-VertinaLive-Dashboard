import { ThemeColors } from "../../../helpers/colors"
import { useMediaQuery, Box, Theme, Typography } from "@mui/material"
import { IosShareOutlined } from "@mui/icons-material"

type Props = {
  sideBarOpen: boolean
}
export default function DashboardHeader({ sideBarOpen }: Props) {
  const isScreenSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  )

  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${ThemeColors.textActive}, ${ThemeColors.dashBg})`,
        position: "absolute",
        top: 50,
        width: sideBarOpen ? "0vw" : "100vw",
        height: 100,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {isScreenSmall || (
          <>
            <Typography
              variant="h5"
              color={"white"}
              sx={{ fontWeight: "bold", pl: "4vw", pt: "5vh" }}
            >
              {sideBarOpen || "Welcome Mario!"}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 0 }}>
              <Typography
                variant="caption"
                color={"white"}
                sx={{
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                  pr: "4vw",
                  pt: "5vh",
                }}
              >
                {sideBarOpen || "app.vetrinalive.it/fenoh-store"}
                <IosShareOutlined sx={{ color: "white" }} fontSize="small" />
              </Typography>
              {/* {sideBarOpen || (
                
              )} */}
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}
