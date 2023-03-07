import { Typography } from "@mui/material";

const IsError = ({ isError, message, children }) => {
  return isError ? (
    <Typography variant="h5" component="div">
      {message}
    </Typography>
  ) : (
    children
  );
};
export default IsError;
