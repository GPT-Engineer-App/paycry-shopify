import React from "react";
import { Container, Box, VStack, HStack, Text, Image, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a great product.",
    price: "$10.00",
    image: "https://images.unsplash.com/photo-1705096953495-8ea06879b986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTc1ODE4NDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is another great product.",
    price: "$20.00",
    image: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTc1ODE4NDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is yet another great product.",
    price: "$30.00",
    image: "https://images.unsplash.com/photo-1700853010051-dce31802dafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTc2MDg4MTV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <HStack justifyContent="space-between" mb={4}>
        <Heading as="h1" size="lg">
          Paycry Shop
        </Heading>
        <HStack spacing={4}>
          <IconButton aria-label="Search" icon={<FaSearch />} />
          <IconButton aria-label="User" icon={<FaUser />} />
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
        </HStack>
      </HStack>
      <VStack spacing={8}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <HStack justifyContent="space-between">
                <Heading as="h2" size="md">
                  {product.name}
                </Heading>
                <Text fontSize="xl" color="gray.600">
                  {product.price}
                </Text>
              </HStack>
              <Text mt={4}>{product.description}</Text>
              <Button mt={4} colorScheme="teal">
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
