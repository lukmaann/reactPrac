import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Scenes/login";

const Routes=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    }
])


const App = () => {
  return (
    <main>
        <RouterProvider router={Routes}></RouterProvider>
    </main>
  )
}

export default App