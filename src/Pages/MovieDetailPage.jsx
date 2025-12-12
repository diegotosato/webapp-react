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

                    <MovieDetailCard movie={movie} />

                    <button className="btn btn-primary my-5" onClick={() => (navigate(-1))}>Go back</button>

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