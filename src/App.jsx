import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import TotalReview from './Pages/TotalReview';
import Pendingreview from './Pages/Pendingreview';
import Settingpage from './Pages/Settingpage';
import Blog from './Pages/Blog';
import ProductReview from './Pages/ProductReview';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },   {
    path: "/home2",
    element: <Home2/>,
  },  {
    path: "/totalreview",
    element: <TotalReview/>,
  },  {
    path: "/pendingreview",
    element: <Pendingreview/>,
  }, {
    path: "/settingpage",
    element: <Settingpage/>,
  }, {
    path: "/blog",
    element: <Blog/>,
  }, {
    path: "/productreview",
    element: <ProductReview/>,
  }, {
    path: "/aboutus",
    element: <Aboutus/>,
  },  {
    path: "/contactus",
    element: <Contactus/>,
  }, 
]);


const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App