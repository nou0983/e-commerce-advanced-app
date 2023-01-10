import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../contexts/productsContext.context";
import "./navButton.styles.scss";

const NavButton = ({ type }) => {
  const { toggleSidebar } = useProductsContext();

  return (
    <>
      {type === "cart" && (
        <Link to="/cart" className="btn" onClick={toggleSidebar}>
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
