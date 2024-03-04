import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TopNav from './Component/TopNav';
import Leftnav from './Component/LeftNav';
import Main from './Pages/Main';
import Cart from './Pages/Cart';
import BottomTab from './Component/BottomTab';



// export CartContext = createContext();

function App() {
  return (
    <>
      <Router>
          <TopNav />
          <main>
            <Leftnav /> 
            <Main />
            <Cart />
            <BottomTab/>
          </main>   
          
      </Router>
    </>
  );
}

export default App;
