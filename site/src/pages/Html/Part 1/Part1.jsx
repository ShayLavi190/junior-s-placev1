import React from 'react'
import './Part1.css'
import e1 from './e1.png'
import e2 from './e2.png'
import e3 from './e3.png'
import e4 from './e4.png'
import e5 from './e5.png'
import e6 from './e6.png'
import e7 from './e7.png'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'

function Part1() {
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
        <a href="/html">Intro</a>
        <a href="/html/part1">Basics part 1</a>
        <a href="/html/part2">Basics part 2</a>
        <a href="/html/forms">Forms</a>
        <a href="/html/media">Media</a>
        <a href="/html/apis">Apis</a>
        <a href="/html/quizz">Quiz</a>

      </div>
      <div>
            <div class="white-text-blockp1">
                <h2>What is HTML?</h2>
                <ul>
                    <li>HTML stands for Hyper Text Markup Language</li>
                    <li>HTML is the standard markup language for creating Web pages</li>
                    <li>HTML describes the structure of a Web page</li>
                    <li>HTML consists of a series of elements</li>
                    <li>HTML elements tell the browser how to display the content</li>
                    <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                </ul>
                <h2>Example</h2>
                <img className = 'images11' src= {e1}/>
                <h2>Basic labels</h2>
                <ul>
                    <li>The &lt;!DOCTYPE html&gt; declaration defines that this document is an HTML5 document</li>
                    <li>The &lt;html&gt; element is the root element of an HTML page</li>
                    <li>The &lt;head&gt; element contains meta information about the HTML page</li>
                    <li>The &lt;title&gt; element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
                    <li>The &lt;body&gt; element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
                    <li>The &lt;h1&gt; element defines a large heading</li>
                    <li>The &lt;p&gt; element defines a paragraph</li>
                </ul>
                <h2>What is an HTML Element?</h2>
                <p>An HTML element is defined by a start tag, some content, and an end tag:</p>
                <p> &lt;tagname&gt; Content goes here... &lt;/tagname&gt;</p>
                <p>The HTML element is everything from the start tag to the end tag</p>
                <h2>HTML Headings</h2>
                <p>HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.</p>
                <img className = 'images21' src= {e2}/>
                <h2>HTML Paragraphs</h2>
                <p>HTML paragraphs are defined with the &lt;p&gt; tag</p>
                <img className = 'images21' src= {e3}/>
                <h2>HTML Links</h2>
                <p>HTML links are defined with the &lt;a&gt; tag</p>
                <img className = 'images21' src= {e4}/>
                <h2>HTML Images</h2>
                <p>HTML images are defined with the &lt;img&gt; tag. The source file (src), alternative text (alt), width, and height are provided as attributes</p>
                <img  className = 'images21' src= {e5}/>
                <h2>HTML Attributes</h2>
                <ul>
                    <li>All HTML elements can have attributes</li>
                    <li>Attributes provide additional information about elements</li>
                    <li>Attributes are always specified in the start tag</li>
                    <li>Attributes usually come in name/value pairs like: name="value"</li>
                </ul>
                <h2>Types of HTML Attributes</h2>
                <ul>
                    <li><b>href attribute:</b> &lt;a&gt; tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to.</li>
                    <li><b>src attribute:</b> The &lt;img&gt; tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed. there are two types of url, relative and absolute. relative Links to an image that is hosted within the website and absolute Links to an external image that is hosted on another website.</li>
                    <li><b>width and height attribute:</b> The &lt;img&gt; tag should also contain the width and height attributes, which specify the width and height of the image (in pixels)</li>
                    <li><b>alt attribute:</b> The required alt attribute for the &lt;img&gt; tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.</li>
                    <li><b>style attribute:</b> The style attribute is used to add styles to an element, such as color, font, size, and more.</li>
                    <li><b>lang attribute:</b> You should always include the lang attribute inside the &lt;html&gt; tag, to declare the language of the Web page. This is meant to assist search engines and browsers.</li>
                    <li><b>title attribute:</b> The title attribute defines some extra information about an element. The value of the title attribute will be displayed as a tooltip when you mouse over the element.</li>
                </ul>
                <h2>Html display</h2>
                <p> You cannot be sure how HTML will be displayed. Large or small screens, and resized windows will create different results. With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code. The browser will automatically remove any extra spaces and lines when the page is displayed</p>
                <h2>HTML Tag Reference</h2>
                <ul>
                    <li> &lt;p&gt; defines a paragraph</li>
                    <li> &lt;hr&gt; Defines a thematic change in the content </li>
                    <li> &lt;br&gt; Inserts a single line break </li>
                    <li> &lt;pre&gt; defines pre-formatted text </li>
                </ul>
                <h2>HTML styles properties</h2>
                <ul>
                    <li>Use the style attribute for styling HTML elements</li>
                    <li> Use background-color for background color </li>
                    <li> Use color for text colors </li>
                    <li> Use font-family for text fonts </li>
                    <li> Use font-size for text sizes </li>
                    <li> Use text-align for text alignment </li>
                </ul>
                <h2>HTML Formatting Elements</h2>
                <p>Formatting elements were designed to display special types of text:</p>
                <ul>
                    <li> &lt;b&gt; - Bold text</li>
                    <li> &lt;strong&gt; - Important text </li>
                    <li> &lt;i&gt; - Italic text </li>
                    <li> &lt;em&gt; - Emphasized text </li>
                    <li> &lt;mark&gt; - Marked text</li>
                    <li> &lt;small&gt; - Smaller text </li>
                    <li> &lt;del&gt; - Deleted text </li>
                    <li> &lt;ins&gt; - Inserted text </li>
                    <li> &lt;sub&gt;  - Subscript text </li>
                    <li> &lt;sup&gt; - Superscript text </li>
                </ul>
                <h2>HTML Quotation and Citation Elements</h2>
                <ul>
                    <li> &lt;abbr&gt; - Defines an abbreviation or acronym</li>
                    <li> &lt;addres&gt; - Defines contact information for the author/owner of a document </li>
                    <li> &lt;bdo&gt; - Defines the text direction </li>
                    <li> &lt;blockquote&gt; - Defines a section that is quoted from another source </li>
                    <li> &lt;cite&gt; - Defines the title of a work</li>
                    <li> &lt;p&gt; - Defines a short inline quotation </li>
                </ul>
                <h2>HTML Links</h2>
                <ul>
                    <li> Use the &lt;a&gt; element to define a link</li>
                    <li> Use the href attribute to define the link address </li>
                    <li> Use the target attribute to define where to open the linked document </li>
                    <li> Use the &lt;img&gt; element (inside &lt;a&gt;) to use an image as a link </li>
                    <li> Use the mailto: scheme inside the href attribute to create a link that opens the user's email program </li>
                </ul>
                <h2>HTML Links - The target Attribute</h2>
                <p>By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link. The target attribute specifies where to open the linked document.</p>
                <h2>The target attribute can have one of the following values:</h2>
                <ul>
                    <li> _self - Default. Opens the document in the same window/tab as it was clicked</li>
                    <li> _blank - Opens the document in a new window or tab </li>
                    <li> _parent - Opens the document in the parent frame </li>
                    <li> _top - Opens the document in the full body of the window </li>
                </ul>
                <h2>HTML Image Tags</h2>
                <ul>
                    <li> &lt;img&gt; - Defines an image</li>
                    <li> &lt;map&gt; - Defines an image map </li>
                    <li> &lt;area&gt; - Defines a clickable area inside an image map </li>
                    <li> &lt;picture&gt; - Defines a container for multiple image resources </li>
                </ul>
                <h2>The HTML &lt;picture&gt; Element</h2>
                <p>The HTML &lt;picture&gt; element gives web developers more flexibility in specifying image resources. The &lt;picture&gt; element contains one or more &lt;source&gt; elements, each referring to different images through the srcset attribute. This way the browser can choose the image that best fits the current view and/or device. Each &lt;source&gt; element has a media attribute that defines when the image is the most suitable.</p>
                <h2>HTML Favicon</h2>
                <p>A favicon image is displayed to the left of the page title in the browser tab, like this:</p>
                <img  className = 'images21' src= {e6}/>
                <p>To add a favicon to your website, either save your favicon image to the root directory of your webserver, or create a folder in the root directory called images, and save your favicon image in this folder. A common name for a favicon image is "favicon.ico". Next, add a &lt;link&gt; element to your "index.html" file, after the &lt;title&gt; element</p>
                <h2>HTML Tables</h2>
                <p>HTML tables allow web developers to arrange data into rows and columns.</p>
                <h2>HTML Table Tags</h2>
                <ul>
                    <li> &lt;table&gt; - Defines a table</li>
                    <li> &lt;th&gt; - Defines a header cell in a table </li>
                    <li> &lt;tr&gt; - Defines a row in a table </li>
                    <li> &lt;td&gt; - Defines a cell in a table </li>
                    <li> &lt;caption&gt; - Defines a table caption</li>
                    <li> &lt;colgroup&gt; - Specifies a group of one or more columns in a table for formatting </li>
                    <li> &lt;col&gt; - Specifies column properties for each column within a &lt;colgroup&gt; element </li>
                    <li> You can add a caption that serves as a heading for the entire table. To add a caption to a table, use the &lt;caption&gt; tag </li>
                    <li> &lt;tbody&gt; - Groups the body content in a table </li>
                    <li> &lt;tfoot&gt; - Groups the footer content in a table </li>
                </ul>
                <img  className = 'images21' src= {e7}/>
                <h2>HTML Table guidelines</h2>
                <ul>
                    <li> To add a border, use the CSS border property on table, th, and td elements</li>
                    <li> To set the width of a table, add the style attribute to the &lt;table&gt; element:</li>
                    <li> You can have a header that spans over two or more columns. To do this, use the colspan attribute on the &lt;th&gt; element </li>
                    <li> Cell padding is the space between the cell edges and the cell content. By default the padding is set to 0. To add padding on table cells, use the CSS padding property </li>
                    <li> To make a cell span over multiple rows, use the rowspan attribute</li>
                    <li> styling tables is in the same way as all the elements in html </li>
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

export default Part1
