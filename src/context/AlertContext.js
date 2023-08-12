import { createContext, useState } from "react"
import { toast } from 'react-toastify';

export const AlertContext = createContext()


export function AlertProvider(props) {
    const [alert, setAlert] = useState(null)

    const [open, setOpen] = useState(false)

    const showAlert = (message, type) => {
        setOpen(true)
        setAlert({ message, type })
        if (type === "error") {
            toast.warn(message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        } else if (type === "success"){
            toast.success(message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }

    const removeAlert = () => {
        setOpen(false)
        setAlert(null)
    }

    return (
        <AlertContext.Provider value={{ showAlert, alert, open, removeAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}