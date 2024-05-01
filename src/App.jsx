import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
  return (
    <>
    <Router>

<Routes>
<Route path="/" element={<Dashboard />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
</Routes>
  

</Router>
    </>
    
  );
}

export default App;