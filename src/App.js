import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Services } from './components/Services';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Services/>
    </div>
  );
}

export default App;
