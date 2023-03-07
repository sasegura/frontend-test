import { baseUrl, productPath } from "../const/api";

export const getProdutById = async ({ queryKey }) => {
  const [_, id] = queryKey;
  const getProductResponse = await fetch(`${baseUrl}${productPath}/${id}`).then(
    async (response) => response.json()
  );
  return getProductResponse;
};
