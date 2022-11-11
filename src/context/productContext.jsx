import { createContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, addProductToCart, deleteProductFromCart } from "../api";
import { showNotification, updateNotification } from "@mantine/notifications";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const client = useQueryClient();
  //get product
  
  const { data, isLoading, error } = useQuery(["products"], async () =>
    getProducts()
  );

  //add a product to cart
  const addProductMutation = useMutation(addProductToCart, {
    onMutate: () => {
      showNotification({
        id: "load-data",
        loading: true,
        title: "Loading...",
        message: "This might take a while 🙄...",
        autoClose: false,
        disallowClose: true,
      });
    },
    onSuccess: () => {
      updateNotification({
        id: "load-data",
        title: "Success ✅",
        message: "Product added to cart checkout your cart 🥳.",
        styles: (theme) => ({
          root: {
            "&::before": { backgroundColor: theme.colors.teal },
          },
          title: { color: theme.white, fontSize: 17 },
          description: { color: "#999", fontSize: 15 },
          closeButton: {
            color: theme.white,
            "&:hover": { backgroundColor: "rgba(0,0,0,.2)" },
          },
        }),
      });
    },
    onError: (error) => {
      console.log(error.response.status);
      updateNotification({
        id: "load-data",
        title: "Failed ❌",
        message: "Could not add product to cart 😣.",
        styles: (theme) => ({
          root: {
            "&::before": { backgroundColor: theme.colors.red },
          },
          title: { color: theme.white, fontSize: 17 },
          description: { color: "#999", fontSize: 15 },
          closeButton: {
            color: theme.white,
            "&:hover": { backgroundColor: "rgba(0,0,0,.2)" },
          },
        }),
      });
    },
  });

  //delete a product from cart
  const deleteProductMutation = useMutation(deleteProductFromCart, {
    onSuccess: () => client.invalidateQueries("products"),
    onMutate: () => {
      showNotification({
        id: "load-data",
        loading: true,
        title: "Loading...",
        message: "This might take a while 🙄...",
        autoClose: false,
        disallowClose: true,
      });
    },
    onError: ()=> {
      updateNotification({
        id: "load-data",
        title: "Failed ❌",
        message: "Could not add product to cart 😣.",
        styles: (theme) => ({
          root: {
            "&::before": { backgroundColor: theme.colors.red },
          },
          title: { color: theme.white, fontSize: 17 },
          description: { color: "#999", fontSize: 15 },
          closeButton: {
            color: theme.white,
            "&:hover": { backgroundColor: "rgba(0,0,0,.2)" },
          },
        }),
      });
    }
  });

  return (
    <ProductContext.Provider
      value={{ data, isLoading, addProductMutation, deleteProductMutation }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
