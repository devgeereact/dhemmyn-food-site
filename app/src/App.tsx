import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Recipes from './pages/Recipes'

// Home and Recipes exist so far. The catch-all keeps the header and footer on the other
// addresses and shows an empty page until their pages are built.
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="*" element={null} />
      </Route>
    </Routes>
  )
}

export default App
