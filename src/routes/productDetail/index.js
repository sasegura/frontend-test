import { h } from "preact";
import Box from "@mui/material/Box";

const ProductDetail = () => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <h1>Details View</h1>
      </Box>
    </Box>
  );
};

export default ProductDetail;
