import React, { useContext } from "react";
import {
  Card,
  Group,
  Image,
  Stack,
  Text,
  CloseButton,
} from "@mantine/core";
import { ProductContext } from "../../context/productContext";

const ProductCard = ({ image, title, price, id }) => {
  const { deleteProductMutation } = useContext(ProductContext);
  return (
    <Card
      withBorder
      shadow="sm"
      radius="md"
      mb={15}
      style={{ height: "70px", backgroundColor: "#212529" }}
    >
      <Card.Section>
        <Group>
          <Image src={image} radius="sm" height={70} width={80} />
          <Stack spacing="xs">
            <Text fw={700} fz="sm">
              {title}
            </Text>
            <Text fz="md" c="dimmed">
              {price}$
            </Text>
          </Stack>
          <CloseButton
            title="remove prroduct"
            size="md"
            iconSize={17}
            color="red"
            onClick={() => deleteProductMutation.mutate(id)}
          />
        </Group>
      </Card.Section>
    </Card>
  );
};

export const MemoizedProductCard = React.memo(ProductCard);
