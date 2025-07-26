import React from "react";

class UserClass extends React.Component {

    constructor(propss) {
        super(propss);
        this.state = {
            count1 : 0,
            count2 : 1,
            nameApi: "Loading...",
            locationApi: "Loading...",
        };
    };
    async componentDidMount() {
        const userData = await fetch("https://api.github.com/users/Sneharaj7645653");
        const user = await userData.json();
        console.log("Component mounted");
        this.setState({
            nameApi: user.name,
            locationApi: user.location,
        });
    }
    render() {
        const {name, location} = this.props;
        const {nameApi, locationApi, count1} = this.state;
        return (
        <div>
            <h1>Details</h1>
            <h2>This is a class component for user details.</h2>
            <p>User ID: {count1}</p>
            <button onClick={()=>{
                this.setState({count1: count1 + 1});
            }}>Click</button>
            <p>User Name: {nameApi}</p>
            <p>User Location: {locationApi}</p>
        </div>
    );
    }
};

export default UserClass;