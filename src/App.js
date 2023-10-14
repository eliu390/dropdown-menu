import './App.css';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown header="Not big data" isBigData={false}/>
      <Dropdown header="Big data" isBigData={true}/>
    </div>
  );
}

export default App;
