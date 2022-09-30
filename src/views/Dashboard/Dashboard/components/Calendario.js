import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import 'react-calendar/dist/Calendar.css';

function Calendario() {
  const [value, onChange] = useState(new Date());

  return (
    <Card  minHeight='200.5px' p='1.2rem'   >
        <Calendar
        w='100%'
        onChange={onChange} 
        value={value} >
        </Calendar>
    </Card>
  );
}
export default Calendario;

