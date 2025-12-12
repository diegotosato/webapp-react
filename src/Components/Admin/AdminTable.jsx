export default function AdminTable({ movies }) {
    return (
        <>
            <div className="table-responsive">

                <table className="table table-dark table-striped align-middle"                            >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Director</th>
                            <th>Genre</th>
                            <th>Release Year</th>
                            <th className="text-center">
                                <button className="btn btn-sm btn-outline-light"><i className="bi bi-plus-circle"></i> Add film</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(movie => (

                                <tr className="" key={movie.id}>
                                    <td>{movie.title}</td>
                                    <td>
                                        <img src={`../../public/movies_cover/${movie.image}`} alt={movie.title}
                                            style={{ height: 100, overflow: "hidden" }} className="border border-white" />
                                    </td>
                                    <td>{movie.director}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.release_year}</td>
                                    <td className="text-center">
                                        <div className="d-flex justify-content-center gap-3">
                                            <button className="btn btn-sm btn-outline-warning"><i className="bi bi-pencil"></i></button>
                                            <button className="btn btn-sm btn-outline-danger"><i className="bi bi-trash3"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}