import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <Navigate to="/src/FootballFiWorld.io/index.html" />
    </>
  );
}

export default Dashboard;