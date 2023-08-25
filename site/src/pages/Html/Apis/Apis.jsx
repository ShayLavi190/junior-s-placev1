import React from 'react'
import './Apis.css'
import Navbar from '../../../components/Navbar/Navbar'

function Apis() {
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
                <h2>HTML Geolocation API</h2>
                <p>The HTML Geolocation API is used to locate a user's position. For using it The getCurrentPosition() method is used to return the user's position.The second parameter of the getCurrentPosition() method is used to handle errors. It specifies a function to run if it fails to get the user's location.</p>
                <h2>The getCurrentPosition() Method - Return Data</h2>
                <p>The getCurrentPosition() method returns an object on success. The latitude, longitude and accuracy properties are always returned. The other properties are returned if available:</p>
                <ul>
                    <li>coords.latitude	- The latitude as a decimal number (always returned)</li>
                    <li>coords.longitude -The longitude as a decimal number (always returned)</li>
                    <li>coords.accuracy	- The accuracy of position (always returned)</li>
                    <li>coords.altitude	- The altitude in meters above the mean sea level (returned if available)</li>
                    <li>coords.altitudeAccuracy	- The altitude accuracy of position (returned if available)</li>
                    <li>coords.heading	- The heading as degrees clockwise from North (returned if available)</li>
                    <li>coords.speed - The speed in meters per second (returned if available)</li>
                    <li>timestamp - The date/time of the response (returned if available)</li>
                </ul>
                <h2>HTML Drag and Drop API</h2>
                <p>In HTML, any element can be dragged and dropped. First of all: To make an element draggable, set the draggable attribute to true. Then, specify what should happen when the element is dragged. the ondragstart attribute calls a function, drag(event), that specifies what data to be dragged. The ondragover event specifies where the dragged data can be dropped.
                    By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element. When the dragged data is dropped, a drop event occurs.The ondrop attribute calls a function, drop(event):</p>
                <h2>HTML Web Storage API</h2>
                <p>With web storage, web applications can store data locally within the user's browser. Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server. Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.</p>
                <p><b>HTML web storage provides two objects for storing data on the client:</b></p>
                <ul>
                    <li>window.localStorage - stores data with no expiration date.</li>
                    <li>window.sessionStorage - stores data for one session (data is lost when the browser tab is closed).</li>
                </ul>
                <h2>HTML Web Workers API</h2>
                <p>A web worker is a JavaScript running in the background, without affecting the performance of the page.</p>
                <p>When executing scripts in an HTML page, the page becomes unresponsive until the script is finished. A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.</p>
                <h2>HTML SSE API</h2>
                <p>Server-Sent Events (SSE) allow a web page to get updates from a server.</p>
                <p>A server-sent event is when a web page automatically gets updates from a server. This was also possible before, but the web page would have to ask if any updates were available. With server-sent events, the updates come automatically. Examples: Facebook/Twitter updates, stock price updates, news feeds, sport results, etc.</p>

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

export default Apis
