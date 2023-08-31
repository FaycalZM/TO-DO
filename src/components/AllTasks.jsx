import React from 'react'
import Task from './Task'
import { useTasksContext } from '../context/TasksProvider'
import NoItemsFound from '../components/NoItemsFound'

const AllTasks = () => {

  const { allTasks, setAllTasks } = useTasksContext();
  return (
    <>
      {
        (allTasks.length > 0)
          ? allTasks.map((task, index) => {
            return <Task
              key={index}
              text={task.text}
              isCompleted={task.isCompleted}
              id={task.id} />
          })
          : <NoItemsFound />
      }
    </>

  )
}

export default AllTasks