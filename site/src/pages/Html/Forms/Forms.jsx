import React from 'react'
import './Forms.css'
import e1 from './e1.png'
import Navbar from '../../../components/Navbar/Navbar'

function Forms() {
  return (
      <div>
      <body>
        <Navbar />
      <div class="sidenav sticky-to">
      <a href="/html/part1">Basics part 1</a>
        <a href="/html/part2">Basics part 2</a>
        <a href="/html/forms">Forms</a>
        <a href="/html/media">Media</a>
        <a href="/html/apis">Apis</a>
        <a href="/html/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-block">
                <h2>HTML Forms</h2>
                <p>An HTML form is used to collect user input. The user input is most often sent to a server for processing.</p>
                <h2>The &lt;form&gt; Element</h2>
                <p>The HTML &lt;form&gt; element is used to create an HTML form for user input.The &lt;form&gt; element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.</p>
                <h2>The &lt;input&gt; Element</h2>
                <p>The HTML &lt;input&gt; element is the most used form element.An &lt;input&gt; element can be displayed in many ways, depending on the type attribute.</p>
                <p><b>Basic types of &lt;input&gt; elements: </b></p>
                <ul>
                    <li>&lt;input type="text"&gt; - Displays a single-line text input field	</li>
                    <li>&lt;input type="radio"&gt; - Displays a radio button (for selecting one of many choices)</li>
                    <li>&lt;input type="checkbox"&gt; - Displays a checkbox (for selecting zero or more of many choices)</li>
                    <li>&lt;input type="submit"&gt; - Displays a submit button (for submitting the form)</li>
                    <li>&lt;input type="button"&gt; - Displays a clickable button	</li>
                </ul>
                <img  className = 'images' src= {e1}/>
                <h2>The Action Attribute</h2>
                <p>The action attribute defines the action to be performed when the form is submitted. Usually, the form data is sent to a file on the server when the user clicks on the submit button.</p>
                <h2>The Target Attribute</h2>
                <p>The target attribute specifies where to display the response that is received after submitting the form.</p>
                <p><b>The target attribute can have one of the following values:</b></p>
                <ul>
                    <li>_blank - The response is displayed in a new window or tab</li>
                    <li>_self  - The response is displayed in the current window</li>
                    <li>_parent	- The response is displayed in the full body of the window</li>
                    <li>framename - The response is displayed in a named iframe</li>
                </ul>
                <h2>List of All &lt;form&gt; Attributes</h2>
                <ul>
                    <li>accept-charset - Specifies the character encodings used for form submission</li>
                    <li>action  - Specifies where to send the form-data when a form is submitted</li>
                    <li>autocomplete - Specifies whether a form should have autocomplete on or off</li>
                    <li>enctype - Specifies how the form-data should be encoded when submitting it to the server (only for method="post")</li>
                    <li>method - Specifies the HTTP method to use when sending form-data</li>
                    <li>name - Specifies the name of the form</li>
                    <li>novalidate - Specifies that the form should not be validated when submitted</li>
                    <li>rel - Specifies the relationship between a linked resource and the current document</li>
                    <li>target - Specifies where to display the response that is received after submitting the form</li>
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

export default Forms
