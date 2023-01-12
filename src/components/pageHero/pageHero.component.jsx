import { Link } from "react-router-dom";
import "./pageHero.styles.scss";

const PageHero = ({ type, product }) => {
  return (
    <article className="page-hero">
      <div className="page-hero__container">
        <Link to="/" className="page-hero__link">
          home
        </Link>
        {product && (
          <Link to="/products" className="page-hero__link">
            / products
          </Link>
        )}
        <span className="page-hero__page"> / {type}</span>
      </div>
    </article>
  );
};
export default PageHero;
