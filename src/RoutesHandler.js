import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import CarListPage from './pages/CarListPage/CarListPage';

export const RoutesHandler = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/list" />} />
        <Route path="/list" element={<CarListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
