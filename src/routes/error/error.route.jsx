import { Link } from "react-router-dom";
import './error.styles.scss';

const Error = () => {
  return (
    <section className="section-error">
      <h2 className="section-error__status">404</h2>
      <p className="section-error__text">
        Sorry, the page you tried cannot be found
      </p>
      <Link to="/" className="section-error__btn">back home</Link>
    </section>
  );
};

export default Error;
