import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../contexts/filterContext.context";
import "./sort.styles.scss";

const Sort = () => {
  const { viewMode, toggleViewMode, filteredProducts, sort, toggleSort } =
    useFilterContext();

  return (
    <article className="sort-container">
      <div className="sort-container__header">
        <button
          type="button"
          className={`sort-container__btn ${
            viewMode === "grid" && "sort-container__btn--active"
          }`}
          onClick={() => toggleViewMode("grid")}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`sort-container__btn ${
            viewMode === "list" && "sort-container__btn--active"
          }`}
          onClick={() => toggleViewMode("list")}
        >
          <BsList />
        </button>
      </div>
      <div className="sort-container__body">
        <span className="sort-container__amount">
          {filteredProducts.length} product found
        </span>
        <hr />
      </div>
      <form className="sort-container__footer">
        <label className="sort-container__label">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-container__input"
          value={sort}
          onChange={toggleSort}
        >
          <option className="sort-container__option">price (lowest)</option>
          <option className="sort-container__option">price (highest)</option>
          <option className="sort-container__option">name (a to z)</option>
          <option className="sort-container__option">name (z to a)</option>
        </select>
      </form>
    </article>
  );
};
export default Sort;
