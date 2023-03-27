import { Divider, MenuItem, Typography, Box } from "@mui/material"
import React from "react"
import { ThemeColors } from "../../helpers/colors"
import { v4 as uuidv4 } from "uuid"
import { CatalogueSubItemsProps } from "../../../types/index"

export default function CatalogueSubItems({
  id,
  index,
  title,
  body,
  userId,
}: CatalogueSubItemsProps) {
  const alertMsg = (title: string) => alert(title)
  return (
    <React.Fragment key={`${id + uuidv4() + index * 900}`}>
      <MenuItem
        onClick={() => alertMsg(title)}
        sx={{ backgroundColor: ThemeColors.textWhite, padding: 1 }}
      >
        <Box>
          <Typography variant="body2" sx={{ color: ThemeColors.textInActive }}>
            {title}
          </Typography>
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
            {body}
          </Typography>
          <Typography variant="body2" color={"gray"}>
            ${userId}
          </Typography>
        </Box>
      </MenuItem>
      <Divider />
    </React.Fragment>
  )
}
