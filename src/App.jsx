import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import AboutMe from './pages/AboutMe.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/sobre" element={<AboutMe />} />
    </Routes>
  )
}

export default App