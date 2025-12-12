import { Link, NavLink, useNavigate } from "react-router-dom"

export default function MovieListCard({ movie }) {

    const navigate = useNavigate()


    return (
        <>
            <div className="col" key={movie.id}>

                <div className="card">

                    <img src={`../../public/movies_cover/${movie.image}`} className="card-img-top" alt={movie.title} />

                    <div className="card-body">

                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.abstract}</p>

                        <button className="btn btn-primary" onClick={() => (
                            navigate(`/details/${movie.id}`)
                        )}>Go to details</button>

                    </div>

                </div>

            </div>
        </>
    )
}