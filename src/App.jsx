import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import HomeStatic from './pages/HomeStatic';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Dashboard />} />
        <Route path="*" element={<HomeStatic />} />
      </Routes>
    </>
  );
}

export default App;
