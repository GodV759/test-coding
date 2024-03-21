import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "../layout";
import Home from "../pages/Home";
import RecipeDetails from "../pages/RecipeDetails";
const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: ROUTES.OVERVIEW,
                element: <Home />,
            },
            {
                path: ROUTES.RECIPE,
                element: <RecipeDetails />,
            }
        ]
    }
])
export default router;