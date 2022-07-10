import { Link } from "react-router-dom";
import Perfil from "../components/Perfil";

const Home = () => {
  return (
    <div className="p-10">
      <Perfil />
      <Link
        className="block shadow bg-green-800 text-white text-center p-4 mt-5 rounded-xl hover:bg-green-600"
        to="/projects"
      >
        ACESSAR PROJETOS
      </Link>
    </div>
  );
};

export default Home;
