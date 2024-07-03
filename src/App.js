import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopNav from "./Component/TopNav";
import Leftnav from "./Component/LeftNav";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import Profile from "./Pages/Profile";
import AllProducts from "./Pages/AllProducts";
import Orders from "./Pages/Orders";

// export CartContext = createContext();

function App() {
  return (
    <>
      <Router>
        <header>
          <TopNav />
        </header>
        <main>
          <Leftnav />
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/cart"} element={<Cart />}></Route>
            <Route path={"/myprofile"} element={<Profile />}></Route>
            <Route path={"/products"} element={<AllProducts />}></Route>
            <Route path={"/order"} element={<Orders />}></Route>
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </>
  );
}

export default App;
