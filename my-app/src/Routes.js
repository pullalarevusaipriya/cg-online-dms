import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Page404 from './Components/Page404';
import Login from './Components/Login';


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
                                 {/* <Route path="/hello"> <Hello /> </Route>
                                <Route path="/emp"> <EmpData /> </Route>
                                <Route path="/spring"> <SpringBootData /> </Route> */}
                                <Route path="/logout"> <Logout /> </Route> 
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        <Footer /> 
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
                                {/* <Route path="/home" loginStatus> <Home /> </Route> */}
                                <Route path="/register"> <Register /> </Route>
                                <Route path="/login"> <Login /> </Route> 
                                <Route path="/*"> <Page404 /> </Route>
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