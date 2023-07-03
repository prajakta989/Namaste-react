import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            {/* <User location="Goa"/> */}
            <UserClass location="India"/>
        </div>
    )
}

export default About;