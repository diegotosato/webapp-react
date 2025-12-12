import axios from "axios"
import { useState, useEffect } from "react"
import AdminTable from "../Components/Admin/AdminTable"

export default function AdminDevPage() {

    //empty array to inglobe movies from DB
    const [movies, setMovies] = useState([])

    //ajax request at component charge
    useEffect(() => {
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                setMovies(response.data)
            }).catch(err => {
                console.log(err.message);
            })
    }, [])



    return (
        <>
            <main className="bg-secondary py-5">

                <div className="container">

                    <AdminTable movies={movies} />

                    <form className="px-5 py-4 bg-dark text-white">

                        <div className="fomr-top row mb-3">
                            <div className="col-6">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" name="title" id="title" />
                            </div>

                            <div className="col-6">
                                <label htmlFor="formFile" className="form-label">Image</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                        </div>

                        <div className="form-bottom row row-cols-3">
                            <div className="col">
                                <label htmlFor="director" className="form-label">Director</label>
                                <input type="text" className="form-control" name="director" id="director" />
                            </div>

                            <div className="col">
                                <label htmlFor="genre" className="form-label">Genre</label>
                                <input type="text" className="form-control" name="genre" id="genre" />
                            </div>

                            <div className="col">
                                <label htmlFor="release-year" className="form-label">Release Year</label>
                                <input type="number" className="form-control" name="release-year" id="release-year" />
                            </div>

                        </div>

                        <button className="btn btn-primary mt-4"><i className="bi bi-save"></i>Save</button>

                    </form>

                </div>

            </main >
        </>
    )
}