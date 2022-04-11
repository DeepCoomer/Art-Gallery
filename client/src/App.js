import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Arts from './Components/Arts';
import ArtDetail from './Components/ArtDetail';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/arts">
            <Arts />
          </Route>
          <Route exact path="/art/:id">
            <ArtDetail />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
