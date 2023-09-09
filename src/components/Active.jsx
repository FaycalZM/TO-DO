import React from 'react'
import Task from './Task'
import NoItemsFound from '../components/NoItemsFound'
import { useSelector } from 'react-redux';

const Active = () => {
  const active = useSelector(state => state.todos.active);
  return (
    <>
      {
        (active.length > 0)
          ? active.map((task, index) => {
            return <Task
              key={index}
              text={task.text}
              isCompleted={task.isCompleted}
              id={task.id}
              index={index}
            />
          })
          : <NoItemsFound />
      }
    </>

  )
}

export default Active