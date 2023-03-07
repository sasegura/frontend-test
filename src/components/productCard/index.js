import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const ProductCard = ({ product }) => {
  const { title, image, price, category } = product;

  return (
    <Card variant="outlined" sx={{ minWidth: "100%", minHeight: "320px" }}>
      <CardContent sx={{ height: "100%" }}>
        <Typography sx={{ fontSize: 14 }}>{title}</Typography>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          component="div"
        >
          Category: {category}
        </Typography>
        <Typography variant="body2">Price: ${price}</Typography>
        <Grid container spacing={2} mt={2}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={image} width={"100px"} height={"100px"} alt={title} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
