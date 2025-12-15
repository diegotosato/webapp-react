import { useState, useEffect } from "react"
import axios from "axios"

export default function ReviewForm({ reviews, movieID }) {

    const initialFormData = {
        name: "",
        vote: "",
        text: ""
    }

    const [formData, setFormData] = useState(initialFormData)


    function handleSubmit(e) {
        e.preventDefault()

        const formPayload = new FormData()
        formPayload.append("name", formData.name)
        formPayload.append("vote", formData.vote)
        formPayload.append("text", formData.text)
        formPayload.append("movie_id", movieID)


        axios.post(`http://localhost:3000/api/movies/${movieID}/reviews`, formPayload)
            .then(res => {
                console.log(res);

                setFormData(initialFormData)

            }).catch(err => {
                console.log(err);
            })
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row row-cols-2">

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Your name here"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label"><strong>Rating</strong></label>
                        <select
                            className="form-select"
                            name="rating"
                            id="rating"
                            value={formData.vote}
                            onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                </div>


                <div className="mb-3">
                    <label htmlFor="review" className="form-label"><strong>Review</strong></label>
                    <textarea
                        className="form-control"
                        name="review"
                        id="review"
                        rows="2"
                        placeholder="Your review here..."
                        style={{ resize: "none" }}
                        value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    ></textarea>

                </div>

                <button type="submit" className="btn btn-primary">
                    <i className="bi bi-send"></i> Send
                </button>

            </form>
        </>
    )
}