import { baseUrl, productPath } from "../const/api";

export const getProduts = async () => {
  const getProductsResponse = await fetch(`${baseUrl}${productPath}`).then(
    async (response) => response.json()
  );
  return getProductsResponse;
};
