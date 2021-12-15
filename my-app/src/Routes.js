import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import SpringBootData from "./Components/SpringBootData.js";
import React, { useEffect, useState } from 'react';
import CompanyData from "./Components/CompanyData";
import Header from "./Components/Header";
//import Hello from './components/Hello';
import Home from './Components/Home';
import Login from "./Components/Login";
//import Logout from './components/Logout';
// import Page404 from './components/Page404';
// import Register from "./components/Register";
//import { insert CompService } from './Components/services/CompService';
//import{getcompanyByIdService, getAllCompanyService,addcompanyService, updatecompanyService,  deletecompanyByIdService}from "./services/CompService";




const Routes = () => {

    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus) {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                 <Route exact path="/" loginStatus > <Home /> </Route>
                                 <Route path="/home" loginStatus> <Home /> </Route>  
                                {/* <Route path="/hello"> <Hello /> </Route> */}
                                 <Route path="/company"> <CompanyData/> </Route> 
                                  {/* <Route path="/spring"> <SpringBootData /> </Route>  */}
                                {/* <Route path="/logout"> <Logout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>  */}
                                {/* <Route exact path="/viewProfile" component={insert} />   */}
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
    else {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                 <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                {/* <Route path="/register"> <Register /> </Route> */}
                                <Route path="/login"> <Login /> </Route>
                                {/* <Route path="/*"> <Page404 /> </Route>  */}
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
}


export default Routes;