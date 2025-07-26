import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        };

    render() {
        return (
        <div>
            <h1>{this.props.name}</h1>
            <h2>This is a class component for user details.</h2>
            <p>User ID: </p>
            <p>User Name: </p>
        </div>
    );
    }
};

export default UserClass;