import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Agendamento from "../pages/Agendamento";
import Historia from "../pages/Historia";
import Servicos from "../pages/Servicos";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/Agendamento", element: <Agendamento/>},
    {path: "/Historia", element: <Historia />},
    {path: "/Servicos", element: <Servicos />},
])

export default router;
