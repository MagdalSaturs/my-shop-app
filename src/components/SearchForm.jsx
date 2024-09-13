import React, { useContext, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import "./SearchForm.scss";

const SearchForm = () => {
  const { setMinPrice, setMaxPrice, setSortBy } = useContext(ShopContext);
  const minPriceRef = useRef(null);
  const maxPriceRef = useRef(null);
  const sortByRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMinPrice(parseFloat(minPriceRef.current.value) || 0);
    setMaxPrice(parseFloat(maxPriceRef.current.value) || Infinity);
    setSortBy(sortByRef.current.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label>
        Minimalna cena:
        <input type="number" ref={minPriceRef} />
      </label>
      <label>
        Maksymalna cena:
        <input type="number" ref={maxPriceRef} />
      </label>
      <label>
        Sortuj według:
        <select ref={sortByRef}>
          <option value="id">ID</option>
          <option value="price">Cena</option>
          <option value="createdDate">Data dodania</option>
        </select>
      </label>
      <button type="submit">Szukaj</button>
    </form>
  );
};

export default SearchForm;
