import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import MovieDetailCard from "../Components/MovieDetailCard"
import ReviewCard from "../Components/ReviewCard"

export default function MovieDetailPage() {

    const { id } = useParams()
    const navigate = useNavigate()

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

                    <div className="d-flex align-items-start gap-3">
                        <MovieDetailCard movie={movie} />
                        <button className="btn btn-primary p-3" onClick={() => (navigate(-1))}>Back</button>
                    </div>
                </div>

                <hr className="my-5" />

                <div className="container ">
                    <h3 className="mb-3">Reviews</h3>

                    <div className="reviews row">
                        {
                            reviews.map(review => (
                                <ReviewCard review={review} />
                            ))
                        }

                    </div>

                </div>

            </main>
        </>
    )
}