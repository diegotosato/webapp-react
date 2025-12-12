export default function ReviewCard({ review }) {

    function printStars(vote) {
        let stars = []
        for (let i = 0; i < vote; i++) {
            stars.push(<i className="bi bi-star-fill" key={i}></i>)
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<i className="bi bi-star" key={i}></i>)

        }
        return stars
    }

    return (
        <>
            <div className={`card ${review.vote > 3 ? 'border-success' : 'border-warning'} mb-4`}>
                <div className={`card-header ${review.vote > 3 ? 'text-bg-success' : 'text-bg-warning'}`}>{review.name}</div>
                <div className='card-body'>
                    <p className="card-text">Vote: {printStars(review.vote)}</p>
                    <p className="card-text">{review.text}</p>
                </div>
            </div>
        </>
    )
}