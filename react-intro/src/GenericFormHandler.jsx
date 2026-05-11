import { useState } from "react"

function SingleFormHandler() {

    const [form, setForm] = useState({
        email: '',
        firstName: '',
        lastName: '',
        dob: '',
        accepted: false,
        password: '',
        gender: '',
        country: 'india'
    })

    const handleChange = (e) => {
        console.log(e)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={form.email} onChange={handleChange} name="email" /> <br />
            <input type="text" value={form.firstName} onChange={handleChange} name="firstName" /><br />
            <input type="text" value={form.lastName} onChange={handleChange} name="lastName" /><br />
            <input type="date" value={form.dob} onChange={handleChange} name="dob" /><br />
            <input type="password" value={form.password} onChange={handleChange} name="password"/><br />
            <select value={form.country} onChange={handleChange}>
                <option value={'india'}>India</option>
                <option value={'usa'}>USA</option>
                <option value={'china'}>China</option>
            </select>
            <br />
            <input type="radio" value={'male'} checked={form.gender == 'male'} onChange={handleChange} name="gender"/>Male<br />
            <input type="radio" value={'female'} checked={form.gender == 'female'} onChange={handleChange} name="gender" />Female<br />
            <input type="checkbox" onChange={handleChange} name="accepted" />I accept the terms and conditions<br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SingleFormHandler