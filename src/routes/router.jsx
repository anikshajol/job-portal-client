import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ShowDetails from "../Pages/ShowDetails";
import Spinner from "../Components/Spinner";
import PrivateRoute from "./PrivateRoute";
import ApplyNow from "../Pages/ApplyNow";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
        Component: ShowDetails,
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/job-apply/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
        element: (
          <PrivateRoute>
            <ApplyNow />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
