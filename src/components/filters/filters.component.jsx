import { useFilterContext } from "../../contexts/filterContext.context";
import { formatPrice, getUniqueValues } from "../../utils/helper.utils";
import { FaCheck } from "react-icons/fa";
import "./filters.styles.scss";

const Filters = () => {
  const {
    filters: {
      text,
      company,
      color,
      price,
      minPrice,
      maxPrice,
      shipping,
      category,
    },
    clearFilters,
    allProducts,
    updateFilters,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const colors = getUniqueValues(allProducts, "colors");
  const companies = getUniqueValues(allProducts, "company");

  return (
    <aside className="filter-container">
      <input
        type="text"
        name="text"
        value={text}
        placeholder="Search"
        onChange={updateFilters}
        className="filter-container__input"
      />
      <div className="filter-container__category">
        <h5>category</h5>
        {categories.map((newCategory, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`filter-container__category-btn ${
                newCategory === category &&
                "filter-container__category-btn--active"
              }`}
              name="category"
              onClick={updateFilters}
            >
              {newCategory}
            </button>
          );
        })}
      </div>
      <div className="filter-container__company">
        <h5>company</h5>
        <select
          name="company"
          value={company}
          className="filter-container__company-input"
          onChange={updateFilters}
        >
          {companies.map((newCompany, index) => {
            return (
              <option
                key={index}
                name="company"
                className="filter-container__company-option"
              >
                {newCompany}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filter-container__colors">
        <h5>colors</h5>
        <div name="color" className="filter-container__colors-container">
          {colors.map((newColor, index) => {
            if (newColor !== "all") {
              return (
                <button
                  key={index}
                  name="color"
                  data-color={newColor}
                  style={{ backgroundColor: newColor }}
                  className={`filter-container__color-icon filter-container__color-icon--color ${
                    color === newColor && "filter-container__color-icon--active"
                  }`}
                  onClick={updateFilters}
                >
                  {color === newColor ? (
                    <FaCheck className="filter-container__icon" />
                  ) : (
                    ""
                  )}
                </button>
              );
            } else {
              return (
                <button
                  key={index}
                  className={`filter-container__color-icon filter-container__color-icon--all ${
                    color === newColor &&
                    "filter-container__color-icon--all-active"
                  }`}
                  data-color="all"
                  name="color"
                  onClick={updateFilters}
                >
                  all
                </button>
              );
            }
          })}
        </div>
      </div>
      <div className="filter-container__price-conatiner">
        <h5>price</h5>
        <p className="filter-container__price">{formatPrice(price)}</p>
        <input
          type="range"
          className="filter-container__price-input"
          min={minPrice}
          max={maxPrice}
          value={price}
          name="price"
          onChange={updateFilters}
        />
      </div>
      <div className="filter-container__shipping-container">    
        <span className="filter-container__shipping-text">free shipping</span>
        <input
          type="checkbox"
          className="filter-container__shipping-input"        
          checked={shipping}
          name="shipping"
          onChange={updateFilters}
        />
      </div>

      <button type="button" onClick={clearFilters} className="filter-container__clear-btn">
        clear filters
      </button>
    </aside>
  );
};
export default Filters;
