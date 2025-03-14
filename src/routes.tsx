import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CachoeiraPage from './pages/CachoeiraPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:cachoeiraId" element={<CachoeiraPage />} />
    </Routes>
  );
};

export default AppRoutes;
