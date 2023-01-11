import { Link } from "react-router-dom";
import "./button.styles.scss";

const Button = ({ url, children }) => {
  return <Link to={url} className="btn">{children}</Link>;
};

export default Button;
