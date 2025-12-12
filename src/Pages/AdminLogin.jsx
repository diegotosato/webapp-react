import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {

    const navigate = useNavigate()

    const [checkPass, setCheckPass] = useState(true)

    function handleClick(e) {
        e.preventDefault()
        setCheckPass(!checkPass)
    }


    const [adminUser, setAdminUser] = useState('')
    const [adminPass, setAdminPass] = useState('')
    const [reject, setReject] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        if (adminUser.length === 0 || adminUser !== 'user') {
            setAdminUser('')
            setAdminPass('')
            setReject(true)
            return;
        }

        if (adminPass.length === 0 || adminPass !== 'password') {
            setAdminUser('')
            setAdminPass('')
            setReject(true)
            return;
        }

        setAdminUser('')
        setAdminPass('')
        setReject(false)
        navigate('/admin/dev')
    }

    return (
        <>
            <div className="viewport vh-100 d-flex align-items-center bg-secondary">

                <div className="container text-white w-75">

                    <form onSubmit={e => handleSubmit(e)} className="w-25 mx-auto">

                        <div className="mb-3">
                            <label htmlFor="user" className="form-label">User</label>
                            <input type="text" className="form-control" name="user" id="user" value={adminUser} onChange={e => setAdminUser(e.target.value)} />
                        </div>

                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="mb-3 input-group">
                            <input type="text" className="form-control" name="password" id="password"
                                value={adminPass} onChange={e => setAdminPass(e.target.value)} />
                            <button className="btn btn-light" onClick={e => handleClick(e)}>
                                {
                                    checkPass ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>
                                }

                            </button>
                        </div>

                        <button type="submit" className="btn btn-dark">Log In</button>

                        {
                            (reject ? <div className="alert alert-danger mt-5" role="alert">Admin's User and/or Password wrong!</div> : '')
                        }

                    </form>

                </div>

            </div>
        </>
    )
}