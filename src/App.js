import LandingPage from './components/LandingPage/LandingPage';
import { Switch, Route } from 'react-router-dom';
import LayoutOne from './containers/LayoutOne';

function App() {
  return (
    <div>
      <Switch>
          <Route path="/c" component={LayoutOne} />
          <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
