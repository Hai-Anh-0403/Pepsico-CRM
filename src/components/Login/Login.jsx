import "./Login.css"
const Login = () => {
    return (
        <>
            <div class="login-container">
                <form class="login-box">
                    <h2>Đăng nhập</h2>

                    <div class="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Nhập email" />
                    </div>

                    <div class="input-group">
                        <label>Mật khẩu</label>
                        <input type="password" placeholder="Nhập mật khẩu" />
                    </div>

                    <button class="btn-login-tab">Đăng nhập</button>

                    <p class="register">
                        Chưa có tài khoản? <a href="#">Đăng ký</a>
                    </p>
                </form>
            </div>
        </>
    );
}
export default Login;