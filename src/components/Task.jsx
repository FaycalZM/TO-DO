import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask, deleteTask, filterTasks } from '../features/todos/todosSlice'

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

  const dispatch = useDispatch();
  const { darkModeEnabled } = useSelector(state => state.darkMode);


  const updateTaskHandler = () => {
    dispatch(updateTask({
      id: id,
    }))
  }

  const deleteTaskHandler = () => {
    dispatch(deleteTask({
      id: id,
    }))
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


      className='
           task flex items-start justify-between px-6 py-4 w-full border-b-[1px]
         border-b-very-light-grayish-blue bg-very-light-gray
         dark:bg-very-dark-desaturated-blue dark:border-b-very-dark-grayish-blue-dark-1
      '>
      <div className='flex items-center gap-4 p-[1px]'>
        <button
          onClick={() => {
            updateTaskHandler();
            dispatch(filterTasks());
          }}
          className={`check-box w-6 h-6 ${isCompleted ? 'p-0' : 'p-[1px]'} flex items-center justify-center rounded-full border-[1px]
               border-very-light-grayish-blue dark:border-very-dark-grayish-blue-dark-1 bg-very-light-gray dark:bg-very-dark-grayish-blue-dark-2
                hover:border-none hover:bg-gradient-to-br hover:from-check-background-from hover:to-check-background-to`}>
          <div className={`h-full w-full rounded-full
              ${isCompleted ? 'bg-gradient-to-br from-check-background-from to-check-background-to' : 'bg-very-light-gray dark:bg-very-dark-grayish-blue-dark-2'}
               flex items-center justify-center`}>
            {
              isCompleted
                ? <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path fill='none' stroke={`${darkModeEnabled ? 'hsl(0, 0%, 98%)' : 'hsl(235, 19%, 35%)'}`} strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
                </svg>
                : null
            }

          </div>
        </button>
        <p
          onClick={() => {
            updateTaskHandler();
            dispatch(filterTasks());
          }}
          className={`py-1 px-2 text-very-dark-grayish-blue-light dark:text-light-grayish-blue-dark capitalize text-lg ${isCompleted ? 'line-through' : null} cursor-pointer `}> {text} </p>
      </div>
      <button
        onClick={() => {
          deleteTaskHandler();
          dispatch(filterTasks());
        }}
        className='text-3xl text-dark-grayish-blue-light hidden hover:text-very-dark-grayish-blue-light dark:text-dark-grayish-blue-dark dark:hover:text-light-grayish-blue-dark-hover transition'
      >
        <MdOutlineClose />
      </button>
    </div >
  )
}

export default Task