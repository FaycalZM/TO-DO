import './App.css'
import HeroSection from './components/HeroSection'
import MainContainer from './components/MainContainer'
import 'animate.css'
import { useTasksContext } from './context/TasksProvider'

function App() {

  const { darkModeEnabled } = useTasksContext();
  if (darkModeEnabled) {
    document.body.style.backgroundColor = 'hsl(235, 21%, 11%)';
  }
  else {
    document.body.style.backgroundColor = 'hsl(0,0%,98%)';
  }
  return (
    <div className={`${darkModeEnabled ? ' dark' : ''} w-full h-full`}>
      <div className='main-page w-full h-full font-Josefin-sans'>
        <HeroSection />
        <MainContainer />
      </div>
    </div>
  )
}

export default App
