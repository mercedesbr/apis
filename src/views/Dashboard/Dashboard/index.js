// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import React from "react";
import Calendario from "./components/Calendario";
import EstadisticaGeneral from "./components/EstadisticaGeneral";
import AllAsOne from "./components/AllAsOne";
import Novedades from "./components/Novedades";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <Novedades
          title={"Febrero"}
          name={"Novedades"}
        />
        <AllAsOne
          backgroundImage={peopleImage}
          title={"Aprendiendo todos juntos"}
          description={
            "Aqui podrás encontrar un espacio colaborativo en donde resolver dudas con la ayuda de otros usuarios"
          }
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <Calendario
          title={"Calendario"}
          percentage={23}
          chart={<BarChart />}
        />
        <EstadisticaGeneral
          title={"Estadistica General"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
    </Flex>
  );
}