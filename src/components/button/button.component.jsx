import { Link } from "react-router-dom";
import "./button.styles.scss";

const Button = ({ url, children, onClickHandler, type }) => {
  const clickHandler = () => {
    if (type === 'user' || type === 'checkout')
    onClickHandler();
  };

  return (
    <Link to={url} className="btn" onClick={clickHandler}>
      {children}
    </Link>
  );
};

export default Button;
