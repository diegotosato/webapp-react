export default function MovieDetailCard({ movie }) {
    return (
        <>
            <div className="card" style={{ height: 600, overflow: "hidden" }}>
                <div className="row g-0" style={{ height: "100%" }}>
                    <div className="col-md-4" style={{ height: "100%" }}>
                        <img src={`../../public/movies_cover/${movie.image}`} className="img-fluid rounded-start"
                            alt={movie.title} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="col-md-8" style={{ height: "100%" }}>
                        <div className="card-body d-flex flex-column justify-content-center gap-3 h-100 ms-5">
                            <h5 className="card-title fs-1">{movie.title}</h5>
                            <p className="card-text">{movie.abstract}</p>
                            <p className="card-text fs-5"><i class="bi bi-camera-reels"></i> Director: <strong>{movie.director}</strong></p>
                            <p className="card-text fs-5"><i class="bi bi-film"></i> Genre: <strong>{movie.genre}</strong></p>
                            <p className="card-text fs-5"><i class="bi bi-calendar"></i> Release Year: <strong>{movie.release_year}</strong></p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}