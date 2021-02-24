import LandingPage from './components/LandingPage/LandingPage';
import { Switch, Route } from 'react-router-dom';
import LayoutOne from './containers/LayoutOne';
import ItemView from './components/common/ItemView/ItemView';
import CategoryView from './components/CategoryView/CategoryView';
import PageNotFound from './components/common/404/404';
import AdminPanel from './components/AdminPanel/AdminPanel';
import UserRoutes from './components/User/User';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <LayoutOne>
          <Switch>
            <Route path="/admin" component = {AdminPanel} />
            <Route path="/user" component={UserRoutes} />
            <Route path="/c" component={CategoryView} />
            <Route path="/id" component={ItemView} />
            <Route path="/404" component={PageNotFound} />
          </Switch>
        </LayoutOne>
      </Switch>
    </div>
  );
}

export default App;
