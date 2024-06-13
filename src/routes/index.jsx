import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home"
import Contato from "../pages/contato"
import NotFound from "../pages/not-found"


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/contato",
      element: <Contato/>,
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]);
  
  export default router