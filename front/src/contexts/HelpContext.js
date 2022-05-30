import React, {useState} from "react"

export const HelpContext = React.createContext()

export const HelpProvider =  ({children}) => {
    const [idSeller, setIdSeller] = useState()
    const [idVehicle, setIdVehicle] = useState()


    return(
        <HelpContext.Provider value={{ idSeller, setIdSeller, idVehicle, setIdVehicle }}>
            {children}
        </HelpContext.Provider>
    )
}