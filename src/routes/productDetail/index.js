import { h } from "preact";
import Box from "@mui/material/Box";
import { useMutation, useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { route } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";

import ProductDetailCard from "../../components/productDetailCard";
import IsLoadding from "../../components/isLoadding";
import { incrementCartElements } from "../../redux/cartSlice";
import IsError from "../../components/isError";
import { getProdutById } from "../../queryFunctions/getProduct";
import { postProduct } from "../../queryFunctions/postProductById";
import { Paper } from "@mui/material";

const ProductDetail = ({ id }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  const quantity = useSelector((state) => state.quantity);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      color: "1",
      storage: "1",
    },
  });

  const {
    status: statusGetProdutById,
    isError: isErrorGetProdutById,
    error: errorGetProdutById,
    data: dataGetProdutById,
  } = useQuery(["product", id], getProdutById);

  const {
    mutate,
    isLoading: isLoaddingPostProduct,
    status: statusPostProduct,
    data: dataPostProduct,
    isError: isErrorPostProduct,
  } = useMutation(postProduct);

  useEffect(() => {
    if (statusGetProdutById !== "loading" && !isErrorGetProdutById) {
      setProduct(dataGetProdutById);
    }
  }, [statusGetProdutById, dataGetProdutById, isErrorGetProdutById]);

  useEffect(() => {
    if (
      statusPostProduct === "success" &&
      !isLoaddingPostProduct &&
      !isErrorPostProduct
    ) {
      dispatch(incrementCartElements({ count: parseInt(dataPostProduct) }));
    }
  }, [
    isLoaddingPostProduct,
    dataPostProduct,
    isErrorPostProduct,
    statusPostProduct,
  ]);

  const onSubmit = (data) => {
    const { id } = product;
    const { color, storage } = data;
    const payload = {
      id,
      colorCode: color,
      storageCode: storage,
      count: quantity ? parseInt(quantity) + 1 : 1,
    };
    mutate(payload);
    reset();
  };

  const backToList = () => route("/", true);

  return (
    <Box sx={{ marginTop: 2 }}>
      <Box sx={{ display: "flex", alignItems: "left", margin: "25px 0" }}>
        <h1>Details View</h1>
      </Box>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 600,
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <IsLoadding loadding={statusGetProdutById === "loading"}>
          <IsError
            isError={isErrorGetProdutById}
            message={errorGetProdutById?.message}
          >
            {product ? (
              <ProductDetailCard
                product={product}
                isLoaddingPostProduct={isLoaddingPostProduct}
                backToList={backToList}
                onSubmit={handleSubmit(onSubmit)}
                register={register}
                control={control}
                errors={errors}
                getValues={getValues}
                watch={watch}
                setValue={setValue}
              />
            ) : null}
          </IsError>
        </IsLoadding>
      </Paper>
    </Box>
  );
};

export default ProductDetail;
