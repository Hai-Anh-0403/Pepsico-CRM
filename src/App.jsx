import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SlideBar from "./components/Slidebar/SlideBar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Client from "./components/Nav/Client";
import Header from "./components/Header/Header.jsx";
import Login from "./pages/Login/Login.jsx";
import Report from "./pages/Report/Report.jsx";
import Settings from "./pages/Setting/Settings.jsx";
import AIChat from "./components/AiChat/AIchat.jsx";
import Register from "./pages/Register/Register.jsx";
import CustomerService from "./pages/CustomerService/CustomerService.jsx";
import Buy from "./pages/Buy/Buy.jsx";

import { AuthProvider } from "./context/Authcontext.jsx";
import PrivateRoute from "./routers/PrivateRouter.jsx";

import "./App.css";

function Layout() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login"
        || location.pathname === "/register";

    return (
        <div className={`app-container ${isLoginPage ? "login-mode" : ""}`}>
            {!isLoginPage && <SlideBar />}

            <div className="main-wrapper">
                {!isLoginPage && <Header />}

                <main className="content-area">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        } />

                        <Route path="/client" element={
                            <PrivateRoute>
                                <Client />
                            </PrivateRoute>
                        } />

                        <Route path="/report" element={
                            <PrivateRoute>
                                <Report />
                            </PrivateRoute>
                        } />

                        <Route path="/buy" element={
                            <PrivateRoute>
                                <Buy />
                            </PrivateRoute>
                        } />

                        <Route path="/setting" element={
                            <PrivateRoute>
                                <Settings />
                            </PrivateRoute>
                        } />

                        <Route path="/ai" element={
                            <PrivateRoute>
                                <AIChat />
                            </PrivateRoute>
                        } />

                        <Route path="/customerservice" element={
                            <PrivateRoute>
                                <CustomerService />
                            </PrivateRoute>
                        } />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Layout />
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
