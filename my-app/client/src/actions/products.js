import axios from 'axios';

export async function getProducts() {
  try {
    const response = await axios.get('http://localhost:5000/api/products');
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
