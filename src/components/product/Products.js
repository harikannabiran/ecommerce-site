
// product.js
export const Products = () => {
    return fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => json);
  };
  