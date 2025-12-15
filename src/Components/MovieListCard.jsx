import { Link, NavLink, useNavigate } from "react-router-dom"

export default function MovieListCard({ movie }) {

    const navigate = useNavigate()


    return (
        <>
            <div className="col">

                <div className="card h-100">

                    <img src={`../../public/uploads/${movie.image}`} className="card-img-top h-75" alt={movie.title} />

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