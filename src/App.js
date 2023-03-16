import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './components/Menu';
import ListOfCards from './components/ListOfCards';


function App() {
  return (
    <div className="App">
      <Menu />
      <section className="App-content">
        <ListOfCards />
      </section>
    </div>
  );
}

export default App;
