function Introduction() {
    const a = 10
    const b = 20
    function greet() {
        return 'Hello World from the function call'
    }

    const styles = {
        backgroundColor: 'coral',
        color: 'white',
        fontSize: '20px'
    }
    return (
        <>
            <div className='' id="" style={styles}>Hello World</div>
            {
                // greet()
                (a == 10) ? <div>Value of a is 10</div> : <div>Value of a is not 10</div>
            }
        </>
    )
}

export default Introduction
