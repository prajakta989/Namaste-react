import { useState } from "react";

const User = ({location}) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return(
        <div className="userCard">
            <h2>Count = {count}</h2>
            <h2>Count2 = {count2}</h2>
            <h3>Prajakta Naik</h3>
            <h3>Location: {location}</h3>
            <h4>Contact: @prajaktanaik</h4>
        </div>
    )
}

export default User;