import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SlideBar from "./components/SlideBar";
import Dashboard from "./components/Dashboard";
import Client from "./components/Nav/Client";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import Report from "./components/Report/Report.jsx";
import "./App.css";
import Settings from "./components/Setting/Settings.jsx";
import AIChat from "./components/AiChat/AIchat.jsx";
import CustomerService from "./components/CustomerService/CustomerService.jsx";
import Buy from "./components/Buy/Buy.jsx";

function Layout() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <>
            {!isLoginPage && <Header />}

            <div className="app-container">
                {!isLoginPage && <SlideBar />}

                <div className="main-content">
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
                </div>
            </div>
        </>
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
