import { Divider, MenuItem, Typography } from "@mui/material"
import React from "react"
import { ThemeColors } from "../../helpers/colors"
import { Props } from "./types"

export default function SideCatalogueSubItems({ ...props }: Props) {
  return (
    <React.Fragment key={`${props.id + Math.random() + props.index * 900}`}>
      <MenuItem sx={{ backgroundColor: ThemeColors.textWhite, padding: 1 }}>
        <div>
          <Typography variant="body2">{props.title}</Typography>
          <Typography
            variant="body2"
            color={"gray"}
            paragraph
            sx={{
              wordWrap: "break-word",
              wordBreak: "break-all",
              whiteSpace: "pre-line",
            }}
          >
            {props.body}
          </Typography>
          <Typography variant="body2" color={"gray"}>
            ${props.userId}
          </Typography>
        </div>
      </MenuItem>
      <Divider />
    </React.Fragment>
  )
}
