import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Wrapper from './components/Wrapper/index';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
    </div>
    </Router>
  );
}

export default App;
