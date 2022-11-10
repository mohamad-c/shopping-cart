import React from "react";
import { Card, Group, Image, Stack, Text } from "@mantine/core";

const ProductCard = ({ image, title, price }) => {
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
            <Text fw={700} fz="sm">{title}</Text>
            <Text fz="md" c="dimmed">
              {price}$
            </Text>
          </Stack>
        </Group>
      </Card.Section>
    </Card>
  );
};

export const MemoizedProductCard = React.memo(ProductCard);
