import { createBrowserRouter } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import ErrorPage from "./pages/ErrorPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import PaymentsPage from "./pages/PaymentsPage";

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
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/plans",
        element: <PaymentsPage />,
      },
    ],
  },
]);

export default router;
