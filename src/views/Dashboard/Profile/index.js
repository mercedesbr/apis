// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import React from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import Conversations from "./components/Conversations";
import Header from "./components/Header";
import PlatformSettings from "./components/PlatformSettings";
import ProfileInformation from "./components/ProfileInformation";
import Comment from "./components/Comment";
import Projects from "./components/Projects";

function Profile() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction='column'>
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={"Matemática"}
        email={"Cifre, Juan Manuel"}
        tabs={[
          {
            name: "Calificacion",
            icon: <FaCube w='100%' h='100%' />,
          },
          {
            name: "Link",
            icon: <IoDocumentsSharp w='100%' h='100%' />,
          },
          {
            name: "Comentar",
            icon: <FaPenFancy w='100%' h='100%' />,
          },
          {
            name: "Registrarse",
            icon: <FaPenFancy w='100%' h='100%' />,
          },
        ]}
      />
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <PlatformSettings
          title={"Historia"}
          subtitle1={"Descripcion"}
          subtitle2={"Dificultad"}
          subtitle3={"Comentarios"}
        />
        <ProfileInformation
          title={"Profesor"}
          description={
            "Hola! Soy Juan Manuel. Soy profesor de Matematica, estudie profesorado en matematica en la Universidad de Buenos Aires en el 2015."            
          }
          name={"Juan Manuel Cifre"}
          mobile={"(+54) 11 1235 4859"}
          email={"jmc@gmail.com"}
          location={"Barcelona"}
        />
        <Comment
          title={"Comentarios"}
          subtitle1={"John Cena:"}
          subtitle2={"¡Esta clase me parece genial!"}
        />
      </Grid>

    </Flex>
  );
}

export default Profile;
