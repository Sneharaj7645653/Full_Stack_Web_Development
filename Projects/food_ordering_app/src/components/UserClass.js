import React from "react";

class UserClass extends React.Component {

    constructor(propss) {
        super(propss);
        console.log(propss);
        this.state = {
            count1 : 1,
            count2 : 2
        };
        
        };



    componentDidMount() {
        console.log("Component mounted");
    }
    render() {
        const {name, location} = this.props;
        const {count1, count2} = this.state;
        return (
        <div>
            <h1>Details</h1>
            <h2>This is a class component for user details.</h2>
            <p>User ID: {count1}</p>
            <button onClick={()=>{
                this.setState({count1: count1 + 1});
            }}>Click</button>
            <p>User Name: {name}</p>
        </div>
    );
    }
};

export default UserClass;