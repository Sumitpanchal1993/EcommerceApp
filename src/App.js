import './App.css';
import TopNav from './Component/TopNav';
import Leftnav from './Component/LeftNav';
import Main from './Pages/Main';
import Cart from './Pages/Cart';

function App() {
  return (
    <>
        <TopNav/>
        <main>
        <Leftnav/>
        <Main/>
        <Cart/>
        </main>

      

    </>
  );
}

export default App;
