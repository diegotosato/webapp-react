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

                    <button className="btn btn-primary py-2 px-4 mb-2" onClick={() => (navigate(-1))}>Back</button>
                    <MovieDetailCard movie={movie} />
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

                <hr className="my-5" />

                <div className="container">

                    <h3 className="mb-3">Leave your review</h3>

                    <form>
                        <div className="row row-cols-2">

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" id="name" aria-describedby="nameHelper" placeholder="Your name here" />
                                <small id="nameHelper" className="form-text text-muted">Insert your name here</small>
                            </div>

                            <div className="mb-3">
                                <label for="rating" className="form-label">Rating</label>
                                <select className="form-select" name="rating" id="rating"                            >
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option selected value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                            </div>

                        </div>


                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">Review</label>
                            <textarea className="form-control" name="review" id="review" rows="2" placeholder="Your review here..." style={{ resize: "none" }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            <i class="bi bi-send"></i> Send
                        </button>

                    </form>

                </div>

            </main>
        </>
    )
}