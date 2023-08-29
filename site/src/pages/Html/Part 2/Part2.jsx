import React from 'react'
import './Part2.css'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.gif'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'

function Part2() {
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
      <a href="/html/part1">Basics part 1</a>
        <a href="/html/part2">Basics part 2</a>
        <a href="/html/forms">Forms</a>
        <a href="/html/media">Media</a>
        <a href="/html/apis">Apis</a>
        <a href="/html/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-blockp2">
                <h2>HTML Lists</h2>
                <p>HTML lists allow web developers to group a set of related items in lists.</p>
                <p>There is two types of lists ordered and unordered (1,2,3....)</p>
                <p>An unordered list starts with the &lt;ul&gt; tag. Each list item starts with the &lt;li&gt; tag. The list items will be marked with bullets (small black circles) by default</p>
                <p>An ordered list starts with the &lt;ol&gt; tag. Each list item starts with the &lt;li&gt; tag.The list items will be marked with numbers by default:</p>
                <p>HTML also supports description lists. A description list is a list of terms, with a description of each term. The &lt;dl&gt; tag defines the description list, the &lt;dt&gt; tag defines the term (name), and the &lt;dd&gt; tag describes each term</p>
                <img  className = 'images2p2' src= {e1}/>
                <h2>HTML Block and Inline Elements</h2>
                <p>Every HTML element has a default display value, depending on what type of element it is. There are two display values: block and inline.</p>
                <h2>Block-level Elements</h2>
                <p>A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.</p>
                <p><b>List of the block elements:</b></p>
                <img  className = 'images2p2' src= {e3}/>
                <h2>Inline Elements</h2>
                <p>An inline element does not start on a new line. An inline element only takes up as much width as necessary.</p>
                <p><b>List of the inline elements:</b></p>
                <img  className = 'images2p2' src= {e2}/>
                <h2>The &lt;div&gt; Element</h2>
                <p>The &lt;div&gt; element is often used as a container for other HTML elements. The &lt;div&gt; element has no required attributes, but style, class and id are common. When used together with CSS, the &lt;div&gt; element can be used to style blocks of content</p>
                <h2>The &lt;span&gt; Element</h2>
                <p>The &lt;span&gt; element is an inline container used to mark up a part of a text, or a part of a document. The &lt;span&gt;element has no required attributes, but style, class and id are common. When used together with CSS, the &lt;span&gt; element can be used to style parts of the text</p>
                <h2>HTML class Attribute</h2>
                <ul>
                    <li>The HTML class attribute specifies one or more class names for an element</li>
                    <li>Classes are used by CSS and JavaScript to select and access specific elements</li>
                    <li>The class attribute can be used on any HTML element</li>
                    <li>The class name is case sensitive</li>
                    <li>Different HTML elements can point to the same class name</li>
                    <li>JavaScript can access elements with a specific class name with the getElementsByClassName() method</li>
                </ul>
                <h2>HTML id Attribute</h2>
                <ul>
                    <li>The id attribute is used to specify a unique id for an HTML element</li>
                    <li>The value of the id attribute must be unique within the HTML document</li>
                    <li>The value of the id attribute is case sensitive</li>
                    <li>The id attribute is also used to create HTML bookmarks</li>
                    <li>JavaScript can access an element with a specific id with the getElementById() method</li>
                </ul>
                <h2>HTML Iframes</h2>
                <ul>
                    <li>The HTML &lt;iframe&gt; tag specifies an inline frame</li>
                    <li>The src attribute defines the URL of the page to embed</li>
                    <li>Always include a title attribute (for screen readers)</li>
                    <li>The height and width attributes specify the size of the iframe</li>
                    <li>Use border:none; to remove the border around the iframe</li>
                </ul>
                <h2>HTML JavaScript</h2>
                <p>The HTML &lt;script&gt; tag is used to define a client-side script (JavaScript). The &lt;script&gt; element either contains script statements, or it points to an external script file through the src attribute. Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content. To select an HTML element, JavaScript most often uses the document.getElementById() method.</p>
                <p>The HTML &lt;noscript&gt; tag defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support scripts</p>
                <h2>HTML Responsive Web Design</h2>
                <p>Responsive web design is about creating web pages that look good on all devices! A responsive web design will automatically adjust for different screen sizes and viewports.</p>
                <h2>Semantic Elements in HTML</h2>
                <p>Many web sites contain HTML code like: &lt;div id="nav"&gt; &lt;class="header"&gt; &lt;id="footer"&gt; to indicate navigation, header, and footer.</p>
                <p>In HTML there are some semantic elements that can be used to define different parts of a web page:</p>
                <ul>
                    <li>&lt;aside&gt; - Defines content aside from the page content</li>
                    <li>&lt;article&gt; - Defines independent, self-contained content</li>
                    <li>&lt;details&gt; - Defines additional details that the user can view or hide</li>
                    <li>&lt;figcaption&gt; -  Defines a caption for a &lt;footer&gt; element</li>
                    <li>&lt;footer&gt; - Defines a footer for a document or section </li>
                    <li>&lt;figure&gt; - Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. </li>
                    <li>&lt;main&gt; - Specifies the main content of a document</li>
                    <li>&lt;mark&gt; - Defines marked/highlighted text</li>
                    <li>&lt;section&gt; - Defines a section in a document</li>
                    <li>&lt;nav&gt; - Defines navigation links</li>
                    <li>&lt;summary&gt; - Defines a visible heading for a &lt;details&gt; element</li>
                    <li>&lt;time&gt; - Defines a date/time</li>
                </ul>
                <img  className = 'images2p2' src= {e4}/>
                <h2>HTML Encoding (Character Sets)</h2>
                <p>To display an HTML page correctly, a web browser must know which character set to use. ASCII was the first character encoding standard. ASCII defined 128 different characters that could be used on the internet: numbers (0-9), English letters (A-Z), and some special characters like ! $ + - ( ) @ &lt; &gt; .ISO-8859-1 was the default character set for HTML 4. This character set supported 256 different character codes. HTML 4 also supported UTF-8. ANSI (Windows-1252) was the original Windows character set. ANSI is identical to ISO-8859-1, except that ANSI has 32 extra characters.The HTML5 specification encourages web developers to use the UTF-8 character set, which covers almost all of the characters and symbols in the world!</p>
                <h2>HTML VS XHTML</h2>
                <p>XHTML is a stricter, more XML-based version of HTML.</p>
                <p><b>The Most Important Differences from HTML</b></p>
                <ul>
                    <li>&lt;!DOCTYPE&gt; is mandatory</li>
                    <li>The xmlns attribute in &lt;html&gt; is mandatory</li>
                    <li> &lt;html&gt;, &lt;head&gt;, &lt;title&gt;, and &lt;body&gt; are mandatory</li>
                    <li>Elements must always be properly nested</li>
                    <li>Elements must always be closed </li>
                    <li>Elements must always be in lowercase</li>
                    <li>Attribute names must always be in lowercase</li>
                    <li>Attribute values must always be quoted</li>
                    <li>Attribute minimization is forbidden</li>
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

export default Part2
