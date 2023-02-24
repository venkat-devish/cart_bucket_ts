import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import { About, Store, Home } from "./pages";
import { NavBar } from "./components";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <div style={{ backgroundColor: "#222", height: "100vh" }}>
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
    </ShoppingCartProvider>
  );
}

export default App;
