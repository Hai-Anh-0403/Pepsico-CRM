import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="settings-container">
            <h2 className="settings-header">Cài đặt hệ thống</h2>

            <div className="settings-content">
                {/* Thanh điều hướng bên trái */}
                <div className="settings-nav">
                    <div
                        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Hồ sơ cá nhân
                    </div>
                    <div
                        className={`nav-item ${activeTab === 'ai' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ai')}
                    >
                        Cấu hình AI & Chatbot
                    </div>
                    <div
                        className={`nav-item ${activeTab === 'notify' ? 'active' : ''}`}
                        onClick={() => setActiveTab('notify')}
                    >
                        Thông báo
                    </div>
                </div>


                <div className="settings-form">
                    {activeTab === 'profile' && (
                        <div>
                            <h3>Thông tin cá nhân</h3>
                            <div className="form-group">
                                <label>Họ và tên</label>
                                <input type="text" placeholder="Nguyễn Văn A" />
                            </div>
                            <div className="form-group">
                                <label>Email quản trị</label>
                                <input type="email" placeholder="admin@pepsico.com.vn" />
                            </div>
                            <button className="btn-save">Cập nhật hồ sơ</button>
                        </div>
                    )}

                    {activeTab === 'ai' && (
                        <div>
                            <h3>Cấu hình AI dự báo</h3>
                            <div className="form-group">
                                <label>Ngưỡng cảnh báo doanh thu (%)</label>
                                <input type="number" placeholder="10" />
                            </div>
                            <div className="form-group">
                                <label>Chế độ Chatbot</label>
                                <select>
                                    <option>Tự động phản hồi khách hàng mới</option>
                                    <option>Chỉ phản hồi ngoài giờ làm việc</option>
                                    <option>Tắt</option>
                                </select>
                            </div>
                            <button className="btn-save">Lưu cấu hình AI</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;