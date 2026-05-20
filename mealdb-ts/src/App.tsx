import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MealDetails from './pages/MealDetails'
import HomeComponent from './pages/HomeComponent'
import SearchBar from './components/SearchBar'
import MealsDetails from './pages/MealsDetails'

function App() {
  return (
    <>
    <Navbar />
    <SearchBar />
    <Routes>
      {/* <Route path='/' element={<Home />} />
      <Route path='/meal/:id' element={<MealDetails />} /> */}
      <Route path='/' element={<HomeComponent />} />
      <Route path='/meal/:id' element={<MealsDetails />} />
    </Routes>
    </>
  )
}

export default App
