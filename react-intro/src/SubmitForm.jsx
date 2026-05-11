import { useState } from "react"

function SubmitForm() {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDOB] = useState('')
    const [password, setPassword] = useState('')
    const [accepted, setAccepted] = useState(false)
    const [gender, setGender] = useState('')
    const [country, setCountry] = useState('india')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, dob, firstName, lastName, password, accepted, gender, country)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br />
            <input type="date" value={dob} onChange={(e) => setDOB(e.target.value)} /><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value={'india'}>India</option>
                <option value={'usa'}>USA</option>
                <option value={'china'}>China</option>
            </select>
            <br />
            <input type="radio" value={'male'} checked={gender == 'male'} onChange={(e) => setGender(e.target.value)} />Male<br />
            <input type="radio" value={'female'} checked={gender == 'female'} onChange={(e) => setGender(e.target.value)} />Female<br />
            <input type="checkbox" onChange={(e) => setAccepted(e.target.checked)} />I accept the terms and conditions<br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SubmitForm