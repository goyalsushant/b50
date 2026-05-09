import { useState } from "react"

function KeyExample() {

    const [arr, setArr] = useState(['A', 'B', 'C', 'D', 'E'])

    const changeArray = () => {
        setArr(['A', 'B', 'C', 'E'])
    }

    return (
        <ul>
            {
                arr.map((item, i) => (
                    <li key={i}>{item}</li>
                ))
            }

            <button onClick={changeArray}>Update Array</button>
        </ul>
    )
}

export default KeyExample