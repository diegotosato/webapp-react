export default function ReviewCard({ review }) {

    function printStars(vote) {
        let stars = []
        for (let i = 0; i < vote; i++) {
            stars.push(<i class="bi bi-star-fill"></i>)
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<i class="bi bi-star"></i>)

        }
        return stars
    }

    return (
        <>
            <div className="col">
                <div className={`card ${review.vote > 3 ? 'border-success' : 'border-warning'}`} key={review.id}>
                    <div className={`card-header ${review.vote > 3 ? 'text-bg-success' : 'text-bg-warning'}`}>{review.name}</div>
                    <div className='card-body'>
                        <h5 className="card-title">Vote: {printStars(review.vote)}</h5>
                        <p className="card-text">{review.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}