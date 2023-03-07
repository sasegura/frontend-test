import { h } from "preact";
import { Breadcrumbs, Typography } from "@mui/material";
import { useEffect, useState } from "preact/hooks";
import { useSelector } from "react-redux";
import { productDetail } from "../../const/paths";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function AppBreadCrumbs() {
  const url = useSelector((state) => state.url);
  const [pathnames, setPathnames] = useState([]);

  useEffect(() => {
    const locationsPaths = url.split("/").filter((x) => x);
    const path = locationsPaths.map((value, index) => {
      let label = "";
      value === productDetail && (label = locationsPaths[index + 2]);
      return { label };
    });
    setPathnames(path);
  }, [url]);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{
        marginTop: "20px",
      }}
    >
      <a underline="hover" color="inherit" href="/">
        Home
      </a>
      {pathnames.map(
        ({ label } = value) =>
          label && (
            <Typography color="text.primary" key={label}>
              {label}
            </Typography>
          )
      )}
    </Breadcrumbs>
  );
}
export default AppBreadCrumbs;
