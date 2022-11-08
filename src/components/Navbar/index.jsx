import React from "react";
import {
  Header,
  Group,
  ActionIcon,
  Container,
} from "@mantine/core";
import { FaReact } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <Header height={56} mb={120}>
        <Container className="inner">
          <Group className="links" spacing={5}>
            {/* map links here */}
          </Group>

          <FaReact color="#61dbfb" size={28} />

          <Group spacing={0} className="cart" position="right" noWrap>
            <ActionIcon size="lg">
              <AiOutlineShoppingCart size={20} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </Header>
    </>
  );
};

export default Navbar;
