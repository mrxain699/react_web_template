import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './WebPages/Home';
import About from './WebPages/About';
import Services from './WebPages/Services';
import Help from './WebPages/Help';
import Contact from './WebPages/Contact';
import './Web/style.css';
import './Web/media.css';
function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </>
  );
}

export default App;
