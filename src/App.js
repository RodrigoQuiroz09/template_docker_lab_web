import React from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import DrawerNav from './Components/PersistentDrawer/DrawerNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <DrawerNav/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
