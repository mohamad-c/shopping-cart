import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductProvider from "./context/productContext";
import { MantineProvider } from '@mantine/core';

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ProductProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: "dark" }}
        >
          <App />
        </MantineProvider>
      </ProductProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
