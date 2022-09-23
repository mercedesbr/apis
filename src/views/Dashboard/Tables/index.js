// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import { tablesTableData, dashboardTableData } from "variables/general";
import Clases from "./components/Clases";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Clases
        title={"Authors Table"}
        captions={["Materia", "Profesor", "Tipo", "Frecuencia", "Calificacion", ""]}
        data={tablesTableData}
      />
    </Flex>
  );
}

export default Tables;
