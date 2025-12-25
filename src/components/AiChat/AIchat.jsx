import React, { useState } from "react";
import { SendHorizontal, Bot, User, Sparkles, BarChart2, TrendingUp } from "lucide-react";
import "./AIChat.css";

const AIChat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Chào bạn! Tôi là Pepsi AI trợ lý thông minh. Bạn muốn xem báo cáo doanh số hay dự báo đơn hàng hôm nay?", sender: "ai" },
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newMsg = { id: Date.now(), text: inputValue, sender: "user" };
        setMessages([...messages, newMsg]);
        setInputValue("");

        setTimeout(() => {
            const aiReply = {
                id: Date.now() + 1,
                text: "Dựa trên dữ liệu hệ thống, đại lý Pepsi Miền Bắc có khả năng thiếu hàng vào tuần tới. Bạn có muốn tạo đơn hàng gợi ý không?",
                sender: "ai"
            };
            setMessages(prev => [...prev, aiReply]);
        }, 1000);
    };

    return (
        <div className="ai-chat-container">
            <div className="chat-header">
                <Bot size={24} color="#0046be" />
                <span>Trợ lý AI PepsiCo</span>
            </div>

            <div className="chat-body">
                {messages.map((msg) => (
                    <div key={msg.id} className={`chat-bubble-wrapper ${msg.sender}`}>
                        <div className="chat-avatar">
                            {msg.sender === "ai" ? <Bot size={16} /> : <User size={16} />}
                        </div>
                        <div className="chat-bubble">
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className="ai-quick-actions">
                <button className="action-tag"><BarChart2 size={14} /> Phân tích doanh thu</button>
                <button className="action-tag"><TrendingUp size={14} /> Dự báo xu hướng</button>
                <button className="action-tag"><Sparkles size={14} /> Gợi ý chiến lược</button>
            </div>

            <div className="chat-footer">
                <input
                    type="text"
                    placeholder="Nhập câu hỏi tại đây..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button className="send-button" onClick={handleSend}>
                    <SendHorizontal size={20} color="#fff" />
                </button>
            </div>
        </div>
    );
};

export default AIChat;