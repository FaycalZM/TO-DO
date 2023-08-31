import React from 'react'
import Task from './Task'
import { useTasksContext } from '../context/TasksProvider';
import NoItemsFound from '../components/NoItemsFound'

const Active = () => {
  const { active, setActive } = useTasksContext();
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