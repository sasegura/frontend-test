import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import ProductDetail from "../routes/productDetail";

const App = () => (
  <div id="app">
    <Header />
    <main>
      <Router>
        <Home path="/" />
        <ProductDetail path="/productDetail" />
      </Router>
    </main>
  </div>
);

export default App;
