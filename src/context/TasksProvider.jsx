/* eslint-disable react-refresh/only-export-components */
import React, { useContext, createContext, useState, useEffect } from 'react'

const TasksContext = createContext();


export const useTasksContext = () => useContext(TasksContext);

const TasksProvider = ({ children }) => {

    const [allTasks, setAllTasks] = useState(initialTasks);
    const [active, setActive] = useState(initialTasks.filter(task => !task.isCompleted));
    const [completed, setCompleted] = useState(initialTasks.filter(task => task.isCompleted));
    const [nextId, setNextId] = useState(3);

    useEffect(
        () => {
            setActive(allTasks.filter(task => !task.isCompleted));
            setCompleted(allTasks.filter(task => task.isCompleted));
        }, [allTasks]
    )

    return (
        <TasksContext.Provider
            value={{
                allTasks,
                active,
                completed,
                setAllTasks,
                setActive,
                setCompleted
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}

export default TasksProvider

const initialTasks = [
    {
        id: 0,
        text: 'eat',
        isCompleted: true
    },
    {
        id: 1,
        text: 'code',
        isCompleted: false
    },
    {
        id: 2,
        text: 'sleep',
        isCompleted: false
    },
]

