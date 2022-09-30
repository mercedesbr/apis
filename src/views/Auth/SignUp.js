// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Select,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SignUp() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={BgSignUp}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}></Box>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
        <Text fontSize='4xl' color='white' fontWeight='bold'>
          ¡Bienvenido!
        </Text>
        <Text
          fontSize='md'
          color='white'
          fontWeight='normal'
          mt='10px'
          mb='26px'
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}>
         Cree un nuevo usuario de manera gratuita
        </Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        <Flex
          direction='column'
          w='445px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            Registrarse con
          </Text>
          <HStack spacing='15px' justify='center' mb='22px'>
            <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href='#'>
                <Icon
                  as={FaFacebook}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
            <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href='#'>
                <Icon
                  as={FaApple}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
            <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href='#'>
                <Icon
                  as={FaGoogle}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
          </HStack>
          <Text
            fontSize='lg'
            color='gray.400'
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            or
          </Text>
          <FormControl>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Nombre
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Tu nombre'
              mb='24px'
              size='lg'
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Apellido
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Tu apellido'
              mb='24px'
              size='lg'
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Email
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='email'
              placeholder='Tu email'
              mb='24px'
              size='lg'
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Telefono
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='number'
              placeholder='Tu celular'
              mb='24px'
              size='lg'
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Contraseña
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='password'
              placeholder='Tu contraseña'
              mb='24px'
              size='lg'
            />
            <FormControl  id="usuario">
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal' >Tipo de Usuario</FormLabel>
              <Select ms='4px' fontSize='sm' fontWeight='normal' placeholder = "Seleccione tipo usuario" >
              <option ms='4px' fontSize='sm' fontWeight='normal' > Profesor</option>
              <option ms='4px' fontSize='sm' fontWeight='normal' > Alumno</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>

              </FormLabel>
            </FormControl>
            <FormControl display='flex' alignItems='center' mb='24px'>
              <Switch id='remember-login' colorScheme='teal' me='10px' />
              <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                Recuerdame
              </FormLabel>
            </FormControl>
            <NavLink to={'/admin/dashboard'}>
            <Button
              type='submit'
              bg='teal.300'
              fontSize='10px'
              color='white'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}>
              Crear Cuenta
            </Button>
            </NavLink>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            maxW='100%'
            mt='0px'>
            <Text color={textColor} fontWeight='medium'>
              ¿Ya posee una cuenta?
              <Link
                color={titleColor}
                as='span'
                ms='5px'
                href='#'
                fontWeight='bold'>
                Ingresar
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
