import React, { useEffect, useState } from "react";

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
                toggle ? <ClassComponent /> : 'Componet Unmounted'
            }

            <button onClick={() => setToggle(false)}>Click Me</button>
        </>
    )

}

class ClassComponent extends React.Component {

    componentDidMount() {
        subcribe() // subscribing to chat messages
        console.log('Mounted')
    }

    componentDidUpdate() {
        console.log('Updated')
    }

    componentWillUnmount() {
        unsubscribe() // unsubscribe to the chat messages
        console.log('Unmounted')
    }

    render() {
        return <h1>Hello World!</h1>;
    }
}

export default ParentComponent