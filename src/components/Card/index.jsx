import { Image, Card, Text, Group, Button } from "@mantine/core";

const ProductCard = ({image, title, price, shipping, brand}) => {
  return (
    <Card radius="md" withBorder p="xl" style={{width:"40%"}}>
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
          <Text span size="sm" color="dimmed">
            {" "}
            / {shipping}
          </Text>
        </div>

        <Button radius="md" variant="filled" color="yellow">Add to cart</Button>
      </Group>
    </Card>
  );
};

export default ProductCard;
