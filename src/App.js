import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Courses_static } from './components/Courses_static';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Courses_static/>
    </div>
  );
}

export default App;
