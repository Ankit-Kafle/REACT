import React from 'react'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import ParamComp from './ParamComp';
import NestedRoute from './NestedRoute';
import NotFound from './NotFound';

const router= createBrowserRouter(   //creating array of different different route by using router
    [
        {
            path:"/",
            element: <div>
<Navbar/>
<Home/>
            </div>,
        },

        {
            path:"/about",
            element:<div>
                <Navbar/>
                <About/>
            </div>,
            children:[

{
    path:'nextRoute',
    element: <NestedRoute/>
},

//{}. {}...so on


            ]
        },
        {
            path:"/dashboard",
            element:<div>
                <Navbar/>
                <Dashboard/>
            </div>,
        },


        {
            path:"/student/:id",
            element:<div>
                <Navbar/>
                <ParamComp/>
            </div>,
        },

        {
path:'*',
element:<NotFound/>
        },
    ]
)

const Route = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Route
