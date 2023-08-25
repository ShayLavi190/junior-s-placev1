import React from 'react'
import './Part2r.css'
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
function Part2r() {
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
                <h2>React Props</h2>
                <p>Props are arguments passed into React components. Props are passed to components via HTML attributes. To send props into a component, use the same syntax as HTML attributes:</p>
                <p><b>const myElement = &lt;Car brand="Ford" /&gt;;</b></p>
                <p>The component receives the argument as a props object:</p>
                <p><b>function Car(props) &#123;return &lt;h2&gt;I am a &#123; props.brand &#125;!&lt;/h2&gt;;&#125;</b></p>
                <h2>React Events</h2>
                <p>Just like HTML DOM events, React can perform actions based on user events. React has the same events as HTML: click, change, mouseover etc. React events are written in camelCase syntax: onClick instead of onclick. React event handlers are written inside curly braces: onClick=&#123;shoot&#125;  instead of onClick="shoot()".</p>
                <p>Event handlers have access to the React event that triggered the function. In our example the event is the "click" event.</p>
                <img className = 'images3' src= {e1}/>
                <h2>React Conditional Rendering</h2>
                <p>In React, you can conditionally render components. There are several ways to do this. We can use the if JavaScript operator to decide which component to render. Another way to conditionally render a React component is by using the && operator. Another way to conditionally render elements is by using a ternary operator.</p>
                <img className = 'images3' src= {e2}/>
                <h2>React Lists</h2>
                <p>In React, you will render lists with some type of loop. The JavaScript map() array method is generally the preferred method.</p>
                <p>Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list. Keys need to be unique to each sibling. But they can be duplicated globally.</p>
                <img className = 'images3' src= {e3}/>
                <h2>React Forms</h2>
                <p>Just like in HTML, React uses forms to allow users to interact with the web page.</p>
                <p><b>Adding Forms in React</b></p>
                <p>You add a form with React like any other element:</p>
                <img className = 'images3' src= {e4}/>
                <p><b>Handling Forms</b></p>
                <p>Handling forms is about how you handle the data when it changes value or gets submitted. In HTML, form data is usually handled by the DOM. In React, form data is usually handled by the components. When the data is handled by the components, all the data is stored in the component state. You can control changes by adding event handlers in the onChange attribute. We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.</p>
                <img className = 'images3' src= {e5}/>
                <p><b>Submitting Forms</b></p>
                <p>You can control the submit action by adding an event handler in the onSubmit attribute for the &lt;form&gt;:</p>
                <img className = 'images3' src= {e6}/>
                <p><b>Multiple Input Fields</b></p>
                <p>You can control the values of more than one input field by adding a name attribute to each element. We will initialize our state with an empty object. To access the fields in the event handler use the event.target.name and event.target.value syntax. To update the state, use square brackets [bracket notation] around the property name.</p>
                <p><b>Select</b></p>
                <p>A drop down list, or a select box, in React is also a bit different from HTML. in HTML, the selected value in the drop down list was defined with the selected attribute. In React, the selected value is defined with a value attribute on the select tag:</p>
                <img className = 'images3' src= {e7}/>
                <h2>React Router</h2>
                <p>Create React App doesn't include page routing. React Router is the most popular solution.</p>
                <p>Now we will use our Router in our index.js file.</p>
                <img className = 'images3' src= {e8}/>
                <p>We wrap our content first with &lt;BrowserRouter&gt;. Then we define our &lt;Routes&gt;. An application can have multiple &lt;Routes&gt;. Our basic example only uses one. &lt;Route&gt;s can be nested. The first &lt;Route&gt; has a path of / and renders the Layout component. The nested &lt;Route&gt;s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs. The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /. Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.</p>
                <p><b>Pages / Components</b></p>
                <p>The Layout component has &lt;Outlet&gt; and &lt;Link&gt; elements. The &lt;Outlet&gt; renders the current route selected. &lt;Link&gt; is used to set the URL and keep track of browsing history. Anytime we link to an internal path, we will use &lt;Link&gt; instead of &lt;a href=""&gt;. The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.</p>
                <img className = 'images3' src= {e9}/>
                <img className = 'images3' src= {e10}/>
                <h2>React Memo</h2>
                <p>Using memo will cause React to skip rendering a component if its props have not changed. This can improve performance.</p>
                <p>In this example, the Todos component re-renders even when the todos have not changed.</p>
                <img className = 'images3' src= {e11}/>
                <p>When you click the increment button, the Todos component re-renders. If this component was complex, it could cause performance issues.</p>
                <p>To fix this, we can use memo. Use memoto keep the Todos component from needlessly re-rendering. Wrap the Todos component export in memo:</p>
                <img className = 'images3' src= {e12}/>
                <p>Now the Todos component only re-renders when the todos that are passed to it through props are updated.</p>
                <h2>Styling React Using CSS</h2>
                <p>There are many ways to style React with CSS, we will take a closer look at three common ways:</p>
                <ul>
                    <li>Inline styling</li>
                    <li>CSS stylesheets</li>
                    <li>CSS Modules</li>
                </ul>
                <p><b>Inline Styling</b></p>
                <p>To style an element with the inline style attribute, the value must be a JavaScript object:</p>
                <img className = 'images3' src= {e13}/>
                <p><b>CSS Stylesheet</b></p>
                <p>You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.</p>
                <img className = 'images3' src= {e14}/>
                <p><b>CSS Modules</b></p>
                <p>Another way of adding styles to your application is to use CSS Modules. CSS Modules are convenient for components that are placed in separate files. Create the CSS module with the .module.css extension, example: my-style.module.css.</p>
                <img className = 'images3' src= {e15}/>
                <img className = 'images3' src= {e16}/>
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

export default Part2r
