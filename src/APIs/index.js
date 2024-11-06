export const AllProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
  }
};

export const CategoryList = async () => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category-list"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const CategoryProducts = async (category) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error(error);
  }
};
export const getComments = async () => {
  try {
    const response = await fetch("https://dummyjson.com/comments");
    const data = await response.json();
    return data.comments;
  } catch (error) {
    console.error(error);
  }
};
