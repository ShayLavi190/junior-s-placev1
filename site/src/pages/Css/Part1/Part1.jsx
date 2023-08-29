import React from 'react'
import './Part1.css'
import e1 from './e1.gif'
import e2 from './e2.png'
import e3 from './e3.png'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'

function Part1c() {
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
        <a href="/css/part1">Basics part 1</a>
        <a href="/css/part2">Basics part 2</a>
        <a href="/css/advancedpart1">Advanced part 1</a>
        <a href="/css/advancedpart2">Advanced part 2</a>
        <a href="/css/quiz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-blockcs">
                <h2>What is CSS?</h2>
                <ul>
                    <li>CSS stands for Cascading Style Sheets</li>
                    <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
                    <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
                    <li>External stylesheets are stored in CSS files</li>
                </ul>
                <h2>Why Use CSS?</h2>
                <p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
                <h2>CSS Syntax</h2>
                <p>The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon. Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</p>
                <img className = 'imagecs' src= {e1}/>
                <h2>CSS Selectors</h2>
                <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
                <h2>We can divide CSS selectors into five categories:</h2>
                <ul>
                    <li>Simple selectors (select elements based on name, id, class)</li>
                    <li>Combinator selectors (select elements based on a specific relationship between them)</li>
                    <li>Pseudo-class selectors (select elements based on a certain state)</li>
                    <li>Pseudo-elements selectors (select and style a part of an element)</li>
                    <li>Attribute selectors (select elements based on an attribute or attribute value)</li>
                </ul>
                <h2>CSS Simple Selectors</h2>
                <ul>
                    <li>#id - Selects the element with id="firstname"</li>
                    <li>.class - Selects all elements with class="intro"</li>
                    <li>element.class - Selects only &lt;p&gt; elements with class="intro"</li>
                    <li> * - Selects all elements</li>
                    <li>element - Selects all &lt;p&gt; elements</li>
                    <li>element,element,.. - Selects all &lt;div&gt; elements and all &lt;p&gt; elements</li>
                </ul>
                <h2>How To Add CSS</h2>
                <ul>
                    <li>External CSS - With an external style sheet, you can change the look of an entire website by changing just one file.</li>
                    <li>Internal CSS - An internal style sheet may be used if one single HTML page has a unique style.</li>
                    <li>Inline CSS - An inline style may be used to apply a unique style for a single element.</li>
                </ul>
                <img className = 'imagecs' src= {e2}/>
                <h2>CSS Colors</h2>
                <p>Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>
                <h2>CSS Backgrounds</h2>
                <p>The CSS background properties are used to add background effects for elements.</p>
                <ul>
                    <li>The background-color property specifies the background color of an element.</li>
                    <li>The opacity property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent.</li>
                    <li>The background-image property specifies an image to use as the background of an element. By default, the image is repeated so it covers the entire element.</li>
                    <li>The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page).</li>
                    <li>background-position Sets the starting position of a background image</li>
                    <li>background-repeat Sets how a background image will be repeated</li>
                </ul>
                <h2>CSS Borders</h2>
                <p>The CSS border properties allow you to specify the style, width, and color of an element's border.</p>
                <p><b>CSS Border Style: </b></p>
                <ul>
                    <li>dotted - Defines a dotted border</li>
                    <li>dashed - Defines a dashed border</li>
                    <li>solid - Defines a solid border</li>
                    <li>double - Defines a double border</li>
                    <li>groove - Defines a 3D grooved border. The effect depends on the border-color value</li>
                    <li>ridge - Defines a 3D ridged border. The effect depends on the border-color value</li>
                    <li>inset - Defines a 3D inset border. The effect depends on the border-color value</li>
                    <li>outset - Defines a 3D outset border. The effect depends on the border-color value</li>
                    <li>none - Defines no border</li>
                    <li>hidden - Defines a hidden border</li>
                </ul>
                <ul>
                    <li>The border-width property specifies the width of the four borders.</li>
                    <li>The border-color property is used to set the color of the four borders.</li>
                    <li>The border-radius property is used to add rounded borders to an element.</li>
                    <li>The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page).</li>
                    <li>background-position Sets the starting position of a background image</li>
                    <li>background-repeat Sets how a background image will be repeated</li>
                </ul>
                <h2>CSS Margins</h2>
                <p>Margins are used to create space around elements, outside of any defined borders.</p>
                <p>All CSS Margin Properties</p>
                <ul>
                    <li>margin - A shorthand property for setting all the margin properties in one declaration.</li>
                    <li>margin-bottom - Sets the bottom margin of an element.</li>
                    <li>margin-top - Sets the top margin of an element.</li>
                    <li>margin-left - Sets the left margin of an element.</li>
                    <li>margin-right - Sets the right margin of an element.</li>
                </ul>
                <h2>CSS Padding</h2>
                <p>The CSS padding properties are used to generate space around an element's content, inside of any defined borders. With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).</p>
                <p><b>All CSS Padding Properties</b></p>
                <ul>
                    <li>padding - A shorthand property for setting all the padding properties in one declaration.</li>
                    <li>padding-bottom - Sets the bottom padding of an element.</li>
                    <li>padding-top - Sets the top padding of an element.</li>
                    <li>padding-left - Sets the left padding of an element.</li>
                    <li>padding-right - Sets the right padding of an element.</li>
                </ul>
                <h2>CSS Height, Width and Max-width</h2>
                <p>The CSS height and width properties are used to set the height and width of an element. The CSS max-width property is used to set the maximum width of an element.</p>
                <p><b>All CSS Dimension Properties :</b></p>
                <ul>
                    <li>height - Sets the height of an element.</li>
                    <li>max-height - Sets the maximum height of an element.</li>
                    <li>min-height - Sets the minimum height of an element.</li>
                    <li>width - Sets the width of an element.</li>
                    <li>max-width - Sets the maximum width of an element.</li>
                    <li>min-width - Sets the minimum width of an element.</li>
                </ul>
                <h2>The CSS Box Model</h2>
                <p>In CSS, the term "box model" is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:</p>
                <img className = 'imagecs' src= {e3}/>
                <h2>CSS Outline</h2>
                <p>An outline is a line drawn outside the element's border.</p>
                <p><b>CSS Outline Styles:</b></p>
                <ul>
                    <li>dotted - Defines a dotted outline</li>
                    <li>dashed - Defines a dashed outline</li>
                    <li>solid - Defines a solid outline</li>
                    <li>double - Defines a double outline</li>
                    <li>groove - Defines a 3D grooved outline</li>
                    <li>ridge - Defines a 3D ridged outline</li>
                    <li>inset - Defines a 3D inset outline</li>
                    <li>outset - Defines a 3D outset outline</li>
                    <li>none - Defines no outline</li>
                    <li>hidden - Defines a hidden outline</li>
                </ul>
                <ul>
                    <li>The outline-width property specifies the width of the outline.</li>
                    <li>The outline-color property is used to set the color of the outline.</li>
                    <li>The outline-offset property adds space between an outline and the edge/border of an element. The space between an element and its outline is transparent.</li>
                </ul>
                <h2>CSS Text</h2>
                <p>CSS has a lot of properties for formatting text.</p>
                <p><b>The CSS Text  Properties :</b></p>
                <ul>
                    <li>color - Specifies the color of text.</li>
                    <li>direction - Specifies the text direction/writing direction.</li>
                    <li>text-align - Specifies the horizontal alignment of text.</li>
                    <li>text-align-last	- Specifies how to align the last line of a text.</li>
                    <li>unicode-bidi - Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document.</li>
                    <li>vertical-align - Sets the vertical alignment of an element.</li>
                    <li>text-decoration-color - Specifies the color of the text-decoration.</li>
                    <li>text-decoration-line - Specifies the kind of text decoration to be used (underline, overline, etc.).</li>
                    <li>text-decoration-style - Specifies the style of the text decoration (solid, dotted, etc.).</li>
                    <li>text-decoration-thickness - Specifies the thickness of the text decoration line.</li>
                    <li>text-transform - Controls the capitalization of text.</li>
                    <li>letter-spacing - Specifies the space between characters in a text.</li>
                    <li>line-height	- Specifies the line height.</li>
                    <li>text-indent	- Specifies the indentation of the first line in a text-block.</li>
                    <li>white-space	Specifies - how to handle white-space inside an element.</li>
                    <li>word-spacing - Specifies the space between words in a text.</li>
                    <li>text-shadow	- Specifies the shadow effect added to text.</li>
                </ul>
                <h2>CSS Fonts</h2>
                <p>Choosing the right font has a huge impact on how the readers experience a website.</p>
                <p>In CSS, we use the font-family property to specify the font of a text.</p>
                <p><b>Generic Font Families :</b></p>
                <ul>
                    <li>Serif fonts have a small stroke at the edges of each letter. They create a sense of formality and elegance.</li>
                    <li>Sans-serif fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.</li>
                    <li>Monospace fonts - here all the letters have the same fixed width. They create a mechanical look.</li>
                    <li>Cursive fonts imitate human handwriting.</li>
                    <li>Fantasy fonts are decorative/playful fonts.</li>
                </ul>
                <h2>CSS Web Safe Fonts</h2>
                <p>Web safe fonts are fonts that are universally installed across all browsers and devices.</p>
                <ul>
                    <li>Arial (sans-serif)</li>
                    <li>Verdana (sans-serif)</li>
                    <li>Tahoma (sans-serif)</li>
                    <li>Trebuchet MS (sans-serif)</li>
                    <li>Courier New (monospace)</li>
                    <li>Brush Script MT (cursive)</li>
                    <li>Garamond (serif)</li>
                    <li>Times New Roman (serif)</li>
                    <li>Georgia (serif)</li>
                </ul>
                <h2>CSS Font Style</h2>
                <p>The font-style property is mostly used to specify italic text.</p>
                <p>This property has three values:</p>
                <ul>
                    <li>normal - The text is shown normally.</li>
                    <li>italic - The text is shown in italics.</li>
                    <li>oblique - The text is "leaning" (oblique is very similar to italic, but less supported).</li>
                </ul>
                <ul>
                    <li>The font-weight property specifies the weight of a font.</li>
                    <li>The font-variant property specifies whether or not a text should be displayed in a small-caps font.</li>
                    <li>The font-size property sets the size of the text.</li>
                </ul>
                <h2>Google Fonts</h2>
                <p>If you do not want to use any of the standard fonts in HTML, you can use Google Fonts. Google Fonts are free to use, and have more than 1000 fonts to choose from. Just add a special style sheet link in the &lt;head&gt; section and then refer to the font in the CSS.</p>
                <h2>CSS Icons</h2>
                <p>Icons can easily be added to your HTML page, by using an icon library. The simplest way to add an icon to your HTML page, is with an icon library, such as Font Awesome. Add the name of the specified icon class to any inline HTML element (like &lt;i&gt; or &lt;span&gt;). All the icons in the icon libraries below, are scalable vectors that can be customized with CSS (size, color, shadow, etc.)</p>
                <h2>CSS Links</h2>
                <p>With CSS, links can be styled in many different ways. Links can be styled with any CSS property (e.g. color, font-family, background, etc.).</p>
                <p><b>In addition, links can be styled differently depending on what state they are in. The four links states are:</b></p>
                <ul>
                    <li>a:link - a normal, unvisited link</li>
                    <li>a:visited - a link the user has visited</li>
                    <li>a:hover - a link when the user mouses over it</li>
                    <li>a:active - a link the moment it is clicked</li>
                </ul>
                <h2>CSS Lists</h2>
                <p>In HTML, there are two main types of lists, unordered lists and ordered lists.</p>
                <p><b>The CSS list properties allow you to:</b></p>
                <ul>
                    <li>Set different list item markers for ordered lists.</li>
                    <li>Set different list item markers for unordered lists.</li>
                    <li>Set an image as the list item marker.</li>
                    <li>Add background colors to lists and list items.</li>
                </ul>
                <p><b>All CSS List Properties:</b></p>
                <ul>
                    <li>list-style sets all the properties for a list in one declaration.</li>
                    <li>The list-style-type property specifies the type of list item marker.</li>
                    <li>The list-style-image property specifies an image as the list item marker.</li>
                    <li>The list-style-position property specifies the position of the list-item markers (bullet points).</li>
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

export default Part1c
