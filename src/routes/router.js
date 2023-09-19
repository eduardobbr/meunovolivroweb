import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Published from "../pages/Published";
import Plans from "../pages/Plans";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFound from "../pages/404";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login-register", element: <Login /> },
  { path: "/published", element: <Published /> },
  { path: "/plans", element: <Plans /> },
  { path: "/blog", element: <Blog /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/profile", element: <Profile /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
