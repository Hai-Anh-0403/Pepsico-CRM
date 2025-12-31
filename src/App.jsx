import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SlideBar from "./components/SlideBar";
import Dashboard from "./components/Dashboard";
import Client from "./components/Nav/Client";
import Header from "./components/Header/Header.jsx";
import Login from "./components/Login/Login";
import Report from "./components/Report/Report.jsx";
import Settings from "./components/Setting/Settings.jsx";
import AIChat from "./components/AiChat/AIchat.jsx";
import CustomerService from "./components/CustomerService/CustomerService.jsx";
import Buy from "./components/Buy/Buy.jsx";
import "./App.css";

function Layout() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <div className={`app-container ${isLoginPage ? "login-mode" : ""}`}>
            {/* 1. Sidebar bên trái */}
            {!isLoginPage && <SlideBar />}

            {/* 2. Khối bên phải (Wrapper cho Header và Content) */}
            <div className="main-wrapper">
                {!isLoginPage && <Header />}

                <main className="content-area">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/client" element={<Client />} />
                        <Route path="/report" element={<Report />} />
                        <Route path="/buy" element={<Buy />} />
                        <Route path="/setting" element={<Settings />} />
                        <Route path="/ai" element={<AIChat />} />
                        <Route path="/customerservice" element={<CustomerService />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;