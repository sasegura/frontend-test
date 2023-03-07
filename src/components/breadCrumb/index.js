import { h } from "preact";
import { Breadcrumbs, Typography } from "@mui/material";
import { useEffect, useState } from "preact/hooks";
import { useSelector } from "react-redux";

function AppBreadCrumbs() {
  const url = useSelector((state) => state.url);
  const [pathnames, setPathnames] = useState([]);

  useEffect(() => {
    const locationsPaths = url.split("/").filter((x) => x);
    const path = locationsPaths.map((value, index) => {
      let to = null;
      let label = "";
      value === "productDetail"
        ? ((to = `${value
            .toString()
            .concat(` / ${locationsPaths[index + 1]}`)}`),
          (label = locationsPaths[index + 1]))
        : null;
      return { to, label };
    });
    setPathnames(path);
  }, [url]);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <a underline="hover" color="inherit" href="/">
        Home
      </a>
      {pathnames.map(({ to, label } = value) => {
        return to ? (
          <Typography color="text.primary" key={to}>
            {label}
          </Typography>
        ) : null;
      })}
    </Breadcrumbs>
  );
}
export default AppBreadCrumbs;
