import { usePopupContext } from "../../contexts/popupContext.context";
import NavButton from "../navButton/navButton.component";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { LINKS } from "../../utils/constants.utils";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../assets/logo.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  const { toggleSidebar } = usePopupContext();
  const { isAuthenticated } = useAuth0();

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
          {LINKS.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id} className="nav__item nav__item--animated">
                <NavLink to={url} className="nav__link">
                  {text}
                </NavLink>
              </li>
            );
          })}
          {isAuthenticated && (
            <li className="nav__item nav__item--animated">
              <NavLink to="checkout" className="nav__link">
                checkout
              </NavLink>
            </li>
          )}
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
