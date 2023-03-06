import { h } from "preact";
import Box from "@mui/material/Box";
import { useQuery } from "react-query";
import { getProduts } from "../../queryFunctions/getProducts";
import { useEffect, useState } from "preact/hooks";
import ProductDetailCard from "../../components/ProductDetailCard";
import IsLoadding from "../../components/isLoadding/isLoadding";
import { Typography } from "@mui/material";

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);
  const { status, isError, error, data } = useQuery("products", getProduts);

  useEffect(() => {
    if (status !== "loading") {
      setProduct(data.filter((prod) => prod.id === parseInt(id))[0]);
    }
  }, [status, data]);

  return (
    <Box sx={{ marginTop: 2 }}>
      <Box sx={{ display: "flex", alignItems: "left" }}>
        <h1>Details View</h1>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <IsLoadding loadding={status === "loading"}>
          {isError ? (
            <Typography variant="h5" component="div">
              {error.message}
            </Typography>
          ) : product ? (
            <ProductDetailCard product={product} />
          ) : null}
        </IsLoadding>
      </Box>
    </Box>
  );
};

export default ProductDetail;
