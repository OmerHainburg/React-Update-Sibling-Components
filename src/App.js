import './App.css';
import { Parent } from './Parent';

function App() {
  const h1 = <h1>One Sibling to Display, Another to Change</h1>
  return (
    <div className="App">
      <header className="App-header">
        {h1}
        <Parent />
      </header>
    </div>
  );
}

export default App;
