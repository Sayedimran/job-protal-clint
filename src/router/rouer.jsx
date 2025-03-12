import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

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
