import { useEffect, useState } from "react"

function UnmountComponent() {

    useEffect(() => {
        console.log('Mounted')

        return () => {
            console.log('Unmounted')
        }
    }, []) // componentDidMount equivalent

    return (
        <>
            Hello World
        </>
    )

}

function ParentComponent() {

    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        console.log('Mounted')

        return () => {
            console.log('Unmounted')
        }
    }, []) // componentDidMount equivalent


    useEffect(() => {
        console.log('Updated')
    }, [toggle]) //componentDidUpdate equivalent

    return (
        <>
            {
                toggle ? <UnmountComponent /> : 'Componet Unmounted'
            }

            <button onClick={() => setToggle(false)}>Click Me</button>
        </>
    )

}

export default ParentComponent