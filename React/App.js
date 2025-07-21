
// this code will be overwritten by the react code as we will render and change the data inside the root element which is the div
// const heading1 = document.createElement('h1');
// heading1.textContent = 'Welcome to React Inception, hello from JavaScript!';
// const root1 = document.getElementById('root');
// root.appendChild(heading1);



//React code starts here
const heading = React.createElement('h1', {id:"heading" , xyz:"XYZ"}, 'Hello, World! from React!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);


// heading : this is actually an object of Javascript that React creates for us.
// the "render" method takes this object and converts it into HTML and then injects it into the DOM.
// while passing the children, we can also pass an array of children elements.



let parent  = React.createElement('div', {id: 'parent'}, [
    React.createElement('h1', {id: 'heading'}, 'Hello, World! from React!'),
    React.createElement('h2', {id: 'subheading'}, 'This is a subheading')
]); 

root.render(parent);
//this will show the elements, but there will be an error in the console.
