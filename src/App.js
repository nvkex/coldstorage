import LandingPage from './components/LandingPage/LandingPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/anime" component={LandingPage} />
          <Route exact path="/tv" component={LandingPage} />
          <Route exact path="/torrents" component={LandingPage} />
          <Route exact path="/movies" component={LandingPage} />
          <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
