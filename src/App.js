import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

import { Home } from './pages/home';
import { HomeLogado} from './pages/home-logado';
import { Login } from './pages/login';
import { SignUp } from "./pages/signup";
import { AddType } from "./pages/addType";
import { AddProduct } from "./pages/addProduct";
import { Types } from "./pages/types";
import { Products } from "./pages/products";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logado" element={<HomeLogado />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/type" element={<AddType/>} />
        <Route path="/types" element={<Types/>} />
        <Route path="/product" element={<AddProduct/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </Router>
  );
}

export default App;
