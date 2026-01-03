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

                            <label htmlFor="title" className="form-label text-white">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="form-control mb-3"
                                value={editingMovie.title}
                                onChange={e => setEditingMovie({ ...editingMovie, title: e.target.value })} />

                            <label htmlFor="director" className="form-label text-white">Director</label>
                            <input
                                type="text"
                                name="director"
                                id="director"
                                className="form-control mb-3"
                                value={editingMovie.director}
                                onChange={e => setEditingMovie({ ...editingMovie, director: e.target.value })} />

                            <label htmlFor="genre" className="form-label text-white">Genre</label>
                            <input
                                type="text"
                                name="genre"
                                id="genre"
                                className="form-control mb-3"
                                value={editingMovie.genre}
                                onChange={e => setEditingMovie({ ...editingMovie, genre: e.target.value })} />

                            <label htmlFor="release_year" className="form-label text-white">Release year</label>
                            <input
                                type="number"
                                name="release_year"
                                id="release_year"
                                className="form-control mb-3"
                                value={editingMovie.release_year}
                                onChange={e => setEditingMovie({ ...editingMovie, release_year: e.target.value })} />

                            <label htmlFor="abstract" className="form-label text-white">Abstract</label>
                            <textarea
                                name="abstract"
                                id="abstract"
                                className="form-control mb-3"
                                rows={2}
                                style={{ resize: "none" }}
                                value={editingMovie.abstract}
                                onChange={e => setEditingMovie({ ...editingMovie, abstract: e.target.value })} />

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
            </section >
        </>
    )
}