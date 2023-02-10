import {
  Button,
  Center,
  createStyles,
  Group,
  Paper,
  Text,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import cartData from "../../../db.json";

const useStyles = createStyles(() => ({
  value: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));
const PriceCard = () => {
  const { classes } = useStyles();
  const productPrice = cartData.cart?.map((price) => {
    return price.price;
  });
  const totalProductPrices = productPrice.reduce(
    (acc, current) => acc + current
  );
  console.log(totalProductPrices);

  let filteredProduct = cartData.cart?.filter((item) => {
    return item.shipping !== "free shipping";
  });
  const shippingPrice = filteredProduct?.map((price) => {
    return parseInt(price.shipping);
  });
  console.log(shippingPrice);
  const totalShippingPrices =
    shippingPrice.length !== 0
      ? shippingPrice.reduce((acc, current) => acc + current)
      : "free";
  console.log(totalShippingPrices);
  const sum = totalProductPrices + totalShippingPrices;
  
  return (
    <Paper withBorder p="md" radius="md" shadow="md">
      <Group position="apart">
        <Text size="xs" color="dimmed" className={classes.title}>
          Total Product price
        </Text>
        <Text className={classes.value}>{totalProductPrices.toFixed(2)}$</Text>
      </Group>

      <Group position="apart" mt={30}>
        <Text size="xs" color="dimmed" className={classes.title}>
          Shipping Product Price
        </Text>
        <Text className={classes.value}>
          {totalShippingPrices !== "free" ? `${totalShippingPrices}$` : "free"}
        </Text>
      </Group>
      <Group position="apart" mt={30}>
        <Text size="xs" color="dimmed" className={classes.title}>
          Total price
        </Text>
        <Text className={classes.value}>
          {shippingPrice.length !== 0
            ? sum.toFixed(2)
            : totalProductPrices.toFixed(2)}
          $
        </Text>
      </Group>
      <Center>
        <Button
          variant="outline"
          color="green"
          mt={30}
          style={{ width: "50%" }}
          onClick={() => showNotification({ message: "you purchased items" })}
        >
          Buy now
        </Button>
      </Center>
    </Paper>
  );
};

export default PriceCard;
