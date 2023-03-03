import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Products } from "./components";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
