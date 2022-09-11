import React, { useState, useRef } from "react";
import { Box, Button, ButtonGroup, Input, Icon, Center, Wrap, WrapItem,
         Text, Avatar, Heading, Flex, Spacer, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSistrix, FaShoppingCart } from "react-icons/fa";

export function NavBar() {

  return (
    <Box pos="fixed" as="nav" p={4} bg="white" w="100%" boxShadow="md" zIndex={2}>
      <Center>
        <Box w="70%" >
          <Flex>

            <Box w="20%">
              <Wrap>
                <WrapItem>
                  <Avatar name="logo" src="./logo192.png"/>
                </WrapItem>
                <WrapItem>
                  <Center>
                    <Heading pt={2} size="lg">
                      Nombre
                    </Heading>
                  </Center>
                </WrapItem>
              </Wrap>
            </Box>

            <Spacer/>

            <Box w="40%">
              <InputGroup pt={1}>
                <InputLeftElement
                  pointerEvents='none'
                  children={<Icon as={FaSistrix} color='gray.300' />}
                />
                <Input
                  type="text"
                  placeholder="Hola 😃 ¿Qué estas buscando?"
                  _placeholder={{ color: "black" }}
                  boxShadow="md"/>
              </InputGroup>
            </Box>

            <Spacer/>

            <Box w="20%">

              <ButtonGroup variant="link" pt={2} spacing="8">
                {["Nosotros"].map((item) => (
                  <Button key={item}>{item}</Button>
                ))}
                <Button variant="ghost" leftIcon={<Icon as={FaShoppingCart} _hover={{ opacity: 0.5 }}/>}>
                </Button>
              </ButtonGroup>
            </Box>

          </Flex>
        </Box>
      </Center>
    </Box>
  );
};
