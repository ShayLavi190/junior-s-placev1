import React from 'react'
import './Part1r.css'
import Navbar from '../../../components/Navbar/Navbar'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import e5 from './e5.png'
import e6 from './e6.png'
import e7 from './e7.png'
function Part1r() {
  return (
      <div>
      <body>
        <Navbar />
        <div class="sidenav sticky-to">
        <a href="/react/part1">Basics part 1</a>
        <a href="/react/part2">Basics part 2</a>
        <a href="/react/hooks">Hooks</a>
        <a href="/react/redux">Redux</a>
        <a href="/react/axios">Axios</a>
        <a href="/react/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-block">
                <h2>Create React App</h2>
                <p>To learn and test React, you should set up a React Environment on your computer. The create-react-app tool is an officially supported way to create React applications. Node.js is required to use create-react-app. Open your terminal in the directory you would like to create your application. Run this command to create a React application named my-react-app:</p>
                <p><b>npx create-react-app my-react-app</b></p>
                <h2>What You Should Already Know</h2>
                <p>Before starting with React.JS, you should have intermediate experience in:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <h2>What is React?</h2>
                <p>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook. React is a tool for building UI components.</p>
                <h2>How does React Work?</h2>
                <p> Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React finds out what changes have been made, and changes only what needs to be changed.</p>
                <h2>React Getting Started</h2>
                <p>To get an overview of what React is, you can write React code directly in HTML. But in order to use React in production, you need npm and Node.js installed.</p>
                <p>React support on ES6 JavaScript. ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015. </p>
                <p><b>React uses ES6, and you should be familiar with some of the new features like:</b></p>
                <ul>
                    <li>Classes</li>
                    <li>Arrow Functions</li>
                    <li>Variables (let, const, var)</li>
                    <li>Array Methods like .map()</li>
                    <li>Destructuring</li>
                    <li>Modules</li>
                    <li>Ternary Operator</li>
                    <li>Spread Operator</li>
                </ul>
                <h2>React Render HTML</h2>
                <p>React's goal is in many ways to render HTML in a web page. React renders HTML to the web page by using a function called createRoot() and its method render().</p>
                <h2>The createRoot Function</h2>
                <p>The createRoot() function takes one argument, an HTML element. The purpose of the function is to define the HTML element where a React component should be displayed.</p>
                <h2>The render Method</h2>
                <p>The render() method is then called to define the React component that should be rendered.</p>
                <p>But render where?</p>
                <p> There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file. You'll notice a single &lt;div&gt; in the body of this file. This is where our React application will be rendered.</p>
                <h2>The HTML Code</h2>
                <p>The HTML code uses JSX which allows you to write HTML tags inside the JavaScript code:</p>
                <img className = 'images3' src= {e1}/>
                <h2>The Root Node</h2>
                <p>The root node is the HTML element where you want to display the result. It is like a container for content managed by React. It does NOT have to be a &lt;div&gt; element and it does NOT have to have the id='root'.</p>
                <h2>What is JSX?</h2>
                <p>JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.</p>
                <h2>Coding JSX</h2>
                <p>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods. JSX converts HTML tags into react elements. You are not required to use JSX, but JSX makes it easier to write React applications.</p>
                <h2>Expressions in JSX</h2>
                <p>With JSX you can write expressions inside curly braces { }. The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:</p>
                <p><b>const myElement = &lt;h1&gt;React is &123;5 + 5&125; times better with JSX&lt;/h1&gt;;</b></p>
                <p>To write HTML on multiple lines, put the HTML inside parentheses. The HTML code must be wrapped in ONE top level element. So if you like to write two paragraphs, you must put them inside a parent element, like a div element. Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM. A fragment looks like an empty HTML tag: &lt;&gt;&lt;/&gt;.</p>
                <p>The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX. JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.</p>
                <h2>Conditions - if statements</h2>
                <p>React supports if statements, but not inside JSX. To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:</p>
                <p><b>Option 1:</b></p>
                <p>Write if statements outside of the JSX code:</p>
                <img className = 'images3' src= {e2}/>
                <p><b>Option 2:</b></p>
                <p>Use ternary expressions instead:</p>
                <img className = 'images3' src= {e3}/>
                <h2>React Components</h2>
                <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>
                <p>When creating a React component, the component's name MUST start with an upper case letter.</p>
                <ul>
                    <li><b>Class Component </b>- A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions. The component also requires a render() method, this method returns HTML.</li>
                    <img className = 'images3' src= {e4}/>
                    <li><b>Function Component </b>- Here is the same example as above, but created using a Function component instead. A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand.</li>
                </ul>
                <p>To use this component in your application, use similar syntax as normal HTML: &lt;Component /&gt;</p>
                <p>Components can be passed as props, which stands for properties. Props are like function arguments, and you send them into the component as attributes.</p>
                <img className = 'images3' src= {e5}/>
                <h2>Class Components</h2>
                <p>Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less". With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a Class component in React. Even though Function components are preferred, there are no current plans on removing Class components from React. This section will give you an overview of how to use Class components in React.</p>
                <p>When creating a React component, the component's name must start with an upper case letter. The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions. The component also requires a render() method, this method returns HTML.</p>
                <p>If there is a constructor() function in your component, this function will be called when the component gets initiated. The constructor function is where you initiate the component's properties. In React, component properties should be kept in an object called state. The constructor function is also where you honor the inheritance of the parent component by including the super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).</p>
                <img className = 'images3' src= {e6}/>
                <p>Another way of handling component properties is by using props. Props are like function arguments, and you send them into the component as attributes. If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.</p>
                <h2>React Class Component State</h2>
                <p>React Class components have a built-in state object. You might have noticed that we used state earlier in the component constructor section. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.</p>
                <h2>Using the state Object</h2>
                <p>Refer to the state object anywhere in the component by using the this.state.propertyname syntax:</p>
                <img className = 'images3' src= {e7}/>
                <p>To change a value in the state object, use the this.setState() method. When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).</p>
                <h2>Lifecycle of Components</h2>
                <p>Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.</p>
                <h2>Mounting</h2>
                <p>Mounting means putting elements into the DOM. React has four built-in methods that gets called, in this order, when mounting a component:</p>
                <ul>
                    <li>constructor() - The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.</li>
                    <li>getDerivedStateFromProps() - The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.</li>
                    <li>render() - The render() method is required, and is the method that actually outputs the HTML to the DOM.</li>
                    <li>componentDidMount() - The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.</li>
                </ul>
                <p>The render() method is required and will always be called, the others are optional and will be called if you define them.</p>
                <h2>Updating</h2>
                <p>The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component's state or props. React has five built-in methods that gets called, in this order, when a component is updated:</p>
                <ul>
                    <li>getDerivedStateFromProps() - Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated. This is still the natural place to set the state object based on the initial props.</li>
                    <li>shouldComponentUpdate() - In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true.</li>
                    <li>render() - The render() method is required, and is the method that actually outputs the HTML to the DOM.</li>
                    <li>getSnapshotBeforeUpdate() - In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.</li>
                    <li>componentDidUpdate() - The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.</li>
                </ul>
                <h2>Unmounting</h2>
                <p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it. React has only one built-in method that gets called when a component is unmounted:</p>
                <ul>
                    <li>componentWillUnmount() - The componentWillUnmount method is called when the component is about to be removed from the DOM.</li>
                </ul>
            </div>
        </div>
      <footer class="py-3 bg-dark fixed-bottom">
          <div class="container px-4 px-lg-5"><p class="m-0 text-center text-white">Copyright &copy; shay lavi 2023</p></div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
  </body>
  </div>
  )
}

export default Part1r
