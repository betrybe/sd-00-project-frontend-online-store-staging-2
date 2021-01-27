export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return new Promise((resolve, reject) => {
    try {
      resolve(
        fetch(url)
          .then((data) => data.json()
            .then((res) => res)),
      );
    } catch (e) {
      reject(e);
    }
  });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlData = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=$${query}`;
  return new Promise((resolve, reject) => {
    try {
      resolve(
        fetch(urlData)
          .then((data) => data.json()
            .then((res) => res)),
      );
    } catch (e) {
      reject(e);
    }
  });
}
