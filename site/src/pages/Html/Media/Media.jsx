import React from 'react'
import './Media.css'
import e1 from './e1.png'
import Navbar from '../../../components/Navbar/Navbar'
import NavbarMini from '../../../components/NavbarMini/NavbarMini';
import { useEffect,useState } from 'react'

function Media() {
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
      <div class="sidenavv sticky-to" style={{width : '120px'}}>
      <a href="/html/part1">Basics part 1</a>
        <a href="/html/part2">Basics part 2</a>
        <a href="/html/forms">Forms</a>
        <a href="/html/media">Media</a>
        <a href="/html/apis">Apis</a>
        <a href="/html/quizz">Quiz</a>
      </div>
      <div class="container px-9 px-lg-30">
            <div class="white-text-blockmedia">
                <h2>HTML Canvas Graphics</h2>
                <p>The HTML &lt;canvas&gt; element is used to draw graphics, on the fly, via JavaScript. The &lt;canvas&gt; element is only a container for graphics. You must use JavaScript to actually draw the graphics. Canvas has several methods for drawing paths, boxes, circles, text, and adding images.</p>
                <h2>HTML SVG Graphics</h2>
                <p>SVG defines vector-based graphics in XML format. The HTML &lt;svg&gt; element is a container for SVG graphics. SVG has several methods for drawing paths, boxes, circles, text, and graphic images.</p>
                <p><b>Differences Between SVG and Canvas</b></p>
                <img  className = 'imagesmedia' src= {e1}/>
                <h2>HTML Multimedia</h2>
                <p>Multimedia comes in many different formats. It can be almost anything you can hear or see, like images, music, sound, videos, records, films, animations, and more. Web pages often contain multimedia elements of different types and formats. The first web browsers had support for text only, limited to a single font in a single color. Later came browsers with support for colors, fonts, images, and multimedia. Multimedia elements (like audio or video) are stored in media files.
                    The most common way to discover the type of a file, is to look at the file extension. Multimedia files have formats and different extensions like: .wav, .mp3, .mp4, .mpg, .wmv, and .avi.</p>
                <p><b>HTML Video</b></p>
                <p> The controls attribute adds video controls, like play, pause, and volume. It is a good idea to always include width and height attributes. If height and width are not set, the page might flicker while the video loads.
                    The &lt;source&gt; element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format. The text between the &lt;video&gt; and &lt;/video&gt; tags will only be displayed in browsers that do not support the &lt;video&gt; element.</p>
                <p><b>HTML Video</b></p>
                <p>The controls attribute adds audio controls, like play, pause, and volume. The &lt;source&gt; element allows you to specify alternative audio files which the browser may choose from. The browser will use the first recognized format. The text between the &lt;audio&gt; and &lt;/audio&gt; tags will only be displayed in browsers that do not support the  &lt;audio&gt; element.</p>
                <p><b>HTML YouTube Videos</b></p>
                <p>To play your video on a web page, do the following:</p>
                <ul>
                    <li>Upload the video to YouTube</li>
                    <li>Take a note of the video id</li>
                    <li>Define an &lt;iframe&gt; element in your web page</li>
                    <li>Let the src attribute point to the video URL</li>
                    <li>Use the width and height attributes to specify the dimension of the player</li>
                    <li>Add any other parameters to the URL (see below)</li>
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

export default Media
