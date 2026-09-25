import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import VideoPlay from './pages/play';
import Question from './pages/question'
import Test from './pages/test'
import Test2 from './pages/test1'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='pt-18'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/video" element={<VideoPlay />} />
            <Route path="/question" element={<Question />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="*" element={<div className="text-center py-20 text-2xl">404 - ទំព័រមិនមាន</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App