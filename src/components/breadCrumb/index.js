import { h } from "preact";
import { Breadcrumbs, Typography } from "@mui/material";
import { useEffect, useState } from "preact/hooks";

function AppBreadCrumbs() {
  const [pathnames, setPathnames] = useState([]);

  useEffect(() => {
    const locationsPaths = window.location.pathname.split("/").filter((x) => x);
    const path = locationsPaths.map((value, index) => {
      let to = null;
      value === "productDetail"
        ? (to = `${value.toString().concat(` / ${locationsPaths[index + 1]}`)}`)
        : null;
      return { to };
    });
    setPathnames(path);
  }, [window.location.pathname]);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <a underline="hover" color="inherit" href="/">
        Home
      </a>
      {pathnames.map(({ to } = value) => {
        return to ? (
          <Typography color="text.primary" key={to}>
            {to}
          </Typography>
        ) : null;
      })}
    </Breadcrumbs>
  );
}
export default AppBreadCrumbs;
