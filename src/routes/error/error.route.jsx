import { Button } from "../../components/index.component";
import "./error.styles.scss";

const Error = () => {
  return (
    <section className="section-error">
      <h2 className="section-error__status">404</h2>
      <p className="section-error__text">
        Sorry, the page you tried cannot be found
      </p>
      <Button url="/">
        back home
      </Button>
    </section>
  );
};

export default Error;
