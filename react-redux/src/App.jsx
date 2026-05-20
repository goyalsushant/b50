import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import Home from './components/Home'
import SearchBar from './components/SearchBar'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      {/* For Meal DB */}
      {/* <SearchBar />
      <Home /> */}

      {/* For Blog Application */}
      <div className='container'>
        <BlogForm />
        <BlogList />
      </div>
    </>
  )
}

export default App
