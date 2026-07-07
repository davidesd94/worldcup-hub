import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import Dashboard from "../pages/Dashboard";

import Matches from "../pages/Matches";

import Groups from "../pages/Groups";

import Teams from "../pages/Teams";

import Statistics from "../pages/Statistics";

import Favorites from "../pages/Favorites";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },

      {
        path: "/matches",
        element: <Matches />,
      },

      {
        path: "/groups",
        element: <Groups />,
      },

      {
        path: "/teams",
        element: <Teams />,
      },

      {
        path: "/statistics",
        element: <Statistics />,
      },

      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);