import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RedesSociais from "./components/RedesSociais";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<RedesSociais />} />
      </Routes>
    </div>
  );
}

export default App;
