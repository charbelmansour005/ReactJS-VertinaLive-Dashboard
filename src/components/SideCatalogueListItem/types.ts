type FuncProps = {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  handleClose: () => void
}

export type Props = FuncProps & {
  openMenu: boolean
  anchorEl: null | HTMLElement
}
