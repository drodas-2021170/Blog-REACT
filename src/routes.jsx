import { CommentsPage } from "./pages/CommentsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Publication } from "./pages/Publication";

export const routes = [
    {path:'/', element:<Publication/>},
    {path:'/comments/:id', element:<CommentsPage/>},
    {path:'*', element:<NotFoundPage/>},
]