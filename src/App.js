import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Authentication/Login';
import AuthProvider from './Context/AuthProvider';
import Packages from './Components/Home/Packages/Packages';
import BookingPackage from './Components/Home/Packages/BookingPackage/BookingPackage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import About from './Components/Home/About/About';
import Footer from './Components/Footer/Footer';
import MyOrders from './Components/Dashboard/MyOrders/MyOrders';
import AllOrders from './Components/Dashboard/AllOrders/AllOrders';
import AddPackages from './Components/Dashboard/AddPackages/AddPackages';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      {/* wrapped with context */}
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/"><Home></Home></Route>
            <Route path="/home"><Home></Home></Route>
            <Route path="/login"><Login></Login></Route>
            <Route path="/packages"><Packages></Packages></Route>
            <PrivateRoute path="/package/:id"> <BookingPackage></BookingPackage></PrivateRoute>
            <Route path="/about"><About></About></Route>
            <PrivateRoute path="/my-orders"><MyOrders></MyOrders></PrivateRoute>
            <PrivateRoute path="/all-orders"><AllOrders></AllOrders></PrivateRoute>
            <PrivateRoute path="/add-package"><AddPackages></AddPackages></PrivateRoute>
            <Route path="*"><PageNotFound></PageNotFound></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
