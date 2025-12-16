import axios from "axios"
import { useState, useEffect } from "react"
import MovieListCard from "../Components/MovieListCard"
import Loader from "../Components/Loader"

import { useCustom } from "../contexts/CustomContexts"

export default function HomePage() {

    //import from custom context
    const { loading, setLoading } = useCustom()

    //empty array to inglobe movies from DB
    const [movies, setMovies] = useState([])

    //ajax request at component charge
    useEffect(() => {
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                setMovies(response.data)
                setLoading(true)
            }).catch(err => {
                console.log(err.message);
            }).finally(
                setLoading(false)
            )
    }, [])



    return (
        <>
            <main>
                {
                    !loading && <Loader />
                }
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5">
                        {
                            movies.map(movie => (
                                <MovieListCard movie={movie} key={movie.id} />
                            ))
                        }
                    </div>
                </div>
            </main >
        </>
    )
}