import React from 'react';
import{ BrowserRouter as  Router, Routes , Route} from "react-router-dom"
import SingUp from "./compnents/SingUp"
import Login from './compnents/Login';
import AddStudent from "./compnents/AddStudent"
import Table from './compnents/Table';
function App() {
  return (
 <>
<Router>
  <Routes>
    <Route path='/' element ={ <SingUp/>} />
    <Route path='/login' element ={ <Login/>} />
    <Route path='/dashbord' element ={ <AddStudent/>} />
    <Route path='/student' element ={ <Table/>} />
  </Routes>
</Router>
 </>
  );
}

export default App;
