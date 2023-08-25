import React from 'react'
import './Part2.css'
import e1 from './e1.png'
import e2 from './e2.png'
import Navbar from '../../../components/Navbar/Navbar'

function Part2c() {
  return (
      <div>
      <body>
        <Navbar />
      <div class="sidenav sticky-to">
        <a href="/css/part1">Basics part 1</a>
        <a href="/css/part2">Basics part 2</a>
        <a href="/css/advancedpart1">Advanced part 1</a>
        <a href="/css/advancedpart2">Advanced part 2</a>
        <a href="/css/quiz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-block">
                <h2>CSS Tables</h2>
                <p>The look of an HTML table can be greatly improved with CSS.</p>
                <ul>
                    <li>To specify table borders in CSS, use the border property.</li>
                    <li>The table above might seem small in some cases. If you need a table that should span the entire screen (full-width), add width: 100% to the &lt;table&gt; element.</li>
                    <li>The border-collapse property sets whether the table borders should be collapsed into a single border.</li>
                    <li>The text-align property sets the horizontal alignment (like left, right, or center) of the content in &lt;th&gt; or &lt;td&gt;. By default, the content of &lt;th&gt; elements are center-aligned and the content of &lt;td&gt; elements are left-aligned.To center-align the content of  &lt;td&gt; elements as well, use text-align: center.</li>
                    <li>The vertical-align property sets the vertical alignment (like top, bottom, or middle) of the content in &lt;th&gt; or &lt;td&gt;. By default, the vertical alignment of the content in a table is middle (for both &lt;th&gt; and &lt;td&gt; elements). The following example sets the vertical text alignment to bottom for &lt;td&gt; elements.</li>
                    <li>To control the space between the border and the content in a table, use the padding property on &lt;td&gt; and &lt;th&gt; elements.</li>
                    <li>Use the :hover selector on &lt;tr&gt; to highlight table rows on mouse over.</li>
                    <li>Add the border-bottom property to &lt;th&gt; and &lt;td&gt; for horizontal dividers.</li>
                    <li>For zebra-striped tables, use the nth-child() selector and add a background-color to all even (or odd) table rows.</li>
                    <li>Add a container element (like &lt;div&gt;) with overflow-x:auto around the &lt;table&gt; element to make it responsive.</li>
                </ul>
                <h2>The display Property</h2>
                <p>The display property specifies if/how an element is displayed. Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.</p>
                <h2>CSS Layout - The position Property</h2>
                <p>The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).</p>
                <p><b>There are five different position values:</b></p>
                <ul>
                    <li>static</li>
                    <li>relative</li>
                    <li>fixed</li>
                    <li>absolute</li>
                    <li>sticky</li>
                </ul>
                <p><b>All CSS Positioning Properties</b></p>
                <ul>
                    <li>bottom - Sets the bottom margin edge for a positioned box</li>
                    <li>clip - Clips an absolutely positioned element</li>
                    <li>left - Sets the left margin edge for a positioned box</li>
                    <li>position - Specifies the type of positioning for an element</li>
                    <li>right - Sets the right margin edge for a positioned box</li>
                    <li>top - Sets the top margin edge for a positioned box</li>
                </ul>
                <h2>The z-index Property</h2>
                <p>The z-index property specifies the stack order of an element. When elements are positioned, they can overlap other elements. The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).</p>
                <h2>CSS Layout - Overflow</h2>
                <p>The CSS overflow property controls what happens to content that is too big to fit into an area. The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.</p>
                <p><b>The overflow property has the following values:</b></p>
                <ul>
                    <li>visible - Default. The overflow is not clipped. The content renders outside the element's box.</li>
                    <li>hidden - The overflow is clipped, and the rest of the content will be invisible.</li>
                    <li>scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content.</li>
                    <li>auto - Similar to scroll, but it adds scrollbars only when necessary.</li>
                </ul>
                <p><b>All CSS Overflow Properties:</b></p>
                <ul>
                    <li>overflow - Specifies what happens if content overflows an element's box.</li>
                    <li>overflow-wrap - Specifies whether or not the browser can break lines with long words, if they overflow its container.</li>
                    <li>overflow-x - Specifies what to do with the left/right edges of the content if it overflows the element's content area.</li>
                    <li>overflow-y	- Specifies what to do with the top/bottom edges of the content if it overflows the element's content area.</li>
                </ul>
                <h2>CSS Layout - float and clear</h2>
                <p>The CSS float property specifies how an element should float.</p>
                <p>The CSS clear property specifies what elements can float beside the cleared element and on which side.</p>
                <p><b>The float property can have one of the following values:</b></p>
                <ul>
                    <li>left - The element floats to the left of its container.</li>
                    <li>right - The element floats to the right of its container.</li>
                    <li>none - The element does not float (will be displayed just where it occurs in the text). This is default.</li>
                    <li>inherit - The element inherits the float value of its parent.</li>
                </ul>
                <p><b>The clear property can have one of the following values:</b></p>
                <ul>
                    <li>none - The element is not pushed below left or right floated elements. This is default.</li>
                    <li>left - The element is pushed below left floated elements.</li>
                    <li>right - The element is pushed below right floated elements.</li>
                    <li>inherit - The element inherits the clear value from its parent.</li>
                    <li>both - The element is pushed below both left and right floated elements.</li>
                </ul>
                <h2>CSS Combinators</h2>
                <p><b>There are four different combinators in CSS:</b></p>
                <ul>
                    <li>descendant selector (space).</li>
                    <li>child selector (&gt;).</li>
                    <li>adjacent sibling selector (+).</li>
                    <li>general sibling selector (~).</li>
                </ul>
                <h2>CSS Pseudo-classes</h2>
                <p>A pseudo-class is used to define a special state of an element.</p>
                <p><b>For example, it can be used to:</b></p>
                <ul>
                    <li>Style an element when a user mouses over it.</li>
                    <li>Style visited and unvisited links differently.</li>
                    <li>Style an element when it gets focus.</li>
                </ul>
                <h2>All CSS Pseudo Classes</h2>
                <img className = 'images3' src= {e1}/>
                <h2>All CSS Pseudo Elements</h2>
                <img className = 'images4' src= {e2}/>
                <h2>CSS The !important Rule</h2>
                <p>The !important rule in CSS is used to add more importance to a property/value than normal. In fact, if you use the !important rule, it will override ALL previous styling rules for that specific property on that element!</p>
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

export default Part2c
