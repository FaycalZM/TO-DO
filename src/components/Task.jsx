import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useTasksContext } from '../context/TasksProvider'

const Task = ({
    text,
    isCompleted,
    id,
    index,
    handleDragStart,
    handleDrop,
    handleDragEnter,
    handleDragEnd
}) => {


    const { allTasks, setAllTasks } = useTasksContext();

    const updateTaskHandler = () => {
        setAllTasks(
            allTasks.map(task => {
                if (id === task.id) {
                    return { ...task, isCompleted: !isCompleted };
                }
                else {
                    return task;
                }
            })
        );
    }

    const deleteTaskHandler = () => {
        setAllTasks(
            allTasks.filter(task => task.id !== id)
        )
    }
    return (
        <div
            draggable
            onDragStart={() => {
                handleDragStart(index);
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
                handleDrop(index);
            }}
            onDragEnter={() => {
                handleDragEnter(index);
            }}
            onDragEnd={handleDragEnd}


            className='task flex items-start justify-between px-6 py-4 w-full border-b-[1px] border-b-very-light-grayish-blue bg-very-light-gray'>
            <div className='flex items-center gap-4 p-[1px]'>
                <button
                    onClick={updateTaskHandler}
                    className={`check-box w-6 h-6 ${isCompleted ? 'p-0' : 'p-[1px]'} flex items-center justify-center rounded-full border-[1px] border-very-light-grayish-blue bg-very-light-gray
                        hover:border-none hover:bg-gradient-to-br hover:from-check-background-from hover:to-check-background-to`}>
                    <div className={`h-full w-full rounded-full ${isCompleted ? 'bg-gradient-to-br from-check-background-from to-check-background-to' : 'bg-very-light-gray'} flex items-center justify-center`}>
                        {
                            isCompleted
                                ? <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                                    <path fill="none" stroke="hsl(235, 19%, 35%)" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
                                </svg>
                                : null
                        }

                    </div>
                </button>
                <p
                    onClick={updateTaskHandler}
                    className={`py-1 px-2 text-very-dark-grayish-blue-light capitalize text-lg ${isCompleted ? 'line-through' : null} cursor-pointer `}> {text} </p>
            </div>
            <button
                onClick={deleteTaskHandler}
                className='text-3xl text-dark-grayish-blue-light hidden hover:text-very-dark-grayish-blue-light hover:transition'
            >
                <MdOutlineClose />
            </button>
        </div >
    )
}

export default Task