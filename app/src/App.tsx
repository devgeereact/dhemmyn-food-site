import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import CustomCakes from './pages/CustomCakes'
import Home from './pages/Home'
import Recipes from './pages/Recipes'

// Home, Recipes and Custom cakes exist so far. The catch-all keeps the header and footer on the other
// addresses and shows an empty page until their pages are built.
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="custom-cakes" element={<CustomCakes />} />
        <Route path="*" element={null} />
      </Route>
    </Routes>
  )
}

export default App
