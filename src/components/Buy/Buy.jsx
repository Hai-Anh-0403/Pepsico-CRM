import React from "react";
import "./Buy.css";
import { Bell, Mail, RefreshCcw, Settings } from "lucide-react"
import Item from "./item";
import Classic from '../Buy/classic.png';
import Lays from '../Buy/Lays.png';
import Fanta from '../Buy/Fanta.png'
function Buy() {
    return (
        <div className="container">

            {/* Header */}
            <header className="header">
                <input type="text" placeholder="Tìm kiếm doanh mục..." />
                <div className="icons">
                    <span><Bell size={20} /></span>
                    <span><Mail size={20} /></span>
                    <span><Settings size={20} /></span>
                </div>
            </header>

            {/* Filter Bar */}
            <div className="filter-bar">
                <div className="filter-group">
                    <select>
                        <option>Sản phẩm bán chạy</option>
                        <option>Sản phẩm được yêu thích</option>
                        <option>Đánh giá sản phẩm</option>
                    </select>
                    <select>
                        <option>Mới nhất</option>
                        <option>Tháng trước</option>
                    </select>
                </div>
                <button className="refresh-btn"><  RefreshCcw size={20} /></button>
            </div>

            {/* Stats */}
            <section className="stats">
                <div className="card revenue">
                    <h3>Doanh thu</h3>
                    <p className="value">350,5 triệu ₫</p>
                    <span>+15,2% so với hôm qua</span>
                </div>

                <div className="card customers">
                    <h3>Khách hàng</h3>
                    <p className="value">321</p>
                    <span>+92 khách</span>
                </div>

                <div className="card orders">
                    <h3>Đơn hàng</h3>
                    <p className="value">1,250</p>
                    <span>+8,4% so với hôm qua</span>
                </div>
            </section>

            {/* Content */}
            <div className="content">
                <section className="box">
                    <h2>Sản phẩm bán chạy</h2>

                    <Item title="Pepsi classic" price="25.000 VND" img={Classic} />
                    <Item title="Lays" price="10.000 VND" img={Lays} />
                    <Item title="Fanta" price="20.000 VND" img={Fanta} />
                </section>

                <aside className="review-box">
                    <h3>Đánh giá sản phẩm</h3>
                    <div className="rating-score">
                        <span className="score">4.6</span>
                        <div className="stars">★★★★★</div>
                        <p>1.248 đánh giá</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Buy;