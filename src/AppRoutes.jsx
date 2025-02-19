import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarRentalPage from './pages/CarRentalPage';
import FindMyCar from './pages/FindMyCar';
import CarPriceChart from './pages/CarPriceChart';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/car-rental" element={<CarRentalPage />} />
      <Route path="/find-car" element={<FindMyCar />} />
      <Route path="/bargraph" element={<CarPriceChart />} />
    </Routes>
  );
}

export default AppRoutes;

