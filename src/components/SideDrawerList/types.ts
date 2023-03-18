import React from "react"
import { SelectChangeEvent } from "@mui/material"

type FuncProps = {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  handleClose: () => void
  handleToggleCollapse: () => void
  handleStoreChange: (event: SelectChangeEvent) => void
}

export type Props = FuncProps & {
  openMenu: boolean
  anchorEl: null | HTMLElement
  isCollapsed: boolean
  shop: string
}
