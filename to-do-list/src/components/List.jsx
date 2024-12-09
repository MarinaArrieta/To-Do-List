import { VStack, Text, Heading, HStack, Button } from '@chakra-ui/react'
import { MdCheck, MdDelete } from "react-icons/md";


export const List = ({ tasks, onDelete, toggleChecked}) => {

    console.log("este componente")
  return (
    <VStack>
        {tasks.length > 0 ? <Heading textAlign='center'>Tareas</Heading> : <Heading textAlign='center'>Aún no hay tareas agregadas...</Heading>}
        {tasks.map((task, index)=> (
            <HStack key={index+task.name}>
                <Text textDecoration={task.checked  ? 'line-through' : 'none'}>{task.name}</Text>
                <Button 
                    padding='11px' 
                    colorScheme={task.checked ? 'teal' : 'pink'}
                    onClick={() => toggleChecked(index)}
                >
                    <MdCheck />
                    {index}
                </Button>
                <Button 
                    padding='11px' 
                    colorScheme='blue'
                    onClick={()=>onDelete(index)}
                >
                    <MdDelete />
                    {index}
                </Button>
            
            </HStack>
        ))}
    </VStack>
  )
}

export default List
