import React from 'react'
import './Apart2.css'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'

function Apart2() {
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
        <a href="/css">Intro</a>
        <a href="/css/part1">Basics part 1</a>
        <a href="/css/part2">Basics part 2</a>
        <a href="/css/advancedpart1">Advanced part 1</a>
        <a href="/css/advancedpart2">Advanced part 2</a>
        <a href="/css/quiz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-blockcs">
                <h2>CSS Masking</h2>
                <p>With CSS masking you create a mask layer to place over an element to partially or fully hide portions of the element.</p>
                <p><b>CSS Masking Properties:</b></p>
                <ul>
                    <li>mask-image - Specifies an image to be used as a mask layer for an element.</li>
                    <li>mask-mode - Specifies whether the mask layer image is treated as a luminance mask or as an alpha mask.</li>
                    <li>mask-origin	- Specifies the origin position (the mask position area) of a mask layer image.</li>
                    <li>mask-position - Sets the starting position of a mask layer image (relative to the mask position area).</li>
                    <li>mask-repeat	- Specifies how the mask layer image is repeated.</li>
                    <li>mask-size - Specifies the size of a mask layer image.</li>
                </ul>
                <h2>CSS Variables - The var() Function</h2>
                <p>The var() function is used to insert the value of a CSS variable. CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and change the variables based on media queries. A good way to use CSS variables is when it comes to the colors of your design. Instead of copy and paste the same colors over and over again, you can place them in variables.</p>
                <p><b>How var() Works</b></p>
                <p>First of all: CSS variables can have a global or local scope. Global variables can be accessed/used through the entire document, while local variables can be used only inside the selector where it is declared. To create a variable with global scope, declare it inside the :root selector. The :root selector matches the document's root element. To create a variable with local scope, declare it inside the selector that is going to use it.</p>
                <p>CSS variables have access to the DOM, which means that you can change them with JavaScript.</p>
                <img className = 'imagecs1' src= {e2}/>
                <p><b>CSS Using Variables in Media Queries</b></p>
                <p>Now we want to change a variable value inside a media query.Here, we first declare a new local variable named --fontsize for the .container class. We set its value to 25 pixels. Then we use it in the .container class further down. Then, we create a @media rule that says "When the browser's width is 450px or wider, change the --fontsize variable value of the .container class to 50px."</p>
                <img className = 'imagecs1' src= {e1}/>
                <h2>CSS Media Queries</h2>
                <p>The @media rule, introduced in CSS2, made it possible to define different style rules for different media types. Examples: You could have one set of style rules for computer screens, one for printers, one for handheld devices, one for television-type devices, and so on. Unfortunately these media types never got a lot of support by devices, other than the print media type. Media queries in CSS3 extended the CSS2 media types idea: Instead of looking for a type of device, they look at the capability of the device.</p>
                <h2>Responsive Web Design</h2>
                <p>Responsive web design makes your web page look good on all devices. Responsive web design uses only HTML and CSS. Responsive web design is not a program or a JavaScript.</p>
                <p>Web pages can be viewed using many different devices: desktops, tablets, and phones. Your web page should look good, and be easy to use, regardless of the device.</p>
                <p>It is called responsive web design when you use CSS and HTML to resize, hide, shrink, enlarge, or move the content to make it look good on any screen.</p>
                <h2>The Viewport</h2>
                <p>The viewport is the user's visible area of a web page. The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.</p>
                <p>HTML5 introduced a method to let web designers take control over the viewport, through the &lt;meta&gt; tag.</p>
                <p>You should include the following &lt;meta&gt; viewport element in all your web pages:</p>
                <p>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</p>
                <p><b>Some additional rules to follow:</b></p>
                <ul>
                    <li>Do NOT use large fixed width elements - For example, if an image is displayed at a width wider than the viewport it can cause the viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport.</li>
                    <li>Do NOT let the content rely on a particular viewport width to render well - Since screen dimensions and width in CSS pixels vary widely between devices, content should not rely on a particular viewport width to render well.</li>
                    <li>Use CSS media queries to apply different styling for small and large screens - Setting large absolute CSS widths for page elements will cause the element to be too wide for the viewport on a smaller device. Instead, consider using relative width values, such as width: 100%. Also, be careful of using large absolute positioning values. It may cause the element to fall outside the viewport on small devices.</li>
                </ul>
                <h2>Grid-View</h2>
                <p>Many web pages are based on a grid-view, which means that the page is divided into columns.</p>
                <p>Using a grid-view is very helpful when designing web pages. It makes it easier to place elements on the page. A responsive grid-view often has 12 columns, and has a total width of 100%, and will shrink and expand as you resize the browser window.</p>
                <h2>Images and Videos</h2>
                <p>If the width property is set to a percentage and the height property is set to "auto", the image will be responsive and scale up and down. the max-width property is set to 100%, the image will scale down if it has to, but never scale up to be larger than its original size. </p>
                <p>The HTML &lt;picture&gt; element gives web developers more flexibility in specifying image resources. The most common use of the &lt;picture&gt; element will be for images used in responsive designs. Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more nicely fill the browser viewport. The srcset attribute is required, and defines the source of the image. The media attribute is optional, and accepts the media queries you find in CSS @media rule. You should also define an &lt;img&gt; element for browsers that do not support the &lt;picture&gt; element.</p>
                <h2>CSS Grid Layout Module</h2>
                <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                <img className = 'imagecs1' src= {e3}/>
                <p><b>All CSS Grid Properties</b></p>
                <img className = 'imagecs1' src= {e4}/>
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

export default Apart2
