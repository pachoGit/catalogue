import React, { useState, useRef } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Body } from "./components/Body";

export function App() {

  return (
    <Box>
      <NavBar/>
      <Body/>
    </Box>
  );
}
