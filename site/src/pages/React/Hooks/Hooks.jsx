import React from 'react'
import './Hooks.css'
import Navbar from '../../../components/Navbar/Navbar'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import e5 from './e5.png'
import e6 from './e6.png'
import e7 from './e7.png'
import e8 from './e8.png'
import e9 from './e9.png'
import e10 from './e10.png'
import e11 from './e11.png'
import e12 from './e12.png'
import e13 from './e13.png'
import e14 from './e14.png'
import e15 from './e15.png'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'

function Hooks() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
      <div>
      <body>
        {isMobile ? <NavbarMini /> : <Navbar />}
        <div class="sidenavv sticky-to" style={{width:'120px'}}>
        <a href="/react/part1">Basics part 1</a>
        <a href="/react/part2">Basics part 2</a>
        <a href="/react/hooks">Hooks</a>
        <a href="/react/redux">Redux</a>
        <a href="/react/axios">Axios</a>
        <a href="/react/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-blockjs">
              <p> Hooks were added to React in version 16.8. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
              <p>Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>
              <img className = 'imagereact' src= {e1}/>
              <p>You must import Hooks from react. Here we are using the useState Hook to keep track of the application state. State generally refers to application data or properties that need to be tracked.</p>
              <h2>Hooks rules</h2>
              <p>There are 3 rules for hooks:</p>
              <ul>
                <li>Hooks can only be called inside React function components.</li>
                <li>Hooks can only be called at the top level of a component.</li>
                <li>Hooks cannot be conditional</li>
              </ul>
              <h2>React useState Hook</h2>
              <p>The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.</p>
              <p>To use the useState Hook, we first need to import it into our component. Notice that we are destructuring useState from react as it is a named export.</p>
              <p>We initialize our state by calling useState in our function component.useState accepts an initial state and returns two values: The current state and the function that updates the state. To update our state, we use our state updater function. The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.</p>
              <img className = 'imagereact' src= {e2}/>
              <p>When state is updated, the entire state gets overwritten. What if we only want to update the color of our car? If we only called setCar(&#123;color: "blue"&#125;), this would remove the brand, model, and year from our state. We can use the JavaScript spread operator to help us.</p>
              <img className = 'imagereact' src= {e3}/>
              <h2>React useEffect Hooks</h2>
              <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. useEffect(&lt;function&gt;, &lt;dependency&gt;) Let's use a timer as an example.</p>
              <img className = 'imagereact' src= {e4}/>
              <p>But wait!! It keeps counting even though it should only count once! useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. This is not what we want. There are several ways to control when side effects run. We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.</p>
              <img className = 'imagereact' src= {e5}/>
              <h2>React useContext Hook</h2>
              <p>React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
              <p><b>The Problem</b></p>
              <p>State should be held by the highest parent component in the stack that requires access to the state. To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state. To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".</p>
              <img className = 'imagereact' src= {e6}/>
              <p><b>The Solution</b></p>
              <p>The solution is to create context.To create context, you must Import createContext and initialize it.Next we'll use the Context Provider to wrap the tree of components that need the state Context.Wrap child components in the Context Provider and supply the state value. In order to use the Context in a child component, we need to access it using the useContext Hook. First, include the useContext in the import statement:</p>
              <img className = 'imagereact' src= {e7}/>
              <h2>React useRef Hook</h2>
              <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
              <p>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.</p>
              <img className = 'imagereact' src= {e8}/>
              <p>In general, we want to let React handle all DOM manipulation. But there are some instances where useRef can be used without causing issues. In React, we can add a ref attribute to an element to access it directly in the DOM.The useRef Hook can also be used to keep track of previous state values. This is because we are able to persist useRef values between renders.</p>
              <h2>React useReducer Hook</h2>
              <p>The useReducer Hook is similar to the useState Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful. The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object. The useReducer Hook returns the current stateand a dispatchmethod. Here is an example of useReducer in a counter app:</p>
              <img className = 'imagereact' src= {e9}/>
              <h2>React useCallback Hook</h2>
              <p>The React useCallback Hook returns a memoized callback function.This allows us to isolate resource intensive functions so that they will not automatically run on every render. The useCallback Hook only runs when one of its dependencies update. This can improve performance.</p>
              <p><b>Problem</b></p>
              <p>One reason to use useCallback is to prevent a component from re-rendering unless its props have changed. In this example, you might think that the Todos component will not re-render unless the todos change:</p>
              <img className = 'imagereact' src= {e10}/>
              <p>Try running this and click the count increment button. You will notice that the Todos component re-renders even when the todos do not change. Why does this not work? We are using memo, so the Todos component should not re-render since neither the todos state nor the addTodo function are changing when the count is incremented. This is because of something called "referential equality". Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.</p>
              <p><b>Solution</b></p>
              <p>To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary. Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:</p>
              <img className = 'imagereact' src= {e11}/>
              <h2>React useMemo Hook</h2>
              <p>The React useMemo Hook returns a memoized value.The useMemo Hook only runs when one of its dependencies update. This can improve performance. The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution.</p>
              <img className = 'imagereact' src= {e12}/>
              <p>To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed. We can wrap the expensive function call with useMemo. The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed. In the following example, the expensive function will only run when count is changed and not when todo's are added.</p>
              <img className = 'imagereact' src= {e13}/>
              <h2>React Custom Hooks</h2>
              <p>Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetch.</p>
              <p>In the following code, we are fetching data in our Home component and displaying it. We will use the JSONPlaceholder service to fetch fake data. This service is great for testing applications when there is no existing data. To learn more, check out the JavaScript Fetch API section. Use the JSONPlaceholder service to fetch fake "todo" items and display the titles on the page:</p>
              <img className = 'imagereact' src= {e14}/>
              <p>The fetch logic may be needed in other components as well, so we will extract that into a custom Hook. Move the fetch logic to a new file to be used as a custom Hook:</p>
              <img className = 'imagereact' src= {e15}/>
              <p>We have created a new file called useFetch.js containing a function called useFetch which contains all of the logic needed to fetch our data. We removed the hard-coded URL and replaced it with a url variable that can be passed to the custom Hook. Lastly, we are returning our data from our Hook. In index.js, we are importing our useFetch Hook and utilizing it like any other Hook. This is where we pass in the URL to fetch data from. Now we can reuse this custom Hook in any component to fetch data from any URL.</p>
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

export default Hooks
