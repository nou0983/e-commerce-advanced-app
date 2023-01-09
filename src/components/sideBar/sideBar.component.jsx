import { NavLink } from "react-router-dom";
import { links } from "../../utils/constants";
import NavButton from "../navButton/navButton.component";
import logo from "../../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import "./sideBar.styles.scss";

const SideBar = () => {
  const isOpen = true;

  return (
    <aside className={`sidebar ${isOpen && "sidebar--show"}`}>
      <div className="sidebar__header">
        <img src={logo} alt="Comfy Sloth" className="sidebar__logo" />
        <button className="sidebar__close-btn">
          <FaTimes className="sidebar__close-icon" />
        </button>
      </div>
      <ul className="sidebar__list">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id} className="sidebar__item">
              <NavLink to={url} className="sidebar__link">
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="sidebar__console">
        <li className="sidebar__btn">
          <NavButton type="cart" />
        </li>
        <li className="sidebar__btn">
          <NavButton type="user" />
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
