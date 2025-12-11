import axios from "axios"
import { useState, useEffect } from "react"

export default function HomePage() {

    //empty array to inglobe movies from DB
    const [movies, setMovies] = useState([])

    //ajax request at component charge
    useEffect(() => {
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                setMovies(response)
            }).catch(err => {
                console.log(err.message);
            })
    }, [])


    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">

                                <img src="..." className="card-img-top" alt="movie_img" />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}