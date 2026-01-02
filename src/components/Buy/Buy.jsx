import React, { useState } from "react";
import "./Buy.css";
import { Bell, Mail, Settings, RefreshCcw } from "lucide-react";
import Item from "./Item";
import Classic from "../Buy/classic.png";
import Lays from "../Buy/Lays.png";
import Fanta from "../Buy/Fanta.png";
import UserAvatar from "../../assets/img/user.png";

const kpis = [
    {
        id: 1,
        title: "Doanh thu hôm nay",
        value: "350,5 triệu ₫",
        note: "+15,2% so với hôm qua",
        type: "revenue",
    },
    {
        id: 2,
        title: "Đại lý hoạt động",
        value: "321",
        note: "+12 đại lý mới",
        type: "customers",
    },
    {
        id: 3,
        title: "Đơn hàng chờ xử lý",
        value: "128",
        note: "Cần xử lý trong hôm nay",
        type: "orders",
    },
];

const products = [
    {
        id: 1,
        title: "Pepsi Classic",
        price: "25.000 VND",
        sold: "1.240 thùng",
        growth: "+12%",
        img: Classic,
    },
    {
        id: 2,
        title: "Lays",
        price: "10.000 VND",
        sold: "980 thùng",
        growth: "+8%",
        img: Lays,
    },
    {
        id: 3,
        title: "Fanta",
        price: "20.000 VND",
        sold: "760 thùng",
        growth: "+5%",
        img: Fanta,
    },
];

export default function Buy() {
    const [keyword, setKeyword] = useState("");

    return (
        <div className="container">
            {/* Header */}
            <header className="sales-header">
                <input
                    type="text"
                    placeholder="Tìm sản phẩm, đại lý, đơn hàng..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />

                <div className="header-right">
                    <div className="icons">
                        <Bell size={20} />
                        <Mail size={20} />
                        <Settings size={20} />
                    </div>
                    <div className="user">
                        <img src={UserAvatar} alt="user" />
                        <span>Sales Admin</span>
                    </div>
                </div>
            </header>

            {/* Filter */}
            <div className="filter-bar">
                <div className="filter-group">
                    <select>
                        <option>Khu vực: Toàn quốc</option>
                        <option>Miền Bắc</option>
                        <option>Miền Trung</option>
                        <option>Miền Nam</option>
                    </select>
                    <select>
                        <option>Kênh bán: GT</option>
                        <option>MT</option>
                        <option>Online</option>
                    </select>
                </div>
                <button className="refresh-btn">
                    <RefreshCcw size={18} />
                </button>
            </div>

            {/* KPI */}
            <section className="stats">
                {kpis.map((item) => (
                    <div key={item.id} className={`card ${item.type}`}>
                        <h3>{item.title}</h3>
                        <p className="value">{item.value}</p>
                        <span>{item.note}</span>
                    </div>
                ))}
            </section>

            {/* Content */}
            <div className="content">
                <section className="product-box">
                    <h2>Sản phẩm bán chạy</h2>
                    {products.map((p) => (
                        <Item key={p.id} {...p} />
                    ))}
                </section>

                <aside className="insight-box">
                    <h3>Insight bán hàng</h3>
                    <ul>
                        <li>🔥 Pepsi Classic tăng trưởng mạnh nhất tuần</li>
                        <li>⚠️ Fanta có tỷ lệ trả hàng cao tại MT</li>
                        <li>✅ Lays đạt 92% chỉ tiêu tháng</li>
                    </ul>
                </aside>
            </div>
        </div>
    );
}
