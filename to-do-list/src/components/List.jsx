import { VStack, 
    Text, 
    Heading, 
    HStack, 
    Button, 
    useDisclosure, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody, 
    ModalFooter,
    Editable,
    EditablePreview,
    EditableInput} from '@chakra-ui/react'
import { MdCheck, MdDelete, MdWarning, MdEdit } from "react-icons/md";


export const List = ({ tasks, onDelete, toggleChecked}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    console.log("este componente")
  return (
    <VStack spacing='5'>
        {tasks.length > 0 ? 
            <>
                <Heading textAlign='center' color='purple.800'>Tareas</Heading> 
                <Text color='blue.900'>Para editar, haz click sobre la palabra</Text> 
            </> : 
            <Heading textAlign='center'>Aún no hay tareas agregadas...</Heading>}
        {tasks.map((task, index)=> (
            <HStack 
            key={index+task.name} 
            bg={task.checked ? 'purple.800' : 'purple.200'} 
            justify='space-between'
            w='70%' 
            p='3'>
                
                <Text 
                    color={task.checked ? 'purple.200' : 'purple.800'} 
                    textDecoration={task.checked  ? 'line-through' : 'none'}>{task.name}
                </Text>
                <Button 
                    padding='11px' 
                    colorScheme={task.checked ? 'orange' : 'pink'}
                    onClick={() => toggleChecked(index)}
                >
                    <MdCheck />
                </Button>
                <Button 
                    padding='11px' 
                    colorScheme='red'
                    onClick={onOpen}
                >
                    <MdDelete />
                </Button>
                <Modal  blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered >
                    <ModalOverlay bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' />
                    <ModalContent w='75%' bg='purple.200'>
                    <ModalHeader color='purple.800'>Seguro desea eliminar este elemento ?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text color='blue.900' fontWeight='bold' mb='1rem'>
                          Esta acción no se puede revertir
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='orange' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button colorScheme='red' onClick={()=>onClose(onDelete(index))}>Eliminar</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            
            </HStack>
        ))}
    </VStack>
  )
}

export default List
