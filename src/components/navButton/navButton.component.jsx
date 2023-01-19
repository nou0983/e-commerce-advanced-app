import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { usePopupContext } from "../../contexts/popupContext.context";
import { useCartContext } from "../../contexts/cartContext.context";
import { useAuth0 } from "@auth0/auth0-react";
import "./navButton.styles.scss";

const NavButton = ({ type }) => {
  const { toggleSidebar } = usePopupContext();
  const { totalItems } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const onClickHandler = () => {
    if (isAuthenticated) {
      logout();
    } else {
      loginWithRedirect();
    }
  };

  return (
    <>
      {type === "cart" && (
        <Link to="/cart" className="nav-btn" onClick={toggleSidebar}>
          cart
          <span className="nav-btn__icon-container">
            <FaShoppingCart className="nav-btn__icon" />
            <span className="nav-btn__amount">{totalItems}</span>
          </span>
        </Link>
      )}
      {type === "user" && (
        <button type="button" className="nav-btn" onClick={onClickHandler}>
          {isAuthenticated ? "sign out" : "sign in"}{" "}
          <FaUserCircle className="nav-btn__icon" />
        </button>
      )}
    </>
  );
};

export default NavButton;
