import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import JobsDetails from "../pages/jobDeails/JobsDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/Home/MyApplications/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobsDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/JobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/signUp",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
