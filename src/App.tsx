import "./styles.css";
import Header from "./components/Header";
import Body from "./components/Body";
import React from "react";
import Box from "./UI/components/Box";

export default function App() {
  return (
    <Box>
      <Header />
      <Body />
    </Box>
  );
}
