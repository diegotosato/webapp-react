import axios from "axios"
import { useState, useEffect } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"

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

    const navigate = useNavigate()


    return (
        <>
            <main>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                        {
                            movies.map(movie => (
                                <div className="col" key={movie.id}>
                                    <div className="card">
                                        <img src={`https://placehold.co/200x200?text=${movie.title}`} className="card-img-top" alt={movie.title} />
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.title}</h5>
                                            <p className="card-text">{movie.abstract}</p>
                                            <p className="card-text">Director: {movie.director}</p>
                                            <p className="card-text">Genre: {movie.genre}</p>
                                            <p className="card-text">Release Year: {movie.release_year}</p>

                                            <button className="btn btn-primary" onClick={() => (
                                                navigate(`/details/${movie.id}`)
                                            )}>Go to details</button>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </main >
        </>
    )
}