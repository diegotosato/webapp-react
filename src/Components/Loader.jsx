import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'



export default function Loader() {
    return (
        <>

            <section className="min-vh-100 w-100 bg-dark text-white d-flex justify-content-center align-items-center bg-opacity-50 position-absolute z-3">
                <LineSpinner
                    size="50"
                    stroke="3"
                    speed="1"
                    color="white"
                />
            </section>
        </>
    )
}