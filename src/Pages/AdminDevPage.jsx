import axios from "axios"
import { useState, useEffect } from "react"
import AdminTable from "../Components/Admin/AdminTable"
import AdminAddMovieForm from "../Components/Admin/AdminAddMovieForm"

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


    const [show, setShow] = useState(false)





    function handleAddForm() {
        setShow(true)
    }

    return (
        <>

            <div className="container">






                {
                    (show ? <AdminAddMovieForm movies={movies} setMovies={setMovies} setShow={setShow} /> : '')
                }

                <AdminTable movies={movies} handleAddForm={handleAddForm} />

            </div>

        </>
    )
}