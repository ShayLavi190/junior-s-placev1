import React from 'react'
import './Redux.css'
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
import e16 from './e16.png'
import e17 from './e17.png'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'

function Redux() {
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
              <p>Redux is a predictable state container for JavaScript apps. As the application grows, it becomes difficult to keep it organized and maintain data flow. Redux solves this problem by managing application’s state with a single global object called Store. Redux fundamental principles help in maintaining consistency throughout your application, which makes debugging and testing easier. More importantly, it gives you live code editing combined with a time-travelling debugger. It is flexible to go with any view layer such as React, Angular, Vue, etc.</p>
              <h2>Principles of Redux</h2>
              <ul>
                <li>Single Source of Truth - The state of your whole application is stored in an object tree within a single store. As whole application state is stored in a single tree, it makes debugging easy, and development faster.</li>
                <li>State is Read-only - The only way to change the state is to emit an action, an object describing what happened. This means nobody can directly change the state of your application.</li>
                <li>Changes are made with pure functions - To specify how the state tree is transformed by actions, you write pure reducers. A reducer is a central place where state modification takes place. Reducer is a function which takes state and action as arguments, and returns a newly updated state.</li>
              </ul>
              <h2>Installation</h2>
              <p>Before installing Redux, we have to install Nodejs and NPM. Below are the instructions that will help you install it. You can skip these steps if you already have Nodejs and NPM installed in your device.</p>
              <p>To install redux, you can follow the below steps − Run the following command in your command prompt to install Redux : <b>npm install --save redux</b></p>
              <p>To use Redux with react application, you need to install an additional dependency as follows : <b>npm install --save react-redux</b></p>
              <p>To install developer tools for Redux, you need to install the following as dependency − Run the below command in your command prompt to install Redux dev-tools : <b>npm install --save-dev redux-devtools</b></p>
              <h2>Core Concepts</h2>
              <p>Let us assume our application’s state is described by a plain object called initialState which is as follows </p>
              <img className = 'imagereact' src= {e1}/>
              <p>Every piece of code in your application cannot change this state. To change the state, you need to dispatch an action.</p>
              <p>An action is a plain object that describes the intention to cause change with a type property. It must have a type property which tells what type of action is being performed.</p>
              <p>Actions and states are held together by a function called Reducer. An action is dispatched with an intention to cause change. This change is performed by the reducer. Reducer is the only way to change states in Redux, making it more predictable, centralised and debuggable. A reducer function that handles the ‘ITEMS_REQUEST’ action is as follows :</p>
              <img className = 'imagereact' src= {e2}/>
              <p>Redux has a single store which holds the application state. If you want to split your code on the basis of data handling logic, you should start splitting your reducers instead of stores in Redux.</p>
              <h2>Data Flow</h2>
              <p>Redux follows the unidirectional data flow. It means that your application data will follow in one-way binding data flow. As the application grows & becomes complex, it is hard to reproduce issues and add new features if you have no control over the state of your application. Redux reduces the complexity of the code, by enforcing the restriction on how and when state update can happen. This way, managing updated states is easy. We already know about the restrictions as the three principles of Redux. Following diagram will help you understand Redux data flow better:</p>
              <img className = 'imagereact' src= {e3}/>
              <ul>
                <li>An action is dispatched when a user interacts with the application.</li>
                <li>The root reducer function is called with the current state and the dispatched action. The root reducer may divide the task among smaller reducer functions, which ultimately returns a new state.</li>
                <li>The store notifies the view by executing their callback functions.</li>
                <li>The view can retrieve updated state and re-render again.</li>
              </ul>
              <h2>Store</h2>
              <p>A store is an immutable object tree in Redux. A store is a state container which holds the application’s state. Redux can have only a single store in your application. Whenever a store is created in Redux, you need to specify the reducer. Let us see how we can create a store using the createStore method from Redux. One need to import the createStore package from the Redux library that supports the store creation process as shown below :</p>
              <img className = 'imagereact' src= {e4}/>
              <p>A reducer is a function that returns the next state of app. A preloadedState is an optional argument and is the initial state of your app. An enhancer is also an optional argument. It will help you enhance store with third-party capabilities.</p>
              <p><b>getState</b></p>
              <p>It helps you retrieve the current state of your Redux store. The syntax for getState is as follows − <b>store.getState()</b></p>
              <p><b>dispatch</b></p>
              <p>It allows you to dispatch an action to change a state in your application. The syntax for dispatch is as follows − <b>store.dispatch(&#123;type:'ITEMS_REQUEST'&#125;)</b></p>
              <p><b>subscribe</b></p>
              <p>It helps you register a callback that Redux store will call when an action has been dispatched. As soon as the Redux state has been updated, the view will re-render automatically. The syntax for dispatch is as follows − <b>store.subscribe(()=&gt;&#123; console.log(store.getState());&#125;)</b></p>
              <h2>Actions</h2>
              <p>Actions are the only source of information for the store as per Redux official documentation. It carries a payload of information from your application to store. As discussed earlier, actions are plain JavaScript object that must have a type attribute to indicate the type of action performed. It tells us what had happened. Types should be defined as string constants in your application as given below :</p>
              <img className = 'imagereact' src= {e5}/>
              <p>Apart from this type attribute, the structure of an action object is totally up to the developer. It is recommended to keep your action object as light as possible and pass only the necessary information. To cause any change in the store, you need to dispatch an action first by using store.dispatch() function. The action object is as follows :</p>
              <img className = 'imagereact' src= {e6}/>
              <p>Action creators are the functions that encapsulate the process of creation of an action object. These functions simply return a plain Js object which is an action. It promotes writing clean code and helps to achieve reusability. Let us learn about action creator which lets you dispatch an action, ‘ITEMS_REQUEST’ that requests for the product items list data from the server. Meanwhile, the isLoading state is made true in the reducer in ‘ITEMS_REQUEST’ action type to indicate that items are loading, and data is still not received from the server. Initially, the isLoading state was false in the initialState object assuming nothing is loading. When data is received at browser, isLoading state will be returned as false in ‘ITEMS_REQUEST_SUCCESS’ action type in the corresponding reducer. This state can be used as a prop in react components to display loader/message on your page while the request for data is on. The action creator is as follows −</p>
              <img className = 'imagereact' src= {e7}/>
              <p>To invoke a dispatch function, you need to pass action as an argument to dispatch function.</p>
              <img className = 'imagereact' src= {e8}/>
              <p>You can dispatch an action by directly using store.dispatch(). However, it is more likely that you access it with react-Redux helper method called connect(). You can also use bindActionCreators() method to bind many action creators with dispatch function.</p>
              <h2>Pure Functions</h2>
              <p>A function is a process which takes inputs called arguments, and produces some output known as return value. A function is called pure if it abides by the following rules :</p>
              <ul>
                <li>A function returns the same result for same arguments.</li>
                <li>Its evaluation has no side effects, i.e., it does not alter input data.</li>
                <li>No mutation of local & global variables.</li>
                <li>It does not depend on the external state like a global variable.</li>
              </ul>
              <p>Let us take the example of a function which returns two times of the value passed as an input to the function. In general, it is written as, f(x) =&gt; x*2. If a function is called with an argument value 2, then the output would be 4, f(2) =&gt; 4. Let us write the definition of the function in JavaScript as shown below :</p>
              <p><b>const double = x =&gt; x*2; // es6 arrow function</b></p>
              <p><b>console.log(double(2));  // 4</b></p>
              <p>Here, double is a pure function. As per the three principles in Redux, changes must be made by a pure function, i.e., reducer in Redux. Now, a question arises as to why a reducer must be a pure function. Suppose, you want to dispatch an action whose type is 'ADD_TO_CART_SUCCESS' to add an item to your shopping cart application by clicking add to cart button. Let us assume the reducer is adding an item to your cart as given below :</p>
              <img className = 'imagereact' src= {e9}/>
              <p>Let us suppose, isAddedToCart is a property on state object that allows you to decide when to disable ‘add to cart’ button for the item by returning a Boolean value ‘true or false’. This prevents user to add same product multiple times. Now, instead of returning a new object, we are mutating isAddedToCart prop on the state like above. Now if we try to add an item to cart, nothing happens. Add to cart button will not get disabled. The reason for this behaviour is as follows − Redux compares old and new objects by the memory location of both the objects. It expects a new object from reducer if any change has happened. And it also expects to get the old object back if no change occurs. In this case, it is the same. Due to this reason, Redux assumes that nothing has happened. So, it is necessary for a reducer to be a pure function in Redux. The following is a way to write it without mutation :</p>
              <img className = 'imagereact' src= {e10}/>
              <h2>Reducers</h2>
              <p>Reducers are a pure function in Redux. Pure functions are predictable. Reducers are the only way to change states in Redux. It is the only place where you can write logic and calculations. Reducer function will accept the previous state of app and action being dispatched, calculate the next state and returns the new object. The following few things should never be performed inside the reducer :</p>
              <ul>
                <li>Mutation of functions arguments</li>
                <li>API calls & routing logic</li>
                <li>Calling non-pure function e.g. Math.random()</li>
              </ul>
              <p><b>The following is the syntax of a reducer : (state,action) =&gt; newState</b></p>
              <p>Let us continue the example of showing the list of product items on a web page, discussed in the action creators module. Let us see below how to write its reducer.</p>
              <img className = 'imagereact' src= {e11}/>
              <p>Firstly, if you do not set state to ‘initialState’, Redux calls reducer with the undefined state. In this code example, concat() function of JavaScript is used in ‘ITEMS_REQUEST_SUCCESS', which does not change the existing array; instead returns a new array. In this way, you can avoid mutation of the state. Never write directly to the state. In 'ITEMS_REQUEST', we have to set the state value from the action received. It is already discussed that we can write our logic in reducer and can split it on the logical data basis. Let us see how we can split reducers and combine them together as root reducer when dealing with a large application. Suppose, we want to design a web page where a user can access product order status and see wishlist information. We can separate the logic in different reducers files, and make them work independently. Let us assume that GET_ORDER_STATUS action is dispatched to get the status of order corresponding to some order id and user id.</p>
              <img className = 'imagereact' src= {e12}/>
              <p>Now, we can combine both reducers by using Redux combineReducers utility. The combineReducers generate a function which returns an object whose values are different reducer functions. You can import all the reducers in index reducer file and combine them together as an object with their respective names.</p>
              <img className = 'imagereact' src= {e13}/>
              <h2>Middleware</h2>
              <p>Redux itself is synchronous, so how the async operations like network request work with Redux? Here middlewares come handy. As discussed earlier, reducers are the place where all the execution logic is written. Reducer has nothing to do with who performs it, how much time it is taking or logging the state of the app before and after the action is dispatched. In this case, Redux middleware function provides a medium to interact with dispatched action before they reach the reducer. Customized middleware functions can be created by writing high order functions (a function that returns another function), which wraps around some logic. Multiple middlewares can be combined together to add new functionality, and each middleware requires no knowledge of what came before and after. You can imagine middlewares somewhere between action dispatched and reducer. Commonly, middlewares are used to deal with asynchronous actions in your app. Redux provides with API called applyMiddleware which allows us to use custom middleware as well as Redux middlewares like redux-thunk and redux-promise. It applies middlewares to store. The syntax of using applyMiddleware API is :</p>
              <img className = 'imagereact' src= {e14}/>
              <p>Middlewares will let you write an action dispatcher which returns a function instead of an action object. Example for the same is shown below :</p>
              <img className = 'imagereact' src= {e15}/>
              <p>Conditional dispatch can be written inside middleware. Each middleware receives store’s dispatch so that they can dispatch new action, and getState functions as arguments so that they can access the current state and return a function. Any return value from an inner function will be available as the value of dispatch function itself. The following is the syntax of a middleware : <b>(&#123; getState, dispatch &#125;) =&gt; next =&gt; action</b></p>
              <p>The getState function is useful to decide whether new data is to be fetched or cache result should get returned, depending upon the current state. Let us see an example of a custom middleware logger function. It simply logs the action and new state.</p>
              <img className = 'imagereact' src= {e16}/>
              <p>Another example of middleware where you can handle when to show or hide the loader is given below. This middleware shows the loader when you are requesting any resource and hides it when resource request has been completed.</p>
              <img className = 'imagereact' src= {e17}/>
              <h2>Devtools</h2>
              <p>Redux-Devtools provide us debugging platform for Redux apps. It allows us to perform time-travel debugging and live editing. Some of the features in official documentation are as follows −</p>
              <ul>
                <li>It lets you inspect every state and action payload.</li>
                <li>It lets you go back in time by “cancelling” actions.</li>
                <li>If you change the reducer code, each “staged” action will be re-evaluated.</li>
                <li>If the reducers throw, we can identify the error and also during which action this happened.</li>
                <li>With persistState() store enhancer, you can persist debug sessions across page reloads.</li>
              </ul>
              <p>There are two variants of Redux dev-tools as given below −</p>
              <ul>
                <li>Redux DevTools − It can be installed as a package and integrated into your application as given below − <a href='https://github.com/reduxjs/redux-devtools/blob/master/docs/Walkthrough.md#manual-integration'>click here</a></li>
                <li>Redux DevTools Extension − A browser extension that implements the same developer tools for Redux is as follows − <a href='https://github.com/zalmoxisus/redux-devtools-extension'>click here</a></li>
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

export default Redux
