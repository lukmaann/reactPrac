import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Scenes/login";
import Register from "./Scenes/register";

const Routes=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {path:'/register',element:<Register/>}
])


const App = () => {
  return (
    <main>
        <RouterProvider router={Routes}></RouterProvider>
    </main>
  )
}

export default App