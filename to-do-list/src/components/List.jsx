// import Item from "./Item"
import { VStack, Text, Heading, HStack, Button } from '@chakra-ui/react'


export const List = ({ tasks, onDelete }) => {
  return (
    <VStack>
        {tasks.length > 0 ? <Heading>Tareas</Heading> : <Heading>Aún no hay tareas agregadas...</Heading>}
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
