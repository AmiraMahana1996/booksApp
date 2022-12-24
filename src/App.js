
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/Routes';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <Routes />
        </div>
      </Router>
    </>
  );
}

export default App;
