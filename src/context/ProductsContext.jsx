/* eslint-disable */
import { createContext, useEffect, useState } from 'react';

const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const URL = 'https://fakestoreapi.com/products';
  const [cards, setCards] = useState([]);
  const value = { cards, URL };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };
export default ProductsContext;
