import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import CreateAndDashboard from './views/CreateAndDashboard';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';

function App() {
  return (
    <div className="App">
      <div>
        <Link to='/products'>Create and Dashboard</Link>
      </div>
      <Routes>
        <Route path='/products' element={<CreateAndDashboard/> } />
        <Route path='/products/:id' element={<DetailsPage/>} />
        <Route path='/products/:id/edit' element={<UpdatePage/>} />
      </Routes>
    </div>
  );
}

export default App;
