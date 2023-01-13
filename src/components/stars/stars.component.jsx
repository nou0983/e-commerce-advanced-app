import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./stars.styles.scss";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (el, index) => {
    const fullNum = index + 1;
    const halfNum = index + 0.5;

    return (
      <span key={index} className="review-container__star">
        {stars >= fullNum ? (
          <BsStarFill />
        ) : stars >= halfNum ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <artcile className="review-container">
      <div className="review-container__star-box">
        {tempStars}
        {/* Manual Stars Generator */}
        {/* <span className="review-container__star">
          {stars >= 1 ? (
            <BsStarFill />
          ) : stars >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span className="review-container__star">
          {stars >= 2 ? (
            <BsStarFill />
          ) : stars >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span className="review-container__star">
          {stars >= 3 ? (
            <BsStarFill />
          ) : stars >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span className="review-container__star">
          {stars >= 4 ? (
            <BsStarFill />
          ) : stars >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span className="review-container__star">
          {stars >= 5 ? (
            <BsStarFill />
          ) : stars >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span> */}
      </div>
      <p className="review-container__reviews">{`(${reviews} customer reviews)`}</p>
    </artcile>
  );
};

export default Stars;
