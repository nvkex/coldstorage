import LandingPage from './components/LandingPage/LandingPage';
import { Switch, Route } from 'react-router-dom';
import LayoutOne from './containers/LayoutOne';
import ItemView from './components/common/ItemView/ItemView';
import CategoryView from './components/CategoryView/CategoryView';
import PageNotFound from './components/common/404/404';
import AdminLogin from './components/AdminPanel/AdminLogin';
import AdminDashboard from './components/AdminPanel/Dashboard';
import NewEntryForm from './components/AdminPanel/NewEntryForm'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <LayoutOne>
          <Switch>
            <Route exact path="/admin/login" component = {AdminLogin} />
            <Route exact path="/admin/new-entry" component = {NewEntryForm} />
            <Route exact path="/admin/all-entries" component = {NewEntryForm} />
            <Route exact path="/admin" component = {AdminDashboard} />
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
