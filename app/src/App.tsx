import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import AboutMe from './pages/AboutMe'
import Catering from './pages/Catering'
import Contact from './pages/Contact'
import CustomCakes from './pages/CustomCakes'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Order from './pages/Order'
import Privacy from './pages/Privacy'
import Recipes from './pages/Recipes'

// Every page sits inside one Layout. Any other address shows the Not found page.
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="custom-cakes" element={<CustomCakes />} />
        <Route path="catering" element={<Catering />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
