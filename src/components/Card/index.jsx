import { Image, Card, Text, Group, Button } from "@mantine/core";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";


const ProductCard = ({ image, title, price, shipping, brand }) => {
  const { addProductMutation } = useContext(ProductContext);

  return (
    <Card radius="md" withBorder p="xl" style={{ width: "40%" }}>
      <Card.Section>
        <Image src={image} height={150} />
      </Card.Section>

      <Group position="apart" mt="lg">
        <Text weight={500} size="lg">
          {title}
        </Text>

        {/* <Group spacing={5}>
          <IconStar size={16} />
          <Text size="xs" weight={500}>
            4.78
          </Text>
        </Group> */}
      </Group>

      <Text size="sm" color="dimmed" mt="sm">
        {brand}
        {/* Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel
        close to nature in ultimate comfort. Enjoy the view of the epic mountain
        range of Blegja and the Førdefjord. */}
      </Text>

      <Group position="apart" mt="md">
        <div>
          <Text size="xl" span weight={500}>
            {price}$
          </Text>
          <Text span fz="xs" color="dimmed">
            {" "}
            / {shipping}
          </Text>
        </div>

        <Button
          radius="md"
          variant="filled"
          color="yellow"
          onClick={() => {
            addProductMutation.mutate({
              title: title,
              price: price,
              shipping: shipping,
              brand: brand,
              image: image
            })
          }}
        >
          Add to cart
        </Button>
      </Group>
    </Card>
  );
};

export default ProductCard;
