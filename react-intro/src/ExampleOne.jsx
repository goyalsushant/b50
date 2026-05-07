function ExampleOne() {
    return <Teacher />
}

function Teacher() {

    function requestEvaluation(id, grade) {
        if (grade == 'A') {
            console.log('No re-evaluation can be requested')
            return
        }
        console.log('Evaluation Requested by: ', id)
    }

    return (
        <>
            <Student id={1} name={'Alex'} grades={'A'} requestEvaluation={requestEvaluation} />
            <Student id={2} name={'John'} grades={'B'} requestEvaluation={requestEvaluation} />
            <Student id={3} name={'Jack'} grades={'B'} requestEvaluation={requestEvaluation} />
            <Student id={4} name={'Alpha'} grades={'C'} requestEvaluation={requestEvaluation} />
            <Student id={5} name={'Beta'} grades={'B'} requestEvaluation={requestEvaluation} />
            <Student id={6} name={'Gamma'} grades={'A'} requestEvaluation={requestEvaluation} />
        </>
    )
}

function Student({ id, name, grades, requestEvaluation }) {
    return (
        <div>
            {id} {name} {grades}
            <button onClick={() => requestEvaluation(id, grades)}>Request Re-Evaluation</button>
        </div>
    )
}

export default ExampleOne