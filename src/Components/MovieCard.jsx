import { Link, NavLink, useNavigate } from "react-router-dom"

export default function MovieCard({ movie }) {

    const navigate = useNavigate()


    return (
        <>
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
        </>
    )
}