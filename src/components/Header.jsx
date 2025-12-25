import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Logo.png";
import UserAvatar from "../assets/img/user.png";
import "./Header.css"
import { useState } from "react";
import { Search } from 'lucide-react';
const Header = () => {
    const [isLogin, setIslogin] = useState(true);
    const [user, setUser] = useState({
        name: "Hai Anh",
        avatar: UserAvatar,
        position: "Quản trị viên",
        email: "hhaq@gmail.com",
        phone: "0933366666"

    })

    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="search-container">
                <input type="text" placeholder="Nhập tên khách hàng,...." />
                <button className="btn-search"><Search size={20} /></button>
            </div>
            <div className="user-section">
                {isLogin ? (
                    <div className="user-info">
                        <span className="user-name">{user.name}</span>
                        <img className="user-avatar" src={user.avatar} alt="anh" />
                        <div className="mini-profile">
                            <div className="profile-content">
                                <img className="large-avatar" src={user.avatar} alt="avatar" />
                                <div className="profile-details">
                                    <h4>{user.name}</h4>
                                    <p>Chức vụ: {user.position}</p>
                                    <p>Email: {user.email}</p>
                                    <p>{user.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div />
                    </div>
                ) : (<div className="user-section">
                    <NavLink className="btn-login" to="/login">Đăng nhập</NavLink>
                </div>)}
            </div>
        </div>

    );
}
export default Header;