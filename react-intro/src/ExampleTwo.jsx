function ExampleTwo(props) {
    return (
        <>
            <Button label="Delete" handler={() => console.log('Delete Item')} data={props.data} />
            <Button label="Save" handler={() => console.log('Save Item')} data={props.data} />
            <Button label="Create" handler={() => console.log('Create Item')} data={props.data} />
        </>
    )
}

function Button({ label, handler, data }) {
    return (
        <>
        <div>{data}</div>
        <button onClick={handler}>{label}</button>
        </>
    )
}

export default ExampleTwo