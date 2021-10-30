import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import AddNewProduct from './components/pages/AddNewProducts';
import Home from "./components/pages/Home";
import ManageAllOrder from './components/pages/ManageAllOrder';
import NotFound from './components/pages/NotFound';
import Order from './components/pages/Order';
import SingleFood from './components/SingleFood';
import AuthProvider from "./contexts/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/home" component={Home}/>
          <Route  path="/order" component={Order}/>
          <Route  path="/manageOrder" component={ManageAllOrder}/>
          <Route  path="/addNewProduct" component={AddNewProduct}/>
          <Route  path="/foods/:id" component={SingleFood}/>
          <Route  path="*" component={NotFound}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

