import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokeIdPage from './pages/PokeIdPage'

function App() {

  return (
    <div>
      <Routes>        
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/pokedex/:id" element={<PokeIdPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
