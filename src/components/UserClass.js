import React from 'react';
import UserContext from '../utils/UserContext';

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2 : 2
        }
    }
    
render(){
    const {location} = this.props;
    const {count, count2}=  this.state;
    const handleCount = () => {
        this.setState({
            count: count +1,
            count2: count2 +1
        })
    }
    return(
        <div className="userCard">
        <h2>Count : {count}</h2>
        <h2>Count2 : {count2}</h2>
        <button onClick={handleCount}>Increase Count</button>
        <h3>Prajakta Naik(class)</h3>
        <h3>Location: {location}</h3>
        <h4>Contact: @prajaktanaik</h4>
        
            <UserContext.Consumer>
                {({loggedinUser}) => <h3>{loggedinUser}</h3>}
            </UserContext.Consumer>
        
    </div>   
    )
}
}

export default UserClass;