import { useState } from 'react'
import './App.css'
import Introduction from './Introduction'
import ClassComponent from './ClassComponent'
import GetStarted from './GetStarted'
import TicksDiv from './TicksDiv'
import Documentation from './Docs'
import Social from './Social'
import Counter from './Counter'
import PropsExample from './Props'
import Input from './Input'
import TodoApp from './Todo'
import KeyExample from './KeyExample'

// function Greeting(props) {
//   props.name = 'Hello'
//   return (
//     // <div>
//     <div>Hello {props.name}</div>
//     // </div>
//   )
// }



function App() {
  return (
    <>
      <KeyExample />
      {/* <TodoApp /> */}
      {/* <PropsExample /> */}
      {/* <Counter /> */}
      {/* <Input /> */}
      {/* Hello World */}
      {/* <Greeting name='Alex' />
      <Greeting name='Mohit' />
      <Greeting name='Jack' /> */}
      {/* <GetStarted />
      <TicksDiv />
      <section id="next-steps">
        <Documentation />
        <Social />
      </section>
      <TicksDiv />
      <section id="spacer"></section> */}
    </>
  )
}

export default App


/**
 * function greet(name) {
 *  return 'Hello' + name
 * }
 * 
 * greet('Mohit')
 */