import { createContext } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getProducts, addProductToCart } from '../api';

export const ProductContext = createContext()

const ProductProvider = ({children}) =>{
  //get product
  const { data, isLoading, error } = useQuery( ["products"], async () => getProducts() )
  //add a product to cart
  const addProductMutation = useMutation(addProductToCart, {
    onSuccess:()=>{
      console.log("success");
    }
  })
  return(
    <ProductContext.Provider value={{ data, isLoading, addProductMutation }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider