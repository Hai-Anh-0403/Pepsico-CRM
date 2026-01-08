// Sidebar.jsx
import "./SlideBar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/P.png";
import { LayoutDashboard, Users, ShoppingCart, Headset, MessageSquare, BarChart3, Settings, ChevronRight, Earth } from 'lucide-react';

const menuItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/client", label: "Khách hàng", icon: Users },
    { path: "/buy", label: "Bán Hàng", icon: ShoppingCart },
    { path: "/customerservice", label: "CSKH", icon: Headset },
    { path: "/ai", label: "AI & Chat", icon: MessageSquare },
    { path: "/report", label: "Báo cáo", icon: BarChart3 },
    { path: "/setting", label: "Cài đặt", icon: Settings },
];

const SlideBar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <NavLink to="/" className="logo-link">
                    <Earth size={30} />
                    <h4 className="logo-title"> Pepsico</h4>
                </NavLink>
            </div>

            <nav className="sidebar-menu">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        {/* Render Component Icon động */}
                        <item.icon className="icon" size={22} strokeWidth={2} />
                        <span className="label">{item.label}</span>
                        <ChevronRight className="arrow-icon" size={14} />
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <p>© 2025 PepsiCo Digital</p>
            </div>
        </aside>
    );
}

export default SlideBar;