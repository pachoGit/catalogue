import React, { useState, useRef } from "react";
import { Box, Center, Flex, Spacer, Button, ButtonGroup } from "@chakra-ui/react";
import { FaSteamSymbol, FaSistrix, FaShoppingCart } from "react-icons/fa";

export function Body() {

  return (

    <Box pt={24} w="100%" h="100%" bg="gray.200">
      <Center>
        <Box w="70%" bg="purple.200">

          <Flex>

            <Box w="20%" bg="blue.200">
              PRIMERO ESCRIBIR LO QUE NADA MAS TENDREMOS QUE AGREGAR MEJORES RESULTADOS
            </Box>

            <Spacer/>

            <Box w="40%" bg="tomato.200">
              SEGUNDO ESPERA QUE? PRIMERO ESCRIBIR LO QUE NADA MAS TENDREMOS QUE AGREGAR MEJORES RESULTADOS

            </Box>

            <Spacer/>

            <Box w="20%" bg="red.200">
              TERCERO
            </Box>

          </Flex>

        </Box>
      </Center>
    </Box>

  );
};
