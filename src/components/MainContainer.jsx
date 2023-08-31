import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import AllTasks from './AllTasks'
import Active from './Active'
import Completed from './Completed'
import { useTasksContext } from '../context/TasksProvider'
import AddTaskForm from './AddTaskForm'
import Header from './Header'



const MainContainer = () => {

  const { active, dispatch } = useTasksContext();

  return (
    <div className='min-h-[70vh] desktop:w-[35%] tablet:w-[60%] w-[85%] absolute top-[10%] left-1/2 -translate-x-1/2'>

      <Header />
      <AddTaskForm />

      <div className='tasks-list py-1 bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded-md'>

        <Routes>
          <Route path='/' element={<AllTasks />} />
          <Route path='/active' element={<Active />} />
          <Route path='/completed' element={<Completed />} />
          <Route path='*' />
        </Routes>

        <div className='flex px-6 py-4 w-full justify-between text-[.9rem] capitalize'>
          <p className='text-dark-grayish-blue-light'>{active.length} itmes left</p>

          <nav className='tablet:flex hidden gap-4 '>
            <NavLink
              to='/'
              exact='true'
              activeclassname='active'
              className='text-dark-grayish-blue-light dark:hover:text-very-light-grayish-blue font-bold'
            >all</NavLink>
            <NavLink
              to='/active'
              exact='true'
              activeclassname='active'
              className='text-dark-grayish-blue-light dark:hover:text-very-light-grayish-blue  font-bold'
            >active</NavLink>
            <NavLink
              to='/completed'
              exact='true'
              activeclassname='active'
              className='text-dark-grayish-blue-light dark:hover:text-very-light-grayish-blue font-bold'
            >completed</NavLink>
          </nav>

          <button
            className='text-dark-grayish-blue-light hover:text-very-dark-grayish-blue-light
               dark:text-dark-grayish-blue-dark dark:hover:text-very-light-grayish-blue capitalize  transition'
            onClick={() => {
              dispatch({
                type: 'cleared_completed'
              });
            }}
          >clear completed</button>
        </div>
      </div>

      <nav className='tablet:hidden flex gap-4 w-full justify-center px-6 py-4 mt-8 rounded-md bg-[rgba(255,255,255,.6)] dark:bg-very-dark-desaturated-blue'>
        <NavLink
          to='/'
          exact='true'
          activeclassname='active'
          className='text-dark-grayish-blue-light font-bold'
        >all</NavLink>
        <NavLink
          to='/active'
          exact='true'
          activeclassname='active'
          className='text-dark-grayish-blue-light font-bold'
        >active</NavLink>
        <NavLink
          to='/completed'
          exact='true'
          activeclassname='active'
          className='text-dark-grayish-blue-light font-bold'
        >completed</NavLink>
      </nav>


      <p className='text-center text-sm py-12 text-dark-grayish-blue-light dark:text-dark-grayish-blue-dark capitalize desktop:block hidden'>drag and drop to reorder tasks</p>

    </div>
  )
}

export default MainContainer