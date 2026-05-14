import { useLocation, useParams, useSearchParams } from "react-router-dom"

function About() {

    const { slug } = useParams()

    const location = useLocation()

    const [params, setParams] = useSearchParams()


    // console.log(location)
    console.log(params)
    console.log(params.get('type'))
    console.log(params.get('year'))

    return (
        <>
            Welcome to the React Routing (About Page {slug ? `: ${slug}` : ''})
        </>
    )
}

export default About