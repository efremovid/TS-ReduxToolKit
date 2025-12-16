export const apiProducts = () => {
  return fetch('https://dummyjson.com/products').then((response) => response.json());
};


