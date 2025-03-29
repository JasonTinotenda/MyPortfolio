import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

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
