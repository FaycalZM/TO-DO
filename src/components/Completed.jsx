import React from 'react';
import Task from './Task';
import { useTasksContext } from '../context/TasksProvider';
import NoItemsFound from '../components/NoItemsFound'

const Completed = () => {
  const { completed, setCompleted } = useTasksContext();
  return (
    <>
      {
        (completed.length > 0)
          ? completed.map((task, index) => {
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

export default Completed