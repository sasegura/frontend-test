import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

import Home from "../routes/home";
import ProductDetail from "../routes/productDetail";
import ReactQueryProvider from "./queryProvider";
import AppBreadCrumbs from "./breadCrumb";

const App = () => {
  return (
    <ReactQueryProvider>
      <div id="app">
        <Header />
        <main>
          <AppBreadCrumbs />
          <Router>
            <Home path="/" />
            <ProductDetail path="/productDetail/:id" />
          </Router>
        </main>
      </div>
    </ReactQueryProvider>
  );
};

export default App;
