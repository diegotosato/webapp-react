import { useState, useEffect } from "react"
import axios from "axios"

export default function ReviewForm({ reviews, movieID }) {

    const initialFormData = {
        name: "",
        vote: "",
        text: ""
    }

    const [formData, setFormData] = useState(initialFormData)






    return (
        <>
            <form>
                <div className="row row-cols-2">

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Your name here"
                        />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label"><strong>Rating</strong></label>
                        <select className="form-select" name="rating" id="rating"  >
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
                    <textarea className="form-control" name="review" id="review" rows="2" placeholder="Your review here..."
                        style={{ resize: "none" }} ></textarea>

                </div>

                <button type="submit" className="btn btn-primary">
                    <i className="bi bi-send"></i> Send
                </button>

            </form>
        </>
    )
}