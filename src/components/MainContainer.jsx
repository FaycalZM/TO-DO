import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import AllTasks from './AllTasks'
import Active from './Active'
import Completed from './Completed'
import { useTasksContext } from '../context/TasksProvider'
import AddTaskForm from './AddTaskForm'
import Header from './Header'
import NavBar from './NavBar'
import { DndContext } from '@dnd-kit/core'

const MainContainer = () => {

    const { active, allTasks, setAllTasks } = useTasksContext();

    return (
        <div className='min-h-[70vh] w-[35%] absolute top-[10%] left-1/2 -translate-x-1/2'>

            <Header />
            <AddTaskForm />

            <div className='tasks-list py-1 bg-very-light-gray rounded-md'>

                <Routes>
                    <Route path='/' element={<AllTasks />} />
                    <Route path='/active' element={<Active />} />
                    <Route path='/completed' element={<Completed />} />
                    <Route path='*' />
                </Routes>

                <div className='flex px-6 py-4 w-full justify-between text-[.9rem] capitalize'>
                    <p className='text-dark-grayish-blue-light'>{active.length} itmes left</p>
                    <NavBar />
                    <button
                        className='text-dark-grayish-blue-light hover:text-very-dark-grayish-blue-light transition'
                        onClick={() => {
                            setAllTasks(
                                allTasks.filter(task => !task.isCompleted)
                            );
                        }}
                    >clear completed</button>
                </div>
            </div>

            <p className='text-center py-12 text-dark-grayish-blue-light capitalize'>drag and drop to reorder tasks</p>

        </div>
    )
}

export default MainContainer