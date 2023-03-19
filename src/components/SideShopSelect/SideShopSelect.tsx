import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import { Select } from "@mui/material"
import { SelectChangeEvent } from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"
import { ThemeColors } from "../../helpers/colors"

type Props = {
  handleStoreChange: (event: SelectChangeEvent) => void
  shop: string
}

export default function SelectAutoWidth({ ...props }: Props) {
  return (
    <FormControl sx={{ mt: 2, mb: 2, pl: 2 }} fullWidth>
      <Select
        IconComponent={(props) => (
          <KeyboardArrowDown
            style={{ color: ThemeColors.textInActive }}
            {...props}
          />
        )}
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={props.shop}
        onChange={props.handleStoreChange}
        fullWidth
        datatype="string"
        autoWidth={false}
        sx={{
          width: "90%",
          fontSize: "0.9em",
          color: ThemeColors.textInActive,
        }}
      >
        <MenuItem sx={{ fontSize: "0.9em" }} value={"Fenoh Store"}>
          Fenoh Store
        </MenuItem>
        <MenuItem sx={{ fontSize: "0.9em" }} value={"Fenoh Store v1"}>
          Fenoh Store v1
        </MenuItem>
        <MenuItem sx={{ fontSize: "0.9em" }} value={"Fenoh Store v2"}>
          Fenoh Store v2
        </MenuItem>
      </Select>
    </FormControl>
  )
}
