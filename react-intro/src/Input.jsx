import { useState } from "react"

function Input() {
    const [name, setName] = useState()
    // the data is controlled by React

    return (
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        // displayed value is derived from the state and not from the DOM itself.
    )
}

/**
 * (e) => setName(e.target.value)
 * 
 * change event is being called
 */

export default Input