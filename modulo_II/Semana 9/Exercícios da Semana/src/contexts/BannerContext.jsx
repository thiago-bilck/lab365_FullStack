import { createContext, useState } from "react";


export const BannerContext = createContext()

export const BannerProvider = ({ children }) => {
    const [banner, setBanner] = useState({
        title:'',
        subtitle:''
    })

    return <BannerContext.Provider value={[banner, setBanner]}>{children}</BannerContext.Provider>
}