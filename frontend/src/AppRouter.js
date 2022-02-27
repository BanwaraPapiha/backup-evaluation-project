import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Charts from "./components/charts/Charts";
import Bounty from "./components/bounty/Bounty";
import Admin from "./components/admin/Admin";
import Layout from './components/layout/layout';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="charts" element={<Charts />} />
                    <Route path="bounty" element={<Bounty />} />
                    <Route path="admin" element={<Admin />} />

                </Route>
            </Routes>
        </BrowserRouter>  
    );
}

export default AppRouter;
