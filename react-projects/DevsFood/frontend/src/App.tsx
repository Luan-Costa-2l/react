import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tooltip } from 'react-tooltip'

import { Container, Menu, PageBody } from './AppStyled'

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from "./pages/Tela2Screen";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { RequireAuth } from "./components/RequireAuth";

import MenuItem from './components/MenuItem';
import Cart from "./components/Cart";

const App = () => {

  const name = useAppSelector(state => state.user.name)

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem itemId='1' title="Loja" icon="src/assets/store.png" link="/" />
          <MenuItem itemId='2' title="Pedidos" icon="src/assets/order.png" link="/orders" />
          <MenuItem itemId='3' title="Meu Perfil" icon="src/assets/profile.png" link="/profile" />
        </Menu>
        <PageBody>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/orders" element={<RequireAuth><div>Tela de pedidos</div></RequireAuth>} />
            <Route path="/profile" element={<RequireAuth><div>Tela de Perfil</div></RequireAuth>} />
            <Route path="/tela2/:nome" element={<Tela2Screen />} />
          </Routes>
        </PageBody>
        <Cart />
      </Container>
    </BrowserRouter>
  )
}

export default App;