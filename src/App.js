import './App.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import RatesContainer from './Rates/Rates';
import Exchange from './Exchange/Exchange';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="" element={<RatesContainer />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
