import './App.css';
import Column from './components/column/Column';

function App() {
  return (
    <div className="App">
      <Column progress="PLANNED" />
      <Column progress="ONGOING" />
      <Column progress="DONE" />
    </div>
  );
}

export default App;
