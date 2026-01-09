import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});

    // ===============================
    // HANDLE CHANGE
    // ===============================
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // ===============================
    // VALIDATION
    // ===============================
    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;

        // Full name
        if (!form.fullName.trim()) {
            newErrors.fullName = "Họ và tên không được để trống";
        }

        // Email
        if (!form.email) {
            newErrors.email = "Email không được để trống";
        } else if (!emailRegex.test(form.email)) {
            newErrors.email = "Email không đúng định dạng";
        }

        // Password
        if (!form.password) {
            newErrors.password = "Mật khẩu không được để trống";
        } else if (form.password.length < 8 || form.password.length > 16) {
            newErrors.password = "Mật khẩu phải từ 8–16 ký tự";
        } else if (!passwordRegex.test(form.password)) {
            newErrors.password = "Mật khẩu phải có số và ký tự đặc biệt";
        }

        // Confirm password
        if (!form.confirmPassword) {
            newErrors.confirmPassword = "Vui lòng nhập lại mật khẩu";
        } else if (form.password !== form.confirmPassword) {
            newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
        }

        return newErrors;
    };

    // ===============================
    // SUBMIT
    // ===============================
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Register data:", form);

            alert("Đăng ký thành công!");
            navigate("/login");
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Đăng ký</h2>

                {/* Họ tên */}
                <div className="form-group">
                    <label>Họ và tên</label>
                    <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                    />
                    {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                {/* Password */}
                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                    />
                    {errors.password && <p className="error-text">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div className="form-group">
                    <label>Nhập lại mật khẩu</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                    />
                    {errors.confirmPassword && (
                        <p className="error-text">{errors.confirmPassword}</p>
                    )}
                </div>

                <button className="auth-btn">Đăng ký</button>

                <p className="auth-switch">
                    Đã có tài khoản?
                    <Link to="/login"> Đăng nhập</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;
