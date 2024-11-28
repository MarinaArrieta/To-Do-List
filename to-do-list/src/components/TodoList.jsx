import { Heading, VStack, InputRightElement, InputGroup, Input, Button, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { List } from './List'

const TodoList = () => {

    const initialValue = getLocalStorage('tasks') || []
    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState(initialValue)

    const onDelete = (indexElement)=>{
        const deleteTasks = tasks.filter((_, index)=> index !== indexElement)
        setTasks(deleteTasks)
        setLocalStorage('tasks', deleteTasks)
    }

    const handleClick = ()=>{
        const newTasks = [...tasks, value]
        setTasks(newTasks)
        setLocalStorage('tasks', newTasks)
    }

  return (
    <VStack minH='100vh' spacing='62px' justifyContent='center' padding='20px'>
        <Heading>Todo List</Heading>
        <VStack width= {{base: '90%', md: '80%', lg: '50%', xl: '40%'}}>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type='text'
                    placeholder='Ingrese una tarea...'
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
                <InputRightElement width='4.5rem' padding='4px'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        Agregar
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Select placeholder='Seleccione una opcion'>
                <option value='todas'>Todas</option>
                <option value='completas'>Completas</option>
                <option value='incompletas'>Incompletas</option>
            </Select>
        </VStack>
        <List tasks={tasks} onDelete={onDelete}/>
    </VStack>
    )
}

export default TodoList
