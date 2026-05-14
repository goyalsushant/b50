import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import DashboardLayout from './layout/DashboardLayout'
import DashboardHome from './pages/DashboardHome'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Protected from './pages/Protected'
import { authReducer, initialState } from './auth/auth'

function App() {
  const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about/:slug' element={<About />} />
        <Route path='/dashboard' element={<Protected user={state.user}><DashboardLayout /></Protected>}>
          {/* path = /dashboard */}
          <Route index element={<DashboardHome />} />
          {/* path=/dashboard/profile */}
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login dispatch={dispatch} />} />
      </Routes>
    </>
  )
}

export default App
