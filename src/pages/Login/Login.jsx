import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    return (
        <div className="auth-container">
            <form className="auth-form">
                <h2>Đăng nhập</h2>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                        value={email}
                        placeholder="example@gmail.com"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input type="password"
                        value={pass}
                        placeholder="••••••••"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>

                <button className="auth-btn">Đăng nhập</button>

                <p className="auth-switch">
                    Chưa có tài khoản?
                    <Link to="/register"> Đăng ký</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
