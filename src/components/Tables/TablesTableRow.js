import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function TablesTableRow(props) {
  const {materia, profesor, tipo, frecuencia, calificacion, edit } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold"
              minWidth="100%"
            >
              {materia}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold"
              minWidth="100%">
            {profesor}
          </Text>
      </Td>

      <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold"
              minWidth="100%">
            {tipo}
          </Text>
      </Td>
      <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold"
              minWidth="100%">
            {frecuencia}
          </Text>
      </Td>
      <Td>
      <Badge
          bg={calificacion >= 7 ? "green.400" : bgStatus}
          color={calificacion != null ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {calificacion}
        </Badge>

      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {edit}
        </Text>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Ingresar
          </Text>
        </Button>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="blue.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Editar
          </Text>
        </Button>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="red.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Borrar
          </Text>
        </Button>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
