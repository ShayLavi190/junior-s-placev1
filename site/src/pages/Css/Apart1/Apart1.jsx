import React from 'react'
import './Apart1.css'
import e1 from './e1.png'
import Navbar from '../../../components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import NavbarMini from '../../../components/NavbarMini/NavbarMini'
function Apart1() {
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
                <h2>CSS Rounded Corners</h2>
                <p>The CSS border-radius property defines the radius of an element's corners.</p>
                <h2>CSS Border Images</h2>
                <p>The CSS border-image property allows you to specify an image to be used instead of the normal border around an element.</p>
                <p><b>CSS Border Image Properties</b></p>
                <ul>
                    <li>border-image - A shorthand property for setting all the border-image-* properties.</li>
                    <li>border-image-source	- Specifies the path to the image to be used as a border.</li>
                    <li>border-image-slice - Specifies how to slice the border image.</li>
                    <li>border-image-width - Specifies the widths of the border image.</li>
                    <li>border-image-outset	- Specifies the amount by which the border image area extends beyond the border box.</li>
                    <li>border-image-repeat	- Specifies whether the border image should be repeated, rounded or stretched.</li>
                </ul>
                <h2>CSS Multiple Backgrounds</h2>
                <p>CSS allows you to add multiple background images for an element, through the background-image property. The different background images are separated by commas, and the images are stacked on top of each other, where the first image is closest to the viewer.</p>
                <ul>
                    <li>The CSS background-size property allows you to specify the size of background images.</li>
                    <li>The two other possible values for background-size are contain and cover.</li>
                    <li>The CSS background-clip property specifies the painting area of the background.</li>
                    <li>The CSS background-origin property specifies where the background image is positioned.</li>
                </ul>
                <h2>CSS Gradients</h2>
                <p>CSS gradients let you display smooth transitions between two or more specified colors.</p>
                <p><b>CSS defines three types of gradients:</b></p>
                <ul>
                    <li>Linear Gradients (goes down/up/left/right/diagonally).</li>
                    <li>Radial Gradients (defined by their center).</li>
                    <li>Conic Gradients (rotated around a center point).</li>
                </ul>
                <h2>CSS Shadow Effects</h2>
                <p>With CSS you can add shadow to text and to elements.</p>
                <p>The CSS text-shadow property applies shadow to text.</p>
                <p>The CSS box-shadow property is used to apply one or more shadows to an element. You can also use the box-shadow property to create paper-like cards.</p>
                <h2>CSS Text Effects</h2>
                <p><b>The following table lists the CSS text effect properties:</b></p>
                <ul>
                    <li>text-justify - Specifies how justified text should be aligned and spaced.</li>
                    <li>text-overflow - Specifies how overflowed content that is not displayed should be signaled to the user.</li>
                    <li>word-break - Specifies line breaking rules for non-CJK scripts.</li>
                    <li>word-wrap - Allows long words to be able to be broken and wrap onto the next line</li>
                    <li>writing-mode - Specifies whether lines of text are laid out horizontally or vertically.</li>
                </ul>
                <h2>CSS 2D Transforms</h2>
                <p>CSS transforms allow you to move, rotate, scale, and skew elements. Mouse over the element below to see a 2D transformation.</p>
                <p><b>CSS Transform Properties:</b></p>
                <ul>
                    <li>transform - Applies a 2D or 3D transformation to an element.</li>
                    <li>transform-origin - Allows you to change the position on transformed elements.</li>
                </ul>
                <p><b>CSS 2D Transform Methods:</b></p>
                <ul>
                    <li>matrix(n,n,n,n,n,n) - Defines a 2D transformation, using a matrix of six values.</li>
                    <li>translate(x,y) - Defines a 2D translation, moving the element along the X- and the Y-axis.</li>
                    <li>translateX(n) - Defines a 2D translation, moving the element along the X-axis.</li>
                    <li>translateY(n) - Defines a 2D translation, moving the element along the Y-axis.</li>
                    <li>scale(x,y) - Defines a 2D scale transformation, changing the elements width and height.</li>
                    <li>scaleX(n) - Defines a 2D scale transformation, changing the element's width.</li>
                    <li>scaleY(n) - Defines a 2D scale transformation, changing the element's height.</li>
                    <li>skew(x-angle,y-angle) - Defines a 2D skew transformation along the X- and the Y-axis.</li>
                    <li>skewX(angle) - Defines a 2D skew transformation along the X-axis.</li>
                    <li>skewY(angle) - Defines a 2D skew transformation along the Y-axis.</li>
                </ul>
                <h2>CSS 3D Transforms</h2>
                <p>CSS also supports 3D transformations. Mouse over the elements below to see the difference between a 2D and a 3D transformation</p>
                <p><b>CSS 3D Transform Properties and Methods</b></p>
                <img className = 'imagecs1' src= {e1}/>
                <h2>CSS Transitions</h2>
                <p>CSS transitions allows you to change property values smoothly, over a given duration.</p>
                <p><b>CSS Transition Properties:</b></p>
                <ul>
                    <li>transition - A shorthand property for setting the four transition properties into a single property.</li>
                    <li>transition-delay - Specifies a delay (in seconds) for the transition effect.</li>
                    <li>transition-duration - Specifies how many seconds or milliseconds a transition effect takes to complete.</li>
                    <li>transition-property	- Specifies the name of the CSS property the transition effect is for.</li>
                    <li>transition-timing-function - Specifies the speed curve of the transition effect.</li>
                </ul>
                <h2>CSS Animations</h2>
                <p>An animation lets an element gradually change from one style to another. You can change as many CSS properties you want, as many times as you want. To use CSS animation, you must first specify some keyframes for the animation. Keyframes hold what styles the element will have at certain times.</p>
                <p><b>CSS Animation Properties:</b></p>
                <ul>
                    <li>@keyframes - Specifies the animation code.</li>
                    <li>animation - A shorthand property for setting all the animation properties.</li>
                    <li>animation-delay	- Specifies a delay for the start of an animation.</li>
                    <li>animation-direction	- Specifies whether an animation should be played forwards, backwards or in alternate cycles.</li>
                    <li>animation-duration - Specifies how long time an animation should take to complete one cycle.</li>
                    <li>animation-fill-mode	- Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both).</li>
                    <li>animation-iteration-count - Specifies the number of times an animation should be played.</li>
                    <li>animation-name - Specifies the name of the @keyframes animation.</li>
                    <li>animation-play-state - Specifies whether the animation is running or paused.</li>
                    <li>animation-timing-function - Specifies the speed curve of the animation.</li>
                </ul>
                <p><b>CSS Object-* Properties</b></p>
                <ul>
                    <li>object-fit - Specifies how an &lt;img&gt; or &lt;video&gt; should be resized to fit its container.</li>
                    <li>oobject-position - Specifies how an &lt;img&gt; or &lt;video&gt; should be positioned with x/y coordinates inside its "own content box".</li>
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

export default Apart1
