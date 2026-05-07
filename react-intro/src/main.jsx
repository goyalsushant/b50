import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Introduction from './Introduction.jsx'
import PropsExample from './Props.jsx'
import ExampleOne from './ExampleOne.jsx'
import ExampleTwo from './ExampleTwo.jsx'
import ExampleThree from './ExampleThree.jsx'

const theme = 'dark'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Introduction /> */}
    {/* <PropsExample /> */}
    {/* <ExampleOne /> */}
    {/* <ExampleTwo data={'Some Data from Main Component'}/> */}
    <ExampleThree mode={theme}/>
  </StrictMode>,
)
