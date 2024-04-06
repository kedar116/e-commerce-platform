import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.products; // Return the list of products
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; 
  }
};

// Search for products by query (name or category)
export const searchProductsByTitle = async (titleQuery) => {
  try {
    console.log(titleQuery);
    const response = await axios.get(`${API_BASE_URL}/products/search?q=${titleQuery}`);
    console.log(response);
    return response.data.products; // Return the filtered list of products
  } catch (error) {
    console.error('Error searching for products:', error);
    throw error; // Rethrow to handle it in the calling component
  }
};

export const searchProductsByCategory = async (categoryQuery) => {
    try {
      console.log(categoryQuery);
      const response = await axios.get(`${API_BASE_URL}/products/category/${categoryQuery}`);
      console.log(response);
      return response.data.products; // Return the filtered list of products
    } catch (error) {
      console.error('Error searching for products:', error);
      throw error; // Rethrow to handle it in the calling component
    }
  };

// Simulate adding a product to the cart
export const addToCart = async (productId, quantity) => {
  try {
    // This is a simulation, so no actual request is made
    console.log(`Adding product ${productId} with quantity ${quantity} to cart`);
    return { success: true, productId, quantity }; // Simulate a successful operation
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

// Simulate editing a product quantity in the cart
export const editCartItem = async (productId, quantity) => {
  try {
    // This is a simulation, so no actual request is made
    console.log(`Editing product ${productId} to quantity ${quantity} in cart`);
    return { success: true, productId, quantity }; // Simulate a successful operation
  } catch (error) {
    console.error('Error editing cart item:', error);
    throw error;
  }
};

// Simulate removing a product from the cart
export const deleteFromCart = async (productId) => {
  try {
    // This is a simulation, so no actual request is made
    console.log(`Removing product ${productId} from cart`);
    return { success: true, productId }; // Simulate a successful operation
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};
