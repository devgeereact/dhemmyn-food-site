import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'

// Only Home exists so far. The catch-all keeps the header and footer on the other
// addresses and shows an empty page until their pages are built.
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={null} />
      </Route>
    </Routes>
  )
}

export default App
