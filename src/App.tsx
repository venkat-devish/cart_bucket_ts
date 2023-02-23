import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <Container className="mb-4">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
