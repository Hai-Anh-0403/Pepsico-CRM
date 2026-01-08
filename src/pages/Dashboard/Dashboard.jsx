import React from "react";
import KPI from "../KPI/KPI.jsx";
import Chart from "../Chart/Chart.jsx";
import PieChartComponent from "../Chart/PieChart.jsx";
import { DollarSign, UserPlus, Target, BarChart2 } from 'lucide-react';
import "./Dashboard.css";

const Dashboard = () => {
    const kpiData = [
        {
            title: "Doanh thu tháng",
            value: "12 tỷ VNĐ",
            icon: DollarSign,
            trend: "up",
            percentage: "12%",
            variant: "green"
        },
        {
            title: "Khách hàng mới",
            value: "320",
            icon: UserPlus,
            trend: "up",
            percentage: "8%",
            variant: "blue"
        },
        {
            title: "Cơ hội bán hàng",
            value: "85",
            icon: Target,
            trend: "down",
            percentage: "3%",
            variant: "orange"
        },
        {
            title: "Tỷ lệ chuyển đổi",
            value: "42%",
            icon: BarChart2,
            trend: "up",
            percentage: "5%",
            variant: "purple"
        },
    ];
    return (
        <main className="dashboard-wrapper">
            <header className="dashboard-header">
                <div>
                    <h1>Dashboard Overview</h1>
                    <p className="subtitle">Chào mừng trở lại! Dưới đây là báo cáo hôm nay.</p>
                </div>
                <button className="btn-download">Xuất báo cáo</button>
            </header>

            <div className="kpi-grid">
                {kpiData.map((item, index) => (
                    <KPI key={index} {...item} />
                ))}
            </div>

            <section className="charts-section">
                <div className="chart-main">
                    <Chart title="Doanh thu theo tháng" />
                </div>
                <div className="chart-side">
                    <PieChartComponent title="Doanh thu theo khu vực" />
                </div>
            </section>
        </main>
    );
}

export default Dashboard;