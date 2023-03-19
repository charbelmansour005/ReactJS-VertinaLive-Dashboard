interface ListItemsFuncProps {
  onClick?: () => void
}

export interface ListItemsProps extends ListItemsFuncProps {
  icon: JSX.Element
  primaryText: string
}
