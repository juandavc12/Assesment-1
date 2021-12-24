import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const BASE_URL = "https://fakestoreapi.com/products";

export default function ProductDetail() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((e) => console.error(e));
  }, []);
  return <div>ProductDetail</div>;
}
