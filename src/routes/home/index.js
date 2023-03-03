import { h } from "preact";
import { useState } from "preact/hooks";
import Box from "@mui/material/Box";
import SearchBar from "../../components/serachBar";
import style from "./style.css";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (value) => setInputValue(value);

  return (
    <Box sx={{ marginTop: 2 }}>
      <Box
        sx={{
          float: "right",
        }}
      >
        <SearchBar value={inputValue} onChange={handleSearch} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <h1>List View</h1>
      </Box>
    </Box>
  );
};

export default Home;
