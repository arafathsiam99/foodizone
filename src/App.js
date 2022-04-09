import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import AddProduct from "./components/AddProduct/AddProduct";
import Blog from "./components/Blog/Blog";
import BookOrder from "./components/BookOrder/BookOrder";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import MyOrders from "./components/MyOrders/MyOrders";
import Register from "./components/Register/Register";


function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute exact path="/addproduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute exact path="/bookorder/:id">
              <BookOrder></BookOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
