import axios from "axios"
import { useState, useEffect } from "react"
import AdminAddMovieForm from "../Components/Admin/AdminAddMovieForm"

export default function AdminDevPage() {

    //empty array to inglobe movies from DB
    const [movies, setMovies] = useState([])

    const [editingMovie, setEditingMovie] = useState(null)


    //ajax request at component charge
    useEffect(() => {
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                setMovies(response.data)
            }).catch(err => {
                console.log(err.message);
            })
    }, [])


    const [show, setShow] = useState(false)


    function handleAddForm() {
        setShow(true)
    }


    function handleDelete(movieId) {

        axios.delete(`http://localhost:3000/api/movies/${movieId}`)
            .then(() => {
                // update movies returning all movies not affected by my selection
                setMovies(prevMovies =>
                    prevMovies.filter(movie => movie.id !== movieId)
                )
            })
            .catch(err => {
                console.log(err.message)
            })
    }



    function handleUpdate(e) {
        e.preventDefault()

        axios.patch(`http://localhost:3000/api/movies/${editingMovie.id}`, editingMovie)
            .then(() => {
                setMovies(prev =>
                    prev.map(movie => movie.id === editingMovie.id ? editingMovie : movie)
                )
                setEditingMovie(null)
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    return (
        <>
            <section className="min-vh-100 bg-secondary py-5">
                <div className="container">

                    {editingMovie && (
                        <form className="bg-dark p-4 mb-4 rounded" onSubmit={handleUpdate}>
                            <h5 className="text-white mb-3">Edit Movie</h5>

                            <input
                                type="text"
                                className="form-control mb-2"
                                value={editingMovie.title}
                                onChange={e => setEditingMovie({ ...editingMovie, title: e.target.value })} />

                            <input
                                type="text"
                                className="form-control mb-2"
                                value={editingMovie.director}
                                onChange={e => setEditingMovie({ ...editingMovie, director: e.target.value })} />

                            <button className="btn btn-success btn-sm">Save</button>
                            <button
                                type="button"
                                className="btn btn-secondary btn-sm ms-2"
                                onClick={() => setEditingMovie(null)} >
                                Cancel
                            </button>
                        </form>
                    )}


                    {
                        (show ? <AdminAddMovieForm movies={movies} setMovies={setMovies} setShow={setShow} /> : '')
                    }

                    <div className="table-responsive">

                        <table className="table table-dark table-striped align-middle">
                            <thead className="align-middle">
                                <tr>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Director</th>
                                    <th>Genre</th>
                                    <th>Release Year</th>
                                    <th>Abstract</th>
                                    <th className="text-center">
                                        <button className="btn btn-sm btn-outline-light" onClick={handleAddForm}>
                                            <i className="bi bi-plus-circle"></i> Add
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    movies.map(movie => (

                                        <tr className="" key={movie.id}>
                                            <td>{movie.title}</td>
                                            <td>
                                                <img src={`../../public/uploads/${movie.image}`} alt={movie.title}
                                                    style={{ height: 100, overflow: "hidden" }} className="border border-white" />
                                            </td>
                                            <td>{movie.director}</td>
                                            <td>{movie.genre}</td>
                                            <td>{movie.release_year}</td>
                                            <td>{movie.abstract}</td>
                                            <td className="text-center">
                                                <div className="d-flex justify-content-center gap-3">
                                                    <button className="btn btn-sm btn-outline-warning" onClick={() => setEditingMovie(movie)}>
                                                        <i className="bi bi-pencil"></i>
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(movie.id)}>
                                                        <i className="bi bi-trash3"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            </section>
        </>
    )
}