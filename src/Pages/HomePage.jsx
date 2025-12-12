import axios from "axios"
import { useState, useEffect } from "react"
import MovieListCard from "../Components/MovieListCard"

export default function HomePage() {

    //empty array to inglobe movies from DB
    const [movies, setMovies] = useState([])

    //ajax request at component charge
    useEffect(() => {
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                setMovies(response.data)
            }).catch(err => {
                console.log(err.message);
            })
    }, [])



    return (
        <>
            <main>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5">
                        {
                            movies.map(movie => (
                                <MovieListCard movie={movie} />
                            ))
                        }
                    </div>
                </div>
            </main >
        </>
    )
}