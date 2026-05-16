import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MealDetails from './pages/MealDetails'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/meal/:id' element={<MealDetails />} />
    </Routes>
    </>
  )
}

export default App
