import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const ProductDetailCard = ({ product }) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <img
          src={product.image}
          width={"100%"}
          height={"100%"}
          alt={product.title}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="h5" component="div">
          {product.category}
        </Typography>
        <Typography variant="body2">Price: ${product.price}</Typography>
        <Typography variant="body2">Price: ${product.price}</Typography>
      </Grid>
    </Grid>
  </Box>
);

export default ProductDetailCard;
