import React from "react";
import { HoverCard, Group, Center, Button, Divider, Text } from "@mantine/core";
import cartData from "../../../db.json";
import { MemoizedProductCard } from "../ProductCard";
import { useNavigate } from "react-router-dom";

const ProductInCart = ({ children }) => {
  const prices = cartData.cart.map((val) => {
    return val.price;
  });
  const totalPrice =
    cartData.cart.length !== 0
      ? prices.reduce((acc, current) => acc + current)
      : "";
  const navigate = useNavigate()
  if (cartData.cart?.length > 3) {
    return (
      <>
        <Group position="center">
          <HoverCard width={280} shadow="md">
            <HoverCard.Target>{children}</HoverCard.Target>
            <HoverCard.Dropdown>
              {cartData.cart?.slice(0, 3).map((product) => (
                <MemoizedProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  id={product.id}
                />
              ))}
              <Divider my="md" size="xs" />
              <Center>
                
                <Button
                  variant="outline"
                  color="teal"
                  style={{ width: "100%" }}
                  onClick={()=>navigate("/checkout")}
                >
                  see cart
                </Button>
              </Center>
              <Divider my="md" size="xs" />
              <Text>Total:</Text>
              <Text fw={500}>{totalPrice.toFixed(2)}$</Text>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </>
    );
  } else
    return (
      <Group position="center">
        <HoverCard width={280} shadow="md">
          <HoverCard.Target>{children}</HoverCard.Target>
          <HoverCard.Dropdown>
            {cartData.cart?.length !== 0 ? (
              <>
                {cartData.cart?.slice(0, 3).map((product) => (
                  <MemoizedProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                ))}
              </>
            ) : (
              <Center>
                <Text fw={600}>cart is empty 🎈</Text>
              </Center>
            )}
            {cartData.cart.length !== 0 ? (
              <>
                <Divider my="md" size="xs" />
                <Text>Total:</Text>
                <Text fw={500}>{totalPrice}$</Text>
              </>
            ) : (
              ""
            )}
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
    );
};

export default ProductInCart;
