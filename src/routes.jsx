import { NotFoundPage } from "./pages/NotFoundPage";
import { Publication } from "./pages/Publication";

export const routes = [
    {path:'/', element:<Publication/>},
    {path:'*', element:<NotFoundPage/>},
]