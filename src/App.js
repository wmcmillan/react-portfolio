import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Wrapper from './components/Wrapper/index';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
    </div>
  );
}

export default App;
