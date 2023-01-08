import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navButton.styles.scss";

const NavButton = ({ type }) => {
  return (
    <>
      {type === "cart" && (
        <Link to="/cart" className="btn">
          cart
          <span className="btn__icon-container">
            <FaShoppingCart className="btn__icon" />
            <span className="btn__amount">12</span>
          </span>
        </Link>
      )}
      {type === "user" && (
        <button type="button" className="btn">
          login <FaUserPlus className="btn__icon" />
        </button>
      )}
    </>
  );
};

export default NavButton;
