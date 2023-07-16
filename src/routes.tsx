import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameDetailsPage from "./pages/GameDetailsPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },

  {
    path: "/games/:id",
    element: <Layout />,
    children: [{ index: true, element: <GameDetailsPage /> }],
  },
]);

export default router;
