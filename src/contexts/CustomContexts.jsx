import { createContext, useContext, useState } from "react"

const CustomContext = createContext()

function CustomProvider({ children }) {


    const [loading, setLoading] = useState(false)

    return (
        <CustomContext.Provider value={{ loading, setLoading }}>
            {children}
        </CustomContext.Provider >
    )
}

function useCustom() {
    return useContext(CustomContext)
}

export { CustomProvider, useCustom }