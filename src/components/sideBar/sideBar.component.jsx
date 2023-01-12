import { usePopupContext } from "../../contexts/popupContext.context";
import { NavLink } from "react-router-dom";
import { LINKS } from "../../utils/constants.utils";
import NavButton from "../navButton/navButton.component";
import logo from "../../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import "./sideBar.styles.scss";

const SideBar = () => {
  const { isSidebarOpen, toggleSidebar } = usePopupContext();

  return (
    <aside className={`sidebar ${isSidebarOpen && "sidebar--show"}`}>
      <div className="sidebar__header">
        <img src={logo} alt="Comfy Sloth" className="sidebar__logo" />
        <button className="sidebar__close-btn" onClick={toggleSidebar}>
          <FaTimes className="sidebar__close-icon" />
        </button>
      </div>
      <ul className="sidebar__list">
        {LINKS.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id} className="sidebar__item">
              <NavLink
                to={url}
                className="sidebar__link"
                onClick={toggleSidebar}
              >
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
