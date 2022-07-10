import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RedesSociais from "./components/RedesSociais";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projetos />} />
        <Route path="/contacts" element={<RedesSociais />} />
      </Routes>
    </div>
  );
}

export default App;
