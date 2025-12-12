import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {

    const navigate = useNavigate()

    return (
        <>
            <div className="viewport vh-100 d-flex align-items-center">
                <div className="container text-center">
                    <h1 className="display-1">4 <i className="bi bi-exclamation-octagon-fill text-danger"> </i>4</h1>
                    <h3 className="text-primary">Oops! You're lost</h3>
                    <p className="text-primary">The page you are looking for was not found</p>
                    <button className="btn btn-outline-primary" onClick={() => (navigate('/'))}>Back to Home</button>
                </div>
            </div>
        </>
    )
}