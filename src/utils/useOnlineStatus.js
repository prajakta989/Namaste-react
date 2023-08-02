import { useState } from "react";

const useonlineStatus = () => {
const [onlinestatus, setOnlinestatus] = useState(true);

window.addEventListener('offline', () => {
    setOnlinestatus(false)
})

window.addEventListener('online', () => {
    setOnlinestatus(true)
})

    return onlinestatus;
}

export default useonlineStatus;