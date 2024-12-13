import { Heading, VStack, InputRightElement, InputGroup, Input, Button, Select, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { List } from './List'

export const TodoList = () => {

    const initialValue = getLocalStorage('tasks') || []
    const [value, setValue] = useState('')
    const [select, setSelect] = useState('')
    const [allTasks, setAllTasks] = useState(initialValue)
    const [tasks, setTasks] = useState(initialValue)
    const toast = useToast()

    const onDelete = (indexElement)=>{
        let elem_to_del = tasks[indexElement]
        let orig_index = allTasks.indexOf(elem_to_del)

        const deleteTasks = allTasks.filter((_, index)=> index !== orig_index)
        setAllTasks(deleteTasks)
        setTasks(deleteTasks)
        setLocalStorage('tasks', deleteTasks)
    }

    const handleClick = ()=>{
        if (value.length < 4){
            toast({
                position: 'top',
                description: "Debes escribir mas de tres caracteres...",
                status: 'error',
            })
        } else{
            let new_task = {
                name: value,
                checked: false
            }
            const newTasks = [...allTasks, new_task]
            setAllTasks(newTasks)
            setTasks(newTasks)
            setLocalStorage('tasks', newTasks)
        }
    }

    const toggleChecked = (indexElement) => {
        tasks[indexElement].checked = !tasks[indexElement].checked

        tasks.sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? 1 : -1))
       
        setTasks([...tasks])
        setLocalStorage('tasks', allTasks)
    };

    const filterSelect = (e)=>{
        let values = e.target.value
        setSelect(values)
        if (values === 'check'){
            let hola= allTasks.filter((task) => task.checked)
            setTasks(hola)
        } else if (values === 'uncheck'){
            let hola= allTasks.filter((task) => !task.checked)
            setTasks(hola)
        }
        else {
            setTasks(allTasks)
        }
    }

    return (
        <VStack minH='100vh' spacing='62px' justifyContent='center' padding='20px' bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
            <Heading color='purple.800'>Todo List</Heading>
            <VStack width= {{base: '90%', md: '80%', lg: '50%', xl: '40%'}}>
                <InputGroup size='md'>
                    <Input
                        variant='filled'
                        focusBorderColor='purple.600'
                        bg='purple.200'
                        pr='4.5rem'
                        type='text'
                        placeholder='Ingrese una tarea...'
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                    />
                    <InputRightElement width='4.5rem' padding='4px'>
                        <Button h='1.75rem' size='sm' colorScheme='purple' onClick={handleClick}>
                            Agregar
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Select 
                    variant='filled'
                    focusBorderColor='purple.600'
                    bg='purple.200'
                    placeholder='Seleccione una opción' 
                    value={select} 
                    onChange={filterSelect}
                >
                    <option value='all'>Todas</option>
                    <option value='check'>Completas</option>
                    <option value='uncheck'>Incompletas</option>
                </Select>
            </VStack>
            <List tasks={tasks} onDelete={onDelete} toggleChecked={toggleChecked}/>
        </VStack>
    )
}

export default TodoList
