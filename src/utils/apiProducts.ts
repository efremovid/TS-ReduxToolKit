export const apiProducts = () => {
  return fetch('https://dummyjson.com/products').then((response) =>
    response.json()
  );
};

export const apiProduct = (id: number) => {
  return fetch(`https://dummyjson.com/products/${id}`).then((response) =>
    response.json()
  );
};
