import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Details() {

    const movieId = useParams()
    console.log(movieId);


    //empty array to inglobe movies from DB
    const [movies, setMovies] = useState([])

    //ajax request at component charge
    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/1`)
            .then(response => {
                setMovies(response.data)
            }).catch(err => {
                console.log(err.message);
            })
    }, [])
    console.log(movies);


    return (
        <>
            <main>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">

                        <p>ID prodotto: {movieId.id}</p>

                    </div>
                </div>
            </main>
        </>
    )
}