import { h } from "preact";
import { useDispatch } from "react-redux";
import { Router } from "preact-router";

import Home from "../routes/home";
import ProductDetail from "../routes/productDetail";
import { modifyUrl } from "../redux/cartSlice";
import { productDetail } from "../const/paths";

const AppRouter = () => {
  const dispatch = useDispatch();

  const handleRoute = ({ url }) => {
    dispatch(modifyUrl({ url }));
  };

  return (
    <Router onChange={handleRoute}>
      <Home path="/" />
      <ProductDetail path={`/${productDetail}/:id/:title`} />
    </Router>
  );
};

export default AppRouter;
