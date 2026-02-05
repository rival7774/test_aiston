import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {RequestsPage} from "../pages/RequestsPage";
import {ReportsPage} from "../pages/ReportsPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/requests" replace/>}/>

            <Route element={<MainLayout/>}>
                <Route path="/requests" element={<RequestsPage/>}/>
                <Route path="/reports" element={<ReportsPage/>}/>
            </Route>
        </Routes>
    );
};
