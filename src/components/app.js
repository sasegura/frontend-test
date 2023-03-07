import { h } from "preact";
import { Provider, useSelector } from "react-redux";

import Header from "./header";

import ReactQueryProvider from "./queryProvider";
import AppBreadCrumbs from "./breadCrumb";
import AppRouter from "./router";

const App = () => {
  const quantity = useSelector((state) => state.quantity);

  const getTotalQuantity = () => {
    let total = quantity;
    return total;
  };

  return (
    <ReactQueryProvider>
      <Header getTotalQuantity={getTotalQuantity} />
      <main>
        <AppBreadCrumbs />
        <AppRouter />
      </main>
    </ReactQueryProvider>
  );
};

export default App;
