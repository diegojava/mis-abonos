import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './components/Menu';
import ListOfCards from './components/ListOfCards';
import { Route, useLocation } from 'wouter';
import { useEffect } from 'react';
import NewPaymentModal from './components/NewPaymentModal';


function App() {
  const [location, setLocation] = useLocation();
  useEffect(() => {
    if (location === '/') setLocation('/home')
  })

  return (
    <div className="App">
      <Menu />
      <section className="App-content">
        <Route path='./home' component={ListOfCards} />
        <Route path='./add-new' component={NewPaymentModal} />
      </section>
    </div>
  );
}

export default App;
