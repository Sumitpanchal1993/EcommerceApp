import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopNav from './Component/TopNav';
import Leftnav from './Component/LeftNav';
import Main from './Pages/Main';
import Cart from './Pages/Cart';




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
           <Route path={'/cart'} element={<Cart/>}></Route>
        </Routes>
            {/* <Main /> */}
          </main>
          <footer>

          </footer>   
          
      </Router>
    </>
  );
}

export default App;
