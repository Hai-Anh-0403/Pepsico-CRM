import React from "react";
import KPI from "./KPI";
import Chart from "./Chart/Chart.jsx";
import "./Dashboard.css";
import PieChartComponent from "./Chart/PieChart.jsx";
const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <h1>Dashboard</h1>
                <div className="kpi-container">
                    <KPI title="Doanh thu tháng " value="12 tỷ VNĐ" />
                    <KPI title="Khách hàng mới " value="320" />
                    <KPI title="Cơ hội bán hàng " value="85" />
                    <KPI title="Tỷ lệ chuyển đổi " value="42%" />

                </div>
                <div className="charts">
                    <Chart title="Doanh thu theo tháng" />
                    <PieChartComponent title="Doanh thu theo khu vực" />
                </div>
            </div>
        </>
    );
}
export default Dashboard;