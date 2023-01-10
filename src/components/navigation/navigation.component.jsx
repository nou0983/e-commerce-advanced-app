import { useProductsContext } from "../../contexts/productsContext.context";
import NavButton from "../navButton/navButton.component";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/constants.utils";
import logo from "../../assets/logo.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  const { toggleSidebar } = useProductsContext();

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__header">
          <NavLink to="/">
            <img src={logo} alt="Comfy Sloth" className="nav__logo" />
          </NavLink>
          <button className="nav__toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav__list">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id} className="nav__item nav__item--animated">
                <NavLink to={url} className="nav__link">
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <ul className="nav__console">
          <li className="nav__item">
            <NavButton type="cart" />
          </li>
          <li className="nav__item">
            <NavButton type="user" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
