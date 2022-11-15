import React from "react";
import {
  Container,
  Grid,
  SimpleGrid,
  Table,
  Center,
  Avatar,
  Text,
  ActionIcon,
} from "@mantine/core";
import PriceCard from "../components/PriceCard";
import cartData from "../../db.json";
import { FiTrash2 } from "react-icons/fi";
import { deleteProductFromCart } from "../api";
import { Link } from "react-router-dom";


const CheckoutPage = () => {
  const rows = cartData.cart?.map((product) => (
    <tr key={product.id}>
      <td>
        <Avatar size="lg" src={product.image} />
      </td>
      <td>
        <Text fw={500} fz="md">
          {product.title}
        </Text>
      </td>
      <td>
        <Text fw={500} fz="md">
          {product.price} $
        </Text>
      </td>
      <td>
        <Text fw={500} fz="md">
          {product.brand}
        </Text>
      </td>
      <td>
        <ActionIcon variant="light" onClick={()=>deleteProductFromCart(product.id)}>
          <FiTrash2 size={17} color="red" />
        </ActionIcon>
      </td>
    </tr>
  ));
  return (
    <Container my="md">
      <Center style={{ width: "100%", height: 450 }}>
        <SimpleGrid
          cols={1}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          {
            cartData.cart.length !== 0 ?  <Table
            striped
            highlightOnHover
            horizontalSpacing="md"
            verticalSpacing="lg"
          >
            <thead>
              <tr>
                <th></th>
                <th>Product name</th>
                <th>Product price</th>
                <th>Product Co.</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table> : ""
          }
          <Grid gutter="md">
            <Grid.Col span={12}>
              {
                cartData.cart?.length !== 0 ? <PriceCard /> : <Text>Cart is empty <Link to="/">go to shop</Link></Text>
              }
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default CheckoutPage;
