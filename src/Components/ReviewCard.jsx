export default function ReviewCard({ review }) {
    return (
        <>
            <div className="col">
                <div className={`card ${review.vote > 3 ? 'border-success' : 'border-warning'}`} key={review.id}>
                    <div className={`card-header ${review.vote > 3 ? 'text-bg-success' : 'text-bg-warning'}`}>{review.name}</div>
                    <div className='card-body'>
                        <h5 className="card-title">Vote: {review.vote}</h5>
                        <p className="card-text">{review.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}