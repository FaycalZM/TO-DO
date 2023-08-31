import React, { useState, useRef } from 'react'
import { useTasksContext } from '../context/TasksProvider';
import { MdOutlineAddTask } from 'react-icons/md'

const AddTaskForm = () => {
    const inputRef = useRef();
    const { dispatch, nextId, setNextId } = useTasksContext();
    const [inputText, setInputText] = useState('');

    const addTaskHandler = (taskText) => {
        dispatch({
            type: 'added',
            id: nextId,
            text: taskText
        });
        setNextId(nextId => nextId + 1);
    }
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setInputText('');
                addTaskHandler(inputText);
            }}
            className='flex items-center gap-4 px-6 py-4 w-full bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded-md mb-6 '>
            <div className='h-full p-[1px] '>
                <div className='w-6 h-6 rounded-full border-[1px] border-very-light-grayish-blue dark:border-very-dark-grayish-blue-dark-1'></div>
            </div>
            <input
                className='w-full h-full py-2 px-2 bg-transparent focus:outline-none text-xl text-very-dark-desaturated-blue dark:text-very-light-grayish-blue'
                type="text"
                placeholder='Create new todo...'
                ref={inputRef}
                value={inputText}
                onChange={() => {
                    setInputText(inputRef.current.value);
                }}
            />
            <button type="submit">
                <MdOutlineAddTask className='
                    text-light-grayish-blue-light text-2xl hover:text-dark-grayish-blue-light 
                    dark:text-dark-grayish-blue-dark dark:hover:text-light-grayish-blue-dark-hover
                    transition duration-200' />
            </button>
        </form>
    )
}

export default AddTaskForm