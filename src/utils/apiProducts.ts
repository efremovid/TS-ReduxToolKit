export const apiProducts = (limit: number, page: number) => {
  return fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${limit * (page - 1)}`
  ).then((response) => response.json());
};

