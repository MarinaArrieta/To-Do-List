import {
  Text,
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
  Tooltip
} from '@chakra-ui/react'
import { MdCheck, MdDelete } from "react-icons/md";


const Item = ({ task, index, onDelete, toggleChecked }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <HStack
      bg={task.checked ? 'purple.800' : 'purple.200'}
      justify='space-between'
      w='100%'
      p='3'>

      <Text
        color={task.checked ? 'purple.200' : 'purple.800'}
        textDecoration={task.checked ? 'line-through' : 'none'}>{task.name}
      </Text>
      {!task.checked ? <>
        <Tooltip label="Marcar tarea completa 💪">
          <Button
            padding='11px'
            colorScheme={task.checked ? 'orange' : 'pink'}
            onClick={() => toggleChecked(index)}
          >
            <MdCheck />
          </Button>
        </Tooltip>
        <Tooltip label="Eliminar tarea sin completar 🤔">
          <Button
            padding='11px'
            colorScheme='red'
            onClick={onOpen}
          >
            <MdDelete />
          </Button>
        </Tooltip>
      </>
        :
        <>
          <Tooltip label="Desmarcar tarea completa 🥺">
            <Button
              padding='11px'
              colorScheme={task.checked ? 'orange' : 'pink'}
              onClick={() => toggleChecked(index)}
            >
              <MdCheck />
            </Button>
          </Tooltip>
          <Tooltip label="Eliminar tarea completa 😉">
            <Button
              padding='11px'
              colorScheme='red'
              onClick={onOpen}
            >
              <MdDelete />
            </Button>
          </Tooltip>
        </>
      }
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered >
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
            <Button colorScheme='red' onClick={() => onClose(onDelete(index))}>Eliminar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </HStack>
  )
}

export default Item
