import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Published from "../pages/Published";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFound from "../pages/404";
import BookCreator from "../pages/BookCreator";
import CoverGen from "../pages/CoverGen";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login-register", element: <Login /> },
  { path: "/published", element: <Published /> },
  { path: "/blog", element: <Blog /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/producao", element: <BookCreator /> },
  { path: "/profile", element: <Profile /> },
  { path: "/gerador-de-capa", element: <CoverGen /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
