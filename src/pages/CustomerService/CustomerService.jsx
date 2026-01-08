import React, { useState } from 'react';
import './CustomerService.css';
import { Mail, MessageSquare, Phone, SendHorizonal, Bot, User, Settings2, BellRing } from 'lucide-react';

const CustomerService = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Chào PepsiCo! Tôi muốn hỏi về chương trình khuyến mãi.", sender: "user" },
        { id: 2, text: "Chào bạn, hiện tại chúng tôi có ưu đãi mua 2 tặng 1 cho Pepsi 330ml!", sender: "bot" }
    ]);

    return (
        <div className="cs-wrapper">
            <div className="cs-header-page">
                <h2>Chăm sóc khách hàng</h2>
                <p>Quản lý các kênh tương tác và thiết lập kịch bản tự động</p>
            </div>

            <div className="cs-container">
                {/* 1. Sidebar Kênh Chăm Sóc */}
                <aside className="cs-sidebar">
                    <div className="sidebar-section-title">KÊNH TƯƠNG TÁC</div>
                    <nav className="cs-nav">
                        <button className="nav-item active">
                            <MessageSquare size={18} />
                            <span>Chatbot AI</span>
                            <span className="badge">New</span>
                        </button>
                        <button className="nav-item">
                            <Mail size={18} />
                            <span>Email Marketing</span>
                        </button>
                        <button className="nav-item">
                            <Phone size={18} />
                            <span>SMS / Zalo</span>
                        </button>
                    </nav>
                </aside>

                {/* 2. Cửa sổ Chat chính */}
                <main className="cs-chat-window">
                    <div className="chat-header">
                        <div className="agent-info">
                            <div className="agent-avatar">
                                <Bot size={20} color="white" />
                            </div>
                            <div>
                                <h4>Trợ lý ảo PepsiCo</h4>
                                <div className="status-indicator">
                                    <span className="dot pulse"></span>
                                    Hệ thống đang hoạt động
                                </div>
                            </div>
                        </div>
                        <button className="settings-btn"><Settings2 size={18} /></button>
                    </div>

                    <div className="chat-body">
                        <div className="timestamp">Hôm nay</div>
                        {messages.map((msg) => (
                            <div key={msg.id} className={`msg-group ${msg.sender}`}>
                                <div className="msg-avatar">
                                    {msg.sender === 'bot' ? <Bot size={20} /> : <User size={20} />}
                                </div>
                                <div className="msg-bubble">
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="chat-footer">
                        <div className="input-box">
                            <input type="text" placeholder="Huấn luyện chatbot: Nhập kịch bản trả lời tại đây..." />
                            <button className="send-action">
                                <SendHorizonal size={22} />
                            </button>
                        </div>
                    </div>
                </main>

                {/* 3. Panel cấu hình tự động */}
                <section className="cs-automation">
                    <div className="panel-header">
                        <BellRing size={18} />
                        <h4>Tự động hóa</h4>
                    </div>

                    <div className="automation-list">
                        <div className="auto-card">
                            <div className="auto-info">
                                <h5>Mừng sinh nhật</h5>
                                <p>Gửi Email/SMS tự động</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="auto-card">
                            <div className="auto-info">
                                <h5>Nhắc lịch hàng</h5>
                                <p>Cảnh báo qua Zalo OA</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>

                    <div className="usage-stats">
                        <p>Tin nhắn đã gửi tháng này</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '65%' }}></div>
                        </div>
                        <span>1,200 / 2,000</span>
                    </div>

                    <button className="save-btn-gradient">Cập nhật cấu hình</button>
                </section>
            </div>
        </div>
    );
};

export default CustomerService;