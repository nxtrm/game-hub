import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameDetailsPage from "./pages/GameDetailsPage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import LoginCard from "./components/LoginCard";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/games/:slug",
        element: <GameDetailsPage />,
      },
      {
        path: "/login",
        element: <LoginCard />,
      },
      {
        path: "/signup",
        element: <LoginCard />,
      },
    ],
  },
]);

export default router;
