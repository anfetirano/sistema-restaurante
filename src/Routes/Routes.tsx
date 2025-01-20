import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Inventario from '../Pages/Inventario'
import Pedidos from '../Pages/Pedidos'
import Preelaboraciones from '../Pages/Preelaboraciones'
import Configuracion from '../Pages/Configuracion'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/preelaboraciones" element={<Preelaboraciones />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes