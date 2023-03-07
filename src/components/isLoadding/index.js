import { CircularProgress } from "@mui/material";

const IsLoadding = ({ loadding, children }) => {
  return loadding ? <CircularProgress /> : children;
};
export default IsLoadding;
