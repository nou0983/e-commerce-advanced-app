import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { usePopupContext } from "../../contexts/popupContext.context";
import { useCartContext } from "../../contexts/cartContext.context";
import "./navButton.styles.scss";

const NavButton = ({ type }) => {
  const { toggleSidebar } = usePopupContext();
  const { totalItems } = useCartContext();

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
        <button type="button" className="nav-btn">
          login <FaUserPlus className="nav-btn__icon" />
        </button>
      )}
    </>
  );
};

export default NavButton;
