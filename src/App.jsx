import { useContext } from "react";
import "./App.css";
import ProductCard from "./components/Card";
import { ProductContext } from "./context/productContext";
import { Center, Container, Group, Loader, Stack } from "@mantine/core";

function App() {
  const { data, isLoading } = useContext(ProductContext);
  console.log(data);
  return (
    <div className="App">
      <Container my={100}>
        <Center>
          <Group position="center" spacing="xl">
            {isLoading ? (
              <Loader size="xs" />
            ) : (
              data?.map((product) => (
                <ProductCard
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
    </div>
  );
}

export default App;
