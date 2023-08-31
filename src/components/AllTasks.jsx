import React, { useState } from 'react'
import Task from './Task'
import { useTasksContext } from '../context/TasksProvider'
import NoItemsFound from '../components/NoItemsFound'

const AllTasks = () => {

  const { allTasks, setAllTasks } = useTasksContext();

  // 'reordering tasks' functionality using HTML drag&drop API

  const [draggedItemIndex, setDraggedItemIndex] = useState();
  const [draggedOverItemIndex, setDraggedOverItemIndex] = useState();

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  }

  const handleDrop = () => {
    let draggedItem = allTasks.splice(draggedItemIndex, 1)[0];
    console.log(allTasks);
    console.log(draggedItem);
    allTasks.splice(draggedOverItemIndex, 0, draggedItem);
    console.log(allTasks);
    setAllTasks(allTasks);
  }

  const handleDragEnter = (index) => {
    setDraggedOverItemIndex(index);
  }


  const handleDragEnd = () => {
    setDraggedItemIndex(null);
    setDraggedOverItemIndex(null);
  }


  return (
    <>
      {
        (allTasks.length > 0)
          ? allTasks.map((task, index) => {
            return <Task
              key={index}
              text={task.text}
              isCompleted={task.isCompleted}
              id={task.id}
              index={index}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
              handleDragEnter={handleDragEnter}
              handleDragEnd={handleDragEnd}
            />
          })
          : <NoItemsFound />
      }
    </>

  )
}

export default AllTasks