import './App.css';
import WelcomePage from './pages/welcome/WelcomePage';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import DashboardLayout from './components/dashboard/DashboardLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // {
      //   index: true,
      //   element: <Dashboard />,
      // },
      // Future nested routes can go here
      // {
      //   path: "workouts",
      //   element: <WorkoutsPage />,
      // },
      // {
      //   path: "nutrition",
      //   element: <NutritionPage />,
      // },
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
