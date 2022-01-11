import { Routes, Route } from "react-router-dom";

import GlobalState from "./GlobalState";

import "./App.scss";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-custom.css";

import Overlay from "./components/Overlay/Overlay";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Home from "./pages/Home";
import Converse from "./pages/Converse";
import Vans from "./pages/Vans";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <GlobalState>
      <Logo />
      <Overlay />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/converse" element={<Converse />}></Route>
        <Route path="/vans" element={<Vans />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </GlobalState>
  );
}

export default App;
