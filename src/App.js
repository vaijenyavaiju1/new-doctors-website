import './App.css';
import Navbar from './components/Navbar';

import Nabl from './components/Nabl';
import Who from './components/Who';
import Final from './components/Final'
import NavDetails from './components/NavDetails';


function App() {
  return (
    <div className="App">
      <Navbar />
      <NavDetails/>
      <Nabl/>
      <Who/>
      <Final/>
    </div>
  );
}

export default App;
