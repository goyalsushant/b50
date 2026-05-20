import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './meal.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MealProvider } from './context/MealContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MealProvider>
        <App />
      </MealProvider>
    </BrowserRouter>
  </StrictMode>,
)
