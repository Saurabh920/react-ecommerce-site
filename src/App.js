import React from "react";
import {Switch, Route} from "react-router-dom";
// import ProtectedRoutes from "./Routes/protected.route";
// import AuthRoutes from "./Routes/auth.routes";
import AnotherNavbar from './Components/Navbar/AnotherNavbar';
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import History from "./Pages/OrderHistory/OrderHistory";
import CheckOut from "./Pages/CheckOut/CheckOut";

function App() {
return (
    <> 
    <AnotherNavbar/>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/cart" component={Cart} exact />
      <Route path="/orderhistory" component={History} exact />
      <Route path="/checkout" component={CheckOut} exact />
      <Route path="/react-ecommerce-site" component={Home} exact />
    </Switch>
    {/* <ProtectedRoutes/>
    <AuthRoutes/> */}
    </>
  );
}

export default App;
// import React, { useState } from "react";
// import Header from "./components/Header";
// import { Redirect, Switch, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Footer from "./components/Footer";
// import Products from "./components/Products";
// import { DataProvider } from "./components/DataProvider";
// import Details from "./components/Details/Details";
// import Cart from "./components/Cart";
// import Register from "./components/Signup/Register";
// import Error from "./components/Error";

// function App() {

//   const [search, setSearch] = useState("");

//   return (
//     <DataProvider>
//       <>
//         <Switch>
//           <Route exact path="/error404" component={Error} />
//           <Route>

//             <Header setSearch={setSearch} />
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route exact path="/products" component={() => <Products search={search} />} />
//               <Route exact path="/products/:id" component={Details} />
//               <Route exact path="/cart" component={Cart} />
//               <Route exact path="/register" component={Register} />
//               <Redirect to="/error404" />
//               <Products />
//             </Switch>
//             <Footer />
            
//           </Route>
//         </Switch>
//       </>
//     </DataProvider>
//   );
// }

// export default App;
