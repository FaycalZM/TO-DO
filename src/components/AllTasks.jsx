import React, { useState } from 'react'
import Task from './Task'
import NoItemsFound from '../components/NoItemsFound'
import { useSelector, useDispatch } from 'react-redux'
import { updateAllTasks } from '../features/todos/todosSlice'

const AllTasks = () => {

  const dispatch = useDispatch();
  const allTasks = useSelector(state => state.todos.allTasks);

  // 'reordering tasks' functionality using HTML drag&drop API

  const [draggedItemIndex, setDraggedItemIndex] = useState();
  const [draggedOverItemIndex, setDraggedOverItemIndex] = useState();

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  }

  const handleDrop = () => {
    let _allTasks = [...allTasks];
    let draggedItem = _allTasks.splice(draggedItemIndex, 1)[0];
    _allTasks.splice(draggedOverItemIndex, 0, draggedItem);
    dispatch(updateAllTasks({ allTasks: _allTasks }));
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