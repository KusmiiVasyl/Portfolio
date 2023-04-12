import './App.css';
import Header from "./components/Header";
import {Person} from "./components/Person";


function App() {
  return (
    <div>
      <Header/>
      <Person/>
      <div style={{height: '2000px'}}></div>
    </div>
  );
}

export default App;
