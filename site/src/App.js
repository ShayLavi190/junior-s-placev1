import About from "./pages/About/About";
import HomePage from "./pages/Hompage/HomePage";
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import Html from "./pages/Html/Html";
import Css from "./pages/Css/Css";
import Js from "./pages/Js/Js";
import Reactt from "./pages/React/Reactt";
import Explore from "./pages/Explore/Explore";
import Part1 from "./pages/Html/Part 1/Part1";
import Part2 from "./pages/Html/Part 2/Part2";
import Forms from "./pages/Html/Forms/Forms";
import Apis from "./pages/Html/Apis/Apis";
import Media from "./pages/Html/Media/Media";
import Quizz from "./pages/Html/Quizz/Quizz";
import Part1c from "./pages/Css/Part1/Part1";
import Part2c from "./pages/Css/Part2/Part2";
import Apart1 from "./pages/Css/Apart1/Apart1";
import Apart2 from "./pages/Css/Apart2/Apart2";
import QuizCss from "./pages/Css/Quiz/QuizCss";
import Part1j from "./pages/Js/Part1/Part1j";
import Part2j from "./pages/Js/Part2/Part2j";
import Aysnc from "./pages/Js/Async/Async";
import Apisj from "./pages/Js/Apis/Apis";
import Ajax from "./pages/Js/Ajax/Ajax";
import Jad from "./pages/Js/Jad/Jad";
import Quizj from "./pages/Js/Quiz/Quiz.jsx";
import Part1n from "./pages/Nodejs/Part 1/Part1";
import Part2n from "./pages/Nodejs/Part 2/Part2";
import Nodejs from "./pages/Nodejs/Nodejs";
import MySql from "./pages/Nodejs/MySql/MySql";
import Mongodb from "./pages/Nodejs/Mongodb/Mongodb";
import Quizn from "./pages/Nodejs/Quizn/Quizz";
import Part1r from "./pages/React/Part1/Part1r";
import Part2r from "./pages/React/Part2/Part2r";
import Hooks from "./pages/React/Hooks/Hooks";
import Redux from "./pages/React/Redux/Redux";
import Axios from "./pages/React/Axios/Axios";
import Quizr from "./pages/React/Quiz/Quizr";
import Tools from "./pages/Explore/Tools/Tools";
import Tips from "./pages/Explore/Tips/Tips";
import Courses from "./pages/Explore/Courses/Courses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/html" element={<Html />} />
        <Route path="/js" element={<Js />} />
        <Route path="/css" element={<Css />} />
        <Route path="/react" element={<Reactt />} />
        <Route path="/nodejs" element={<Nodejs />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/html/part1" element={<Part1 />} />
        <Route path="/html/part2" element={<Part2 />} />
        <Route path="/html/forms" element={<Forms />} />
        <Route path="/html/apis" element={<Apis />} />
        <Route path="/html/media" element={<Media />} />
        <Route path="/html/quizz" element={<Quizz />} />
        <Route path="/css/part1" element={<Part1c />} />
        <Route path="/css/part2" element={<Part2c />} />
        <Route path="/css/advancedpart1" element={<Apart1 />} />
        <Route path="/css/advancedpart2" element={<Apart2 />} />
        <Route path="/css/quiz" element={<QuizCss />} />
        <Route path="/js/part1" element={<Part1j />} />
        <Route path="/js/part2" element={<Part2j />} />
        <Route path="/js/Async" element={<Aysnc />} />
        <Route path="/js/Apis" element={<Apisj />} />
        <Route path="/js/AJAX" element={<Ajax />} />
        <Route path="/js/jQueryandDOM" element={<Jad />} />
        <Route path="/js/quizz" element={<Quizj />} />
        <Route path="/nodejs/part1" element={<Part1n />} />
        <Route path="/nodejs/part2" element={<Part2n />} />
        <Route path="/nodejs/mysql" element={<MySql />} />
        <Route path="/nodejs/mongodb" element={<Mongodb />} />
        <Route path="/nodejs/quizz" element={<Quizn />} />
        <Route path="/react/part1" element={<Part1r />} />
        <Route path="/react/part2" element={<Part2r />} />
        <Route path="/react/hooks" element={<Hooks />} />
        <Route path="/react/redux" element={<Redux />} />
        <Route path="/react/axios" element={<Axios />} />
        <Route path="/react/quizz" element={<Quizr />} />
        <Route path="/explore/tools" element={<Tools />} />
        <Route path="/explore/tips" element={<Tips />} />
        <Route path="/explore/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
