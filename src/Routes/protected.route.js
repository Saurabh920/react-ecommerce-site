import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Profile from '../Pages/Profile/Profile'

const ProtectedRoutes = () => {
//     if (!localStorage.getItem("token")){
//         return <Redirect to="/login" />;
// }
    return (
    <>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/profile" component={Profile} exact/>
    </Switch>
    </>
    )
}
   

export default ProtectedRoutes;