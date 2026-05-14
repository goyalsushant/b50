export default function ExpensiveComponent({ action }) {

    console.log('Expensive Component Rendered')

    return (
        <button onClick={action}>Click Me!!</button>
    )
}