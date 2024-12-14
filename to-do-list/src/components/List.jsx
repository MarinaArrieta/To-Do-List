import {
    VStack,
    Heading,
} from '@chakra-ui/react'
import Item from './Item';


export const List = ({ tasks, onDelete, toggleChecked }) => {
    return (
        <VStack spacing='5'>
            {tasks.length > 0 ?
                <>
                    <Heading textAlign='center' color='purple.800'>Tareas</Heading>
                </> :
                <Heading textAlign='center' color='purple.800'>Aún no hay tareas agregadas...</Heading>}
            {tasks.map((task, index) => (
                <Item task={task} index={index} onDelete={onDelete} toggleChecked={toggleChecked} key={index + task.name}/>
            ))}
        </VStack>
    )
}

export default List
