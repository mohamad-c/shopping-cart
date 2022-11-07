import axios from "axios"

export const getProducts = async () =>{
  const product = await axios.get("http://localhost:3000/products")
  return product.data 
}