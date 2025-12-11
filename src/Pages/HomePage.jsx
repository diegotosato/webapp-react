import axios from "axios"
import { useState, useEffect } from "react"

export default function HomePage() {

    //empty array to inglobe movies from DB
    const [movies, setMovies] = useState([])

    //ajax request at component charge
    useEffect(() => {
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                setMovies(response)
            }).catch(err => {
                console.log(err.message);
            })
    }, [])


    return (
        <>
            <main>Main</main>
        </>
    )
}