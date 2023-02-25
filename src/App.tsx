import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import { About, Store, Home } from "./pages";
import { NavBar } from "./components";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartContextProvider>
      <div style={{ height: "100vh" }}>
        <NavBar />
        <div className="app__routes">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="store" element={<Store />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </div>
      </div>
    </ShoppingCartContextProvider>
  );
}

export default App;
