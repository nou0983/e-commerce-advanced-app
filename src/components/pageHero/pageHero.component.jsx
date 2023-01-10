import { Link } from "react-router-dom";
import "./pageHero.styles.scss";

const PageHero = ({ type }) => {
  return (
    <section className="section-page-hero">
      <div className="section-page-hero__container">
        <Link to="/" className="section-page-hero__link">
          home
        </Link>
        <span className="section-page-hero__page"> / {type}</span>
      </div>
    </section>
  );
};
export default PageHero;
