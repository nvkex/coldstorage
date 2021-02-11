import LandingPage from './components/LandingPage/LandingPage';
import { Switch, Route } from 'react-router-dom';
import LayoutOne from './containers/LayoutOne';
import ItemView from './components/common/ItemView/ItemView';
import CategoryView from './components/CategoryView/CategoryView';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <LayoutOne>
          <Route path="/c" component={CategoryView} />
          <Route exact path="/id" component={ItemView} />
        </LayoutOne>

      </Switch>
    </div>
  );
}

export default App;
