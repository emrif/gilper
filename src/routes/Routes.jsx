import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ConditionalRoute from "../auth/firebase/ConditionalRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <ConditionalRoute><Login></Login></ConditionalRoute> ,
  },
  {
    path: "/auth/signup",
    element: <ConditionalRoute><Signup></Signup></ConditionalRoute>,
  },
]);
export default router;
