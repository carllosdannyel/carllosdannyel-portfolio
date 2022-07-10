import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-green-600 p-4 mx-10 my-2 rounded-xl">
      <ul className="flex items-center justify-around">
        <li className="hover:text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/projects">Projetos</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/contacts">Contatos</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
