import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import AllTasks from './AllTasks'
import Active from './Active'
import Completed from './Completed'
import { useTasksContext } from '../context/TasksProvider'
import AddTaskForm from './AddTaskForm'
import Header from './Header'
import NavBar from './NavBar'


const MainContainer = () => {

  const { active, dispatch } = useTasksContext();

  return (
    <div className='min-h-[70vh] desktop:w-[35%] tablet:w-[60%] w-[85%] absolute top-[10%] left-1/2 -translate-x-1/2'>

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

          <nav className='tablet:flex hidden gap-4 '>
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

          <button
            className='text-dark-grayish-blue-light hover:text-very-dark-grayish-blue-light transition'
            onClick={() => {
              dispatch({
                type: 'cleared_completed'
              });
            }}
          >clear completed</button>
        </div>
      </div>

      <nav className='tablet:hidden flex gap-4 w-full justify-center px-6 py-4 mt-8 bg-[rgba(255,255,255,.6)]'>
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


      <p className='text-center py-12 text-dark-grayish-blue-light capitalize desktop:block hidden'>drag and drop to reorder tasks</p>

    </div>
  )
}

export default MainContainer