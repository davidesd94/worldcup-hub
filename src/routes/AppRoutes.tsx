import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Dashboard from "../pages/Dashboard";
import Matches from "../pages/Matches";
import Teams from "../pages/Teams";
import Groups from "../pages/Groups";
import Statistics from "../pages/Statistics";
import Favorites from "../pages/Favorites";
import TestApi from "../pages/TestApi";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/test-api" element={<TestApi />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;