export default function MovieDetailCard({ movie }) {
    return (
        <>
            <div className="card">
                <div className="row">
                    <div className="col-md-5">
                        <img src={`https://placehold.co/200x200?text=${movie.title}`} className="img-fluid rounded-start w-100" alt={movie.title} />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body h-100 d-flex flex-column justify-content-center gap-4">
                            <h5 className="card-title fs-1">{movie.title}</h5>
                            <p className="card-text">{movie.abstract}</p>
                            <p className="card-text fs-5"><i class="bi bi-camera-reels"></i> Director: <strong>{movie.director}</strong></p>
                            <p className="card-text fs-5"><i class="bi bi-film"></i> Genre: <strong>{movie.genre}</strong></p>
                            <p className="card-text fs-5"><i class="bi bi-calendar"></i> Release Year: <strong>{movie.release_year}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}