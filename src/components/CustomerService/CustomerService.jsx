import React, { useState } from 'react';
import './CustomerService.css';
import { Mail, MessageSquare, Phone, SendHorizonal } from 'lucide-react';

const CustomerService = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Chào PepsiCo! Tôi muốn hỏi về chương trình khuyến mãi.", sender: "user" },
        { id: 2, text: "Chào bạn, hiện tại chúng tôi có ưu đãi mua 2 tặng 1 cho Pepsi 330ml!", sender: "bot" }
    ]);

    return (
        <div className="crm-container">

            <div className="crm-sidebar">
                <h3>Kênh Chăm Sóc</h3>
                <button className="active"><MessageSquare size={20} /> Chatbot AI</button>
                <button><Mail size={20} /> Email Marketing</button>
                <button><Phone size={20} /> SMS/Zalo</button>
            </div>


            <div className="crm-main-content">
                <div className="chat-window">
                    <div className="chat-header">
                        <h4>Hỗ trợ trực tuyến - PepsiCo Vietnam</h4>
                        <span className="status-online">Hoạt động</span>
                    </div>

                    <div className="chat-body">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message-item ${msg.sender}`}>
                                <div className="bubble">{msg.text}</div>
                            </div>
                        ))}
                    </div>

                    <div className="chat-footer">
                        <input type="text" placeholder="Nhập kịch bản trả lời tự động..." />
                        <button className="send-btn"><SendHorizonal size={20} /></button>
                    </div>
                </div>


                <div className="automation-panel">
                    <h4>Thiết lập Tự động</h4>
                    <div className="config-item">
                        <label>Gửi Email chúc mừng sinh nhật:</label>
                        <input type="checkbox" checked readOnly />
                    </div>
                    <div className="config-item">
                        <label>Nhắc lịch nhập hàng (SMS):</label>
                        <input type="checkbox" />
                    </div>
                    <button className="save-config">Lưu cấu hình</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerService;