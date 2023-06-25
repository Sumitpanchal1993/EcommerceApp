import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TopNav from './Component/TopNav';
import Leftnav from './Component/LeftNav';
import Main from './Pages/Main';
import Cart from './Pages/Cart';
import BottomTab from './Component/BottomTab';
import Demo from './Component/Demo';


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
          <Demo/>
      </Router>
    </>
  );
}

export default App;
