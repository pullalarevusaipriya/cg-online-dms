
//import BuysMilk from "./Components/companyBuysMilkcontroller/BuyMilk";
//import AddCompany from "./Components/controller/AddCompany";
import AddCompany from "./Components/controller/AddCompany";

import CompanyData from "./Components/controller/CompanyData";
import DeleteCompany from "./Components/controller/DeleteCompany";
import GetAllCompany from "./Components/controller/GetAllCompany";
import GetCompanyById from "./Components/controller/GetCompanyById";
// import { updateCompany } from "./redux/Compslice";
import UpdateCompany from "./Components/controller/UpdateCompany";
//import Routes from "./Routes";
//import SpringCompanyData from "./Components/SpringCompanyData";

const App = () => {
  return (     
    <div className="bg-light">
      {/* <Routes />   */}
         {/* <CompanyData/>   */}
        {/* <SpringCompanyData/> */}
        {/* <GetAllCompany/> */}
        {/* <UpdateCompany/> */}
         {/* <DeleteCompany/>  */}
        {/* <GetCompanyById/> */}
        <AddCompany/> 
        {/* <BuysMilk/> */}

    </ div>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
// import Login from './Login';
// import Dashboard from './Dashboard';
// import Home from './Home';
 
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <div>
//           <div className="header">
//             <NavLink exact activeClassName="active" to="/">Home</NavLink>
//             <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
//             <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
//           </div>
//           <div className="content">
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route path="/login" component={Login} />
//               <Route path="/dashboard" component={Dashboard} />
//             </Switch>
//           </div>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }
 
// export default App;




// import Routes from "./Routes";

// const App = () => {
//   return (
//     <div className="bg-light">
//       <Routes />
//     </ div>
//   );
// }

// export default App;

