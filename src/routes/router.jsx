import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ShowDetails from "../Pages/ShowDetails";
import Spinner from "../Components/Spinner";
import PrivateRoute from "./PrivateRoute";
import ApplyNow from "../Pages/ApplyNow";
import MyApplications from "../Pages/MyApplications";
import AddJob from "../Pages/Jobs/AddJob";
import MyPostedJobs from "../Pages/Jobs/MyPostedJobs";
import ViewApplications from "../Pages/Jobs/ViewApplications";

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

        element: (
          <PrivateRoute>
            <ApplyNow />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/applications/:id",
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),

        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/applications/job/${params.id}`),
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/posted-jobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
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
