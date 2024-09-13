import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortKey, setSortKey] = useState("id");

  // Pobieranie produktów przy montowaniu komponentu
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json"); // Pobieranie danych z pliku products.json
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filtrowanie i sortowanie produktów na podstawie kryteriów wyszukiwania
  const filteredProducts = products
    .filter((product) => {
      return (
        (minPrice === "" || product.price >= minPrice) &&
        (maxPrice === "" || product.price <= maxPrice)
      );
    })
    .sort((a, b) => {
      if (sortKey === "id") return a.id - b.id;
      if (sortKey === "price") return a.price - b.price;
      if (sortKey === "createdDate")
        return new Date(a.createdDate) - new Date(b.createdDate);
      return 0;
    });

  // Funkcje do aktualizacji stanów kryteriów wyszukiwania
  const updateMinPrice = (price) => setMinPrice(price);
  const updateMaxPrice = (price) => setMaxPrice(price);
  const updateSortKey = (key) => setSortKey(key);

  return (
    <ShopContext.Provider
      value={{
        products: filteredProducts,
        updateMinPrice,
        updateMaxPrice,
        updateSortKey,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
