import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { QuemSomos } from './pages/QuemSomos';
import { Servicos } from './pages/Servicos';
import { Contato } from './pages/Contato';
const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />
                <Route 
                    path='/quemsomos'
                    element={<QuemSomos />}
                />
                <Route 
                    path='/servicos'
                    element={<Servicos />}
                />
                <Route
                    path='/Contato'
                    element={<Contato/>}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;