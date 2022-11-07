import { createContext } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { getProducts } from '../api';

export const ProductContext = createContext()

const ProductProvider = ({children}) =>{
  const { data, isLoading, error } = useQuery(["products"], async ()=>getProducts())
  return(
    <ProductContext.Provider value={{data}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider