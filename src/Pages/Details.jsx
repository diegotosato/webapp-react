import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Details() {

    const { id } = useParams()


    //empty array to inglobe movies from DB
    const [movie, setMovie] = useState([])
    const [reviews, setReviews] = useState([])

    //ajax request at component charge
    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(response => {
                setMovie(response.data)
                setReviews(response.data.reviews)
            }).catch(err => {
                console.log(err.message);
            })
    }, [])
    console.log(reviews);


    return (
        <>
            <main>
                <div className="container ">

                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-5">
                                <img src={`https://placehold.co/200x200?text=${movie.title}`} className="img-fluid rounded-start w-100" alt={movie.title} />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.abstract}</p>
                                    <p className="card-text">Director: {movie.director}</p>
                                    <p className="card-text">Genre: {movie.genre}</p>
                                    <p className="card-text">Release Year: {movie.release_year}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reviews row">
                        {
                            reviews.map(review => (
                                <div className="col">
                                    <div className={`card ${review.vote > 3 ? 'border-success' : 'border-warning'}`} key={review.id}>
                                        <div className={`card-header ${review.vote > 3 ? 'text-bg-success' : 'text-bg-warning'}`}>{review.name}</div>
                                        <div className='card-body'>
                                            <h5 className="card-title">Vote: {review.vote}</h5>
                                            <p className="card-text">{review.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>

            </main>
        </>
    )
}