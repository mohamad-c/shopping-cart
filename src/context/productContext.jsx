import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from '../api';

export const ProductContext = createContext()

const ProductProvider = ({children}) =>{
  const { data, isLoading, error } = useQuery(["products"], async ()=>getProducts())
  return(
    <ProductContext.Provider value={{data, isLoading}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider