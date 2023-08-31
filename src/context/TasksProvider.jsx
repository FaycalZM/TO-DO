/* eslint-disable react-refresh/only-export-components */
import React, { useContext, createContext, useState, useEffect, useReducer } from 'react';
import TasksReducer from '../TasksReducer';


const TasksContext = createContext();


export const useTasksContext = () => useContext(TasksContext);

const TasksProvider = ({ children }) => {

    const [allTasks, dispatch] = useReducer(TasksReducer, initialTasks);
    const [active, setActive] = useState(initialTasks.filter(task => !task.isCompleted));
    const [completed, setCompleted] = useState(initialTasks.filter(task => task.isCompleted));
    const [nextId, setNextId] = useState(4);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    const toggleDarkMode = () => {
        setDarkModeEnabled(prevstate => !prevstate);
    }

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
                nextId,
                darkModeEnabled,
                dispatch,
                setActive,
                setCompleted,
                setNextId,
                toggleDarkMode
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
        text: 'workout',
        isCompleted: false
    },
    {
        id: 3,
        text: 'sleep',
        isCompleted: false
    },

]

