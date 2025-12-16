import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function AdminAddMovieForm({ setMovies, setShow }) {

    const initialFormData = {
        title: "",
        director: "",
        genre: "",
        release_year: "",
        abstract: "",
        image: null
    }

    const [formData, setFormData] = useState(initialFormData)

    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault()

        const currentYear = new Date().getFullYear()
        const formPayload = new FormData()

        formPayload.append("title", formData.title)
        formPayload.append("director", formData.director)
        formPayload.append("genre", formData.genre)
        formPayload.append("release_year", formData.release_year || currentYear)
        formPayload.append("abstract", formData.abstract)

        if (formData.image) {
            formPayload.append("image", formData.image)
        }


        axios.post("http://localhost:3000/api/movies", formPayload, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            console.log(res);

            setMovies(prev => [...prev, res.data])
            setFormData(initialFormData)
            navigate('/admin/dev')
            setShow(false)

        }).catch(err => {
            console.log(err);
        })
    }


    function handleClose() {
        setShow(false)
    }



    return (
        <>
            <form className="px-5 py-4 bg-dark text-white mb-5" onSubmit={handleSubmit} encType="multipart/form-data">

                <div className="fomr-top row row-cols-3 mb-3">
                    <div className="col">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />

                    </div>

                    <div className="col">
                        <label htmlFor="formFile" className="form-label">Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="formFile"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="director" className="form-label">Director</label>
                        <input
                            type="text"
                            className="form-control"
                            name="director"
                            id="director"
                            value={formData.director}
                            onChange={(e) => setFormData({ ...formData, director: e.target.value })}
                        />
                    </div>
                </div>

                <div className="form-middle row mb-3">

                    <div>
                        <label htmlFor="abstract" className="form-label">Abstract</label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="abstract"
                            id="abstract"
                            rows={2}
                            style={{ resize: "none" }}
                            value={formData.abstract}
                            onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                        />
                    </div>

                </div>

                <div className="form-bottom row row-cols-2">

                    <div className="col">
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="genre"
                            id="genre"
                            value={formData.genre}
                            onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="release-year" className="form-label">Release Year</label>
                        <input
                            type="number"
                            className="form-control"
                            name="release-year"
                            id="release-year"
                            onChange={(e) => setFormData({ ...formData, release_year: e.target.value })}
                        />
                    </div>

                </div>
                <div className="buttons d-flex justify-content-between">
                    <button className="btn btn-primary mt-4"><i className="bi bi-save"></i> Save</button>
                    <button className="btn btn-danger mt-4" onClick={handleClose}><i className="bi bi-x-lg"></i> Close</button>
                </div>
            </form>
        </>
    )
}