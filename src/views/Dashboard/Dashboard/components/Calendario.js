
import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";

const Calendario = ({ title, percentage, chart }) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='16px'>
      <CardBody>
      </CardBody>
    </Card>
  );
};

export default Calendario;
