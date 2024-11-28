// import Item from "./Item"
import { VStack, Text, Heading, HStack, Button } from '@chakra-ui/react'


export const List = ({ tasks, onDelete }) => {
  return (
    <VStack>
        <Heading>Tareas</Heading>
        {tasks.map((task, index)=> (
            <HStack key={index+task}>
                <Text>{task}</Text>
                <Button onClick={()=>onDelete(index)}>Eliminar</Button>
            </HStack>
        ))}
    </VStack>
  )
}

export default List
