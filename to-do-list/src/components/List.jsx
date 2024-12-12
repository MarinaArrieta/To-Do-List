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
    <VStack>
        {tasks.length > 0 ? <><Heading textAlign='center'>Tareas</Heading> <Text>Para editar, hace click sobre la palabra...</Text> </> : <Heading textAlign='center'>Aún no hay tareas agregadas...</Heading>}
        {tasks.map((task, index)=> (
            <HStack key={index+task.name}>
              <MdEdit />
              <Editable textDecoration={task.checked  ? 'line-through' : 'none'} defaultValue={task.name} >
              <EditablePreview />
              <EditableInput />
            </Editable>
                
                {/* <Text textDecoration={task.checked  ? 'line-through' : 'none'}>{task.name}</Text> */}
                
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
                    onClick={onOpen}
                >
                    <MdDelete />
                    {index}
                </Button>

                <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Seguro desea eliminar este elemento ?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <MdWarning />
                        <Text fontWeight='bold' mb='1rem'>
                            Esta acción no se puede revertir
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Cerrar
                        </Button>
                        <Button variant='ghost' onClick={()=>onClose(onDelete(index))}>Eliminar</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            
            </HStack>
        ))}
    </VStack>
  )
}

export default List
