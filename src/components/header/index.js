import { h } from "preact";
import { ShoppingCart } from "@mui/icons-material";
import Box from "@mui/material/Box";
import style from "./style.css";
import { Typography } from "@mui/material";

const Header = () => {
  const getTotalQuantity = () => {
    let total = 0;
    return total;
  };

  return (
    <header class={style.header}>
      <a href="/" class={style.logo}>
        <img
          src="../../assets/preact-logo-inverse.svg"
          alt="Preact Logo"
          height="32"
          width="32"
        />
        <h1>Frontend-Test</h1>
      </a>

      <Box
        className="shopping-cart"
        sx={{
          padding: "25px",
          borderRadius: "100px",
          position: "fixed",
          right: "10px",
        }}
        onClick={() => navigate("/cart")}
      >
        <ShoppingCart sx={{ color: "white" }} id="cartIcon" />
        <Typography
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "red",
            padding: "4px 8px",
            color: "white",
            borderRadius: "50px",
          }}
        >
          {getTotalQuantity() || 0}
        </Typography>
      </Box>
    </header>
  );
};

export default Header;
