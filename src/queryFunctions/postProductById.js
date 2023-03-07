export const postProduct = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(payload.count);
    }, 1000);
  });
};
