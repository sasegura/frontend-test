import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";
import "./index.css";

const ProductCard = ({ product }) => {
  const { title, image, price, category } = product;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className="product-image"
          component="img"
          height="300"
          image={image}
          alt={title}
          sx={{ margin: "16px auto", width: "auto" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ height: 35, overflow: "hidden" }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            component="div"
            variant="body2"
          >
            {category}
          </Typography>
          <Typography variant="h6">${price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
