import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";

import SearchBar from "../../components/searchBar";
import { Typography } from "@mui/material";
import ProductCard from "../../components/productCard";
import { getProduts } from "../../queryFunctions/getProducts";
import IsLoadding from "../../components/isLoadding/isLoadding";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [productList, setProductList] = useState([]);

  const handleSearch = (value) => {
    setInputValue(value);
    const filteredProducts = data.filter(
      (prod) =>
        prod.description.toLowerCase().includes(value) ||
        prod.title.toLowerCase().includes(value)
    );
    setProductList(filteredProducts);
  };

  const { status, isError, error, data } = useQuery("products", getProduts);

  useEffect(() => {
    if (status !== "loading") setProductList(data);
  }, [status, data]);

  return (
    <Box sx={{ marginTop: 2, backgroundColor: "gainsboro" }}>
      <Box
        sx={{
          float: "right",
        }}
      >
        <SearchBar value={inputValue} onChange={handleSearch} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "left" }}>
        <h1>List View</h1>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <IsLoadding loadding={status === "loading"}>
          {isError ? (
            <Typography variant="h5" component="div">
              {error.message}
            </Typography>
          ) : (
            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {productList.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={3}>
                  <a href={`/productDetail/${product.id}`}>
                    <ProductCard product={product}></ProductCard>
                  </a>
                </Grid>
              ))}
            </Grid>
          )}
        </IsLoadding>
      </Box>
    </Box>
  );
};

export default Home;
