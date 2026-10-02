import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import AboutMe from './pages/AboutMe'
import Catering from './pages/Catering'
import CustomCakes from './pages/CustomCakes'
import Home from './pages/Home'
import Recipes from './pages/Recipes'

// Home, Recipes, Custom cakes, Catering and About me exist so far. The catch-all keeps the header and footer on the other
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
        <Route path="*" element={null} />
      </Route>
    </Routes>
  )
}

export default App
