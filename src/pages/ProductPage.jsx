import React from "react";
import ProductCard from "../components/Card";
import { Center, Container, Group, Loader, Stack } from "@mantine/core";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const ProductPage = () => {
  const { data, isLoading } = useContext(ProductContext);
  return (
    <>
      <Container my={100}>
        <Center>
          <Group position="center" spacing="xl">
            {isLoading ? (
              <Loader size="xs" />
            ) : (
              data?.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  price={product.price}
                  title={product.title}
                  brand={product.company}
                  shipping={
                    product.freeShipping === true
                      ? "free shipping"
                      : "100$ for shipping"
                  }
                />
              ))
            )}
          </Group>
        </Center>
      </Container>
    </>
  );
};

export default ProductPage;
