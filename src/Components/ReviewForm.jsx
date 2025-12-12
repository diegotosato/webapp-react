import { useState, useEffect } from "react"

export default function ReviewForm({ reviews, setReviews }) {

    const [reviewerName, setReviewerName] = useState('')
    const [select, setSelect] = useState(1)
    const [textarea, setTextarea] = useState('')

    const [nameVal, setNameVal] = useState(false)
    const [textareaVal, setTextareaVal] = useState(false)


    function handleSubmit(e) {
        e.preventDefault()

        if (reviewerName.length === 0) {
            setNameVal(true)
            return;
        } else {
            setNameVal(false)
        }

        if (textarea.length === 0) {
            setTextareaVal(true)
            return;
        } else {
            setTextareaVal(false)
        }

        let newReview = {
            id: reviews[reviews.length - 1].id + 1,
            name: reviewerName,
            vote: select,
            text: textarea
        }

        setReviewerName('')
        setSelect(1)
        setTextarea('')
        setReviews([...reviews, newReview])

    }

    return (
        <>
            <form onSubmit={(e) => (handleSubmit(e))}>
                <div className="row row-cols-2">

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Your name here"
                            value={reviewerName} onChange={e => setReviewerName(e.target.value)} />
                        {
                            (nameVal ? <small className="text-danger">Leave your name!</small> : '')
                        }

                    </div>

                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label"><strong>Rating</strong></label>
                        <select className="form-select" name="rating" id="rating" value={select} onChange={e => setSelect(Number(e.target.value))} >
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
                        style={{ resize: "none" }} value={textarea} onChange={e => setTextarea(e.target.value)}></textarea>
                    {
                        (textareaVal ? <small className="text-danger">Leave a review!</small> : '')
                    }
                </div>

                <button type="submit" className="btn btn-primary">
                    <i className="bi bi-send"></i> Send
                </button>

            </form>
        </>
    )
}