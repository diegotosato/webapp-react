import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import MovieDetailCard from "../Components/MovieDetailCard"
import ReviewCard from "../Components/ReviewCard"
import ReviewForm from "../Components/ReviewForm"

import { useCustom } from "../contexts/CustomContexts"

export default function MovieDetailPage() {

    const { setLoading } = useCustom()

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
                <div className="container ">

                    <button className="btn btn-primary py-2 px-4 mb-2" onClick={() => (navigate('/'))}>Back</button>
                    <MovieDetailCard movie={movie} />
                </div>

                <hr className="my-5" />

                <div className="container ">
                    <h3 className="mb-3">Reviews</h3>

                    <div className="reviews">
                        {
                            reviews.map(review => (
                                <ReviewCard review={review} key={review.id} />
                            ))
                        }

                    </div>

                </div>

                <hr className="my-5" />

                <div className="container">

                    <h3 className="mb-3">Leave your review</h3>

                    <ReviewForm reviews={reviews} setReviews={setReviews} movieID={id} />

                </div>

            </main>
        </>
    )
}