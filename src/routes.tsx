import { createBrowserRouter } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import ErrorPage from "./pages/ErrorPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import PlansPage from "./pages/PlansPage";
import PaymentPage from "./pages/PaymentPage";

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
        path: "/account/:userID",
        element: <AccountPage />,
      },
      {
        path: "/plans",
        element: <PlansPage />,
      },
      {
        path: "/plans/:plan",
        element: <PaymentPage />,
      },
    ],
  },
]);

export default router;
