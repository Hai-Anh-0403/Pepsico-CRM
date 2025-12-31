import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import UserAvatar from "../../assets/img/user.png";
import "./Header.css";

const Header = () => {
    const [isLogin] = useState(true);

    const user = {
        name: "Hải Anh",
        avatar: UserAvatar,
        position: "Quản trị viên",
        email: "hhaq@gmail.com",
        phone: "0933366666",
    };

    return (
        <header className="header">
            {/* Back button */}
            <NavLink to="/" className="logo">
                <ArrowLeft size={22} />
            </NavLink>

            {/* Search */}
            <div className="search-container">
                <input type="text" placeholder="Tìm kiếm khách hàng..." />
                <button className="btn-search">
                    <Search size={18} />
                </button>
            </div>

            {/* User */}
            <div className="user-section">
                {isLogin ? (
                    <div className="user-wrapper">
                        <div className="user-trigger">
                            <span className="user-name">{user.name}</span>
                            <img src={user.avatar} alt="avatar" className="user-avatar" />
                        </div>

                        {/* Dropdown */}
                        <div className="mini-profile">
                            <div className="profile-header">
                                <img src={user.avatar} alt={`${user.name} avatar`} className="avatar" />
                                <div>
                                    <h4>{user.name}</h4>
                                    <span>{user.position}</span>
                                </div>
                            </div>

                            <hr />

                            <div className="profile-body">
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>SĐT:</strong> {user.phone}</p>
                            </div>

                            <button className="btn-logout">Đăng xuất</button>
                        </div>
                    </div>
                ) : (
                    <NavLink to="/login" className="btn-login">
                        Đăng nhập
                    </NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
