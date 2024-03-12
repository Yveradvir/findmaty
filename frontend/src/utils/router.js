import { createBrowserRouter } from "react-router-dom";
import IndexP from "../pages/indexp/indexp";


export const router = createBrowserRouter([
    {path: '/', element: <IndexP/>}
])