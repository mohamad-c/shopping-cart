import React from "react";
import { Header, Group, ActionIcon, Container, Indicator } from "@mantine/core";
import { FaReact } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./style.css";
import cartItems from "../../../db.json";
import ProductInCart from "../ProductInCart";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header height={56} mb={120} className="navbar_header">
        <Container className="inner">
          <Group className="links" spacing={5}>
            {/* map links here */}
          </Group>
          <ActionIcon size="lg" onClick={() => navigate("/")}>
            <FaReact color="#61dbfb" size={28} />
          </ActionIcon>

          <Group spacing={0} className="cart" position="right" noWrap>
            <ProductInCart>
              <ActionIcon size="lg" onClick={() => navigate("/checkout")}>
                <Indicator
                  size={18}
                  label={String(cartItems.cart.length)}
                  inline
                  showZero={false}
                  dot={false}
                >
                  <AiOutlineShoppingCart size={20} stroke={1.5} />
                </Indicator>
              </ActionIcon>
            </ProductInCart>
          </Group>
        </Container>
      </Header>
    </>
  );
};

export default Navbar;
