import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContextProvider } from "./context/ShoppingCartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
