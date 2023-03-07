import "./style";
import App from "./components/app";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default AppWithRedux;
