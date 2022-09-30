// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";

const Novedades = ({ title, name, description }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card minHeight='200.5px' p='1.2rem'>
      <CardBody w='100%'>
        <Flex w='100%'>
          <Flex
            flexDirection='column'
            h='100%'
            lineHeight='1.6'
            width={{ lg: "100%" }}>
            <Text fontSize='sm' color='gray.400' fontWeight='bold'>
              {title}
            </Text>
            <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
              {name}
            </Text>
            <Text fontSize='lg' color='gray.400' fontWeight='normal'>
              {description}
            </Text>
            <Spacer />
            <Flex direction='column'>
                <Text flexDirection={{ sm: "column", lg: "row" }} fontSize='sm' color={textColor} fontWeight='bold'>
                 Nuevos horarios{" "}
                </Text>
                <Text fontSize='xs' color='gray.500' fontWeight='400' >
                  A partir del 01/11/2022 se abriran las inscripciones
                </Text>
              </Flex>
              <Flex direction='column'>
                <Text fontSize='sm' color={textColor} fontWeight='bold'>
                  Nuevas clases {" "}
                </Text>
                <Text fontSize='xs' color='gray.500' fontWeight='400'>
                  Consulta el listado de las nuevas clases que se abriran a partir del 2023...
                </Text>
              </Flex>
              <Flex direction='column'>
                <Text fontSize='sm' color={textColor} fontWeight='bold'>
                  Feriados {" "}
                </Text>
                <Text fontSize='xs' color='gray.500' fontWeight='400'>
                  Calendario actualizado de feriados en Argentina...
                </Text>
              </Flex>
              <Flex direction='column'>
                <Text fontSize='sm' color={textColor} fontWeight='bold'>
                  Ayuda al estudiante {" "}
                </Text>
                <Text fontSize='xs' color='gray.500' fontWeight='400'>
                  Recorda que se encuentra disponible el sector de ayuda al estudiante para resolver cualquier...
                </Text>
              </Flex>
            <Flex align='center'>
              <Button
                p='0px'
                variant='no-hover'
                bg='transparent'
                my={{ sm: "1.5rem", lg: "0px" }}>
                <Text
                  fontSize='lg'
                  color={textColor}
                  fontWeight='bold'
                  cursor='pointer'
                  transition='all .5s ease'
                  my={{ sm: "1.5rem", lg: "0px" }}
                  _hover={{ me: "4px" }}>
                  Conoce más
                </Text>
                <Icon
                  as={BsArrowRight}
                  w='20px'
                  h='20px'
                  fontSize='2xl'
                  transition='all .5s ease'
                  mx='.3rem'
                  cursor='pointer'
                  pt='4px'
                  _hover={{ transform: "translateX(20%)" }}
                />
              </Button>
            </Flex>
          </Flex>
          <Spacer />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Novedades;
