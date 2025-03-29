import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
