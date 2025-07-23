// import React from "react";
// import ReactDOM from "react-dom/client";
// // this code will be overwritten by the react code as we will render and change the data inside the root element which is the div
// // const heading1 = document.createElement('h1');
// // heading1.textContent = 'Welcome to React Inception, hello from JavaScript!';
// // const root1 = document.getElementById('root');
// // root.appendChild(heading1);



// //React code starts here
// const heading = React.createElement('h1', {id:"heading" , xyz:"XYZ"}, 'Hello, World! from React!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


// // heading : this is actually an object of Javascript that React creates for us.
// // the "render" method takes this object and converts it into HTML and then injects it into the DOM.
// // while passing the children, we can also pass an array of children elements.



// let parent  = React.createElement('div', {id: 'parent'}, [
//     React.createElement('h1', {id: 'heading'}, 'Hello, World! from React!'),
//     React.createElement('h2', {id: 'subheading'}, 'This is a subheading')
// ]); 

// root.render(parent);
// //this will show the elements, but there will be an error in the console.


import React from "react";
import ReactDOM from "react-dom/client";


const jsxHeading = <h1 id="heading">Hello, World! from JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);
// JSX is a syntax extension that allows us to write HTML-like code in our JavaScript files
// It is not a requirement to use JSX, but it makes writing React components easier and more readable.
// JSX is transformed into JavaScript function calls by a compiler (like Babel) before being rendered
// to the DOM. The above code is equivalent to:
// const jsxHeading = React.createElement('h1', {id: 'heading'}, 'Hello, World! from JSX!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);
// This is how React components are typically written in modern React applications.
// JSX allows us to write HTML-like syntax directly in our JavaScript code, making it easier
// to visualize the structure of our components and their relationships.
// JSX is not required, but it is widely used in React development for its readability and ease of use.


// jsxHeading = (<h1 id="heading">
//     Hello, World! from JSX!
//     </h1>);
// it can also be written in a more readable way like this, but it is not necessary.




// Functional Components:
const HeadingComponent = () => {
    return (<div>

        <h1 id="heading">Hello from Functional Component!!</h1>
        <SubHeadingComponent />
        <h3>{300+200}</h3>
        {jsxHeading}
       
    </div>   
    )
};
// or const HeadingComponent = () => <h1>Hello from Functional Component in shorter way!!</h1>

const SubHeadingComponent = () => {
    return (<div>
        <h2>Hello from SubHeadingComponent</h2>
        </div>)
};
root.render(<HeadingComponent />);


