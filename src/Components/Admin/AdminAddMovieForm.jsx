import { useState, useEffect } from "react"

export default function AdminAddMovieForm({ movies, setMovies, setShow }) {

    const [newMovTitle, setNewMovTitle] = useState('')
    const [newMovImage, setNewMovImage] = useState('')
    const [newMovDirector, setNewMovDirector] = useState('')
    const [newMovAbstract, setNewMovAbstract] = useState('')
    const [newMovGenre, setNewMovGenre] = useState('')
    const [newMovYear, setNewMovYear] = useState('')

    const [titleVal, setTitleVal] = useState(false)




    function handleSubmit(e) {
        e.preventDefault()

        if (newMovTitle.length === 0) {
            setTitleVal(true)
            return;
        } else {
            setTitleVal(false)
        }

        if (newMovDirector.length === 0) {
            setNewMovDirector('-')
        }

        if (newMovAbstract.length === 0) {
            setNewMovAbstract('-')
        }

        if (newMovGenre.length === 0) {
            setNewMovGenre('-')
        }

        if (newMovYear.length === 0) {
            setNewMovYear(new Date().getFullYear())
        }


        let newMovie = {
            id: movies[movies.length - 1].id + 1,
            title: newMovTitle,
            image: newMovImage,
            director: newMovDirector,
            genre: newMovGenre,
            release_year: newMovYear,
            abstract: newMovAbstract
        }

        setMovies([...movies, newMovie])
        setShow(false)


    }


    function handleClose() {
        setShow(false)
    }



    return (
        <>
            <form className="px-5 py-4 bg-dark text-white mb-5" onSubmit={e => handleSubmit(e)}>

                <div className="fomr-top row row-cols-3 mb-3">
                    <div className="col">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" id="title"
                            value={newMovTitle} onChange={e => setNewMovTitle(e.target.value)} />
                        {
                            (titleVal ? <small className="text-danger">Insert a VALID title</small> : '')
                        }
                    </div>

                    <div className="col">
                        <label htmlFor="formFile" className="form-label">Image</label>
                        <input className="form-control" type="file" id="formFile" value={newMovImage} onChange={e => setNewMovImage(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="director" className="form-label">Director</label>
                        <input type="text" className="form-control" name="director" id="director"
                            value={newMovDirector} onChange={e => setNewMovDirector(e.target.value)} />
                    </div>
                </div>

                <div className="form-middle row mb-3">

                    <div>
                        <label htmlFor="abstract" className="form-label">Abstract</label>
                        <textarea type="text" className="form-control" name="abstract" id="abstract" rows={2} style={{ resize: "none" }}
                            value={newMovAbstract} onChange={e => setNewMovAbstract(e.target.value)} />
                    </div>

                </div>

                <div className="form-bottom row row-cols-2">

                    <div className="col">
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <input type="text" className="form-control" name="genre" id="genre"
                            value={newMovGenre} onChange={e => setNewMovGenre(e.target.value)} />
                    </div>

                    <div className="col">
                        <label htmlFor="release-year" className="form-label">Release Year</label>
                        <input type="text" className="form-control" name="release-year" id="release-year"
                            value={newMovYear} onChange={e => setNewMovYear(e.target.value)} />
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