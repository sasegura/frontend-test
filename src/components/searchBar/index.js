import { h } from "preact";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const SearchBar = ({ value, onChange }) => (
  <Box>
    <TextField
      id="filled-basic"
      label="Search"
      variant="filled"
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  </Box>
);

export default SearchBar;
