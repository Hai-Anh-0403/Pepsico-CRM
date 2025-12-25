import "./SlideBar.css";
import { NavLink } from "react-router-dom";
// Nếu bạn cài lucide-react, hãy dùng các icon này:
import { LayoutDashboard, Users, ShoppingCart, Headset, MessageSquare, BarChart3, Settings } from 'lucide-react';

const SlideBar = () => {
    const menuItems = [
        { path: "/", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
        { path: "/client", label: "Khách hàng", icon: <Users size={20} /> },
        { path: "/buy", label: "Bán Hàng", icon: <ShoppingCart size={20} /> },
        { path: "/customerservice", label: "CSKH", icon: <Headset size={20} /> },
        { path: "/ai", label: "AI & Chat", icon: <MessageSquare size={20} /> },
        { path: "/report", label: "Báo cáo", icon: <BarChart3 size={20} /> },
        { path: "/setting", label: "Cài đặt", icon: <Settings size={20} /> },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>PepsiCo CRM</h2>
            </div>
            <ul className="sidebar-menu">
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            <span className="icon">{item.icon}</span>
                            <span className="label">{item.label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SlideBar;