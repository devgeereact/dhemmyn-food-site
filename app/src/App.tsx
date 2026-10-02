import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import AboutMe from './pages/AboutMe'
import Catering from './pages/Catering'
import Contact from './pages/Contact'
import CustomCakes from './pages/CustomCakes'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Recipes from './pages/Recipes'

// Every page exists except Not found. The catch-all keeps the header and footer on the other
// addresses and shows an empty page until their pages are built.
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="custom-cakes" element={<CustomCakes />} />
        <Route path="catering" element={<Catering />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={null} />
      </Route>
    </Routes>
  )
}

export default App
