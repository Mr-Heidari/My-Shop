export const products = async () => {
    return await fetch("https://fakestoreapi.com/products?limit=5").then((res) =>
      res.json()
    );
  };