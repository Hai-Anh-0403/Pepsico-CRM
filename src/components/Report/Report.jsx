import "./Report.css";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

const revenueData = [
    { month: "Jan", revenue: 1200 },
    { month: "Feb", revenue: 2100 },
    { month: "Mar", revenue: 1800 },
    { month: "Apr", revenue: 2600 },
    { month: "May", revenue: 3000 },
];

const kpiData = [
    { name: "Khách hàng mới", value: 320 },
    { name: "Cơ hội bán hàng", value: 85 },
    { name: "Tỷ lệ chuyển đổi (%)", value: 42 },
];

export default function Report() {
    return (
        <div className="report">
            {/* Header */}
            <div className="report-header">
                <h1>Báo cáo & Phân tích kinh doanh</h1>
                <button className="report-btn">Xuất báo cáo</button>
            </div>

            {/* KPI */}
            <div className="report-kpi">
                {kpiData.map((kpi, index) => (
                    <div key={index} className="report-card">
                        <p className="kpi-name">{kpi.name}</p>
                        <p className="kpi-value">{kpi.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="report-charts">
                <div className="report-card">
                    <h2>Doanh thu theo tháng</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={revenueData}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />

                            <Bar dataKey="revenue" fill="#0046be" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="report-card">
                    <h2>Xu hướng tăng trưởng</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={revenueData}>
                            <CartesianGrid
                                stroke="#e0e0e0"
                                strokeDasharray="4 4"
                            />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line dataKey="revenue"
                                stroke="#0046be"
                                strokeWidth={3} />

                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* AI Insight */}
            <div className="report-card">
                <h2>Gợi ý chiến lược từ AI</h2>
                <p>• Doanh thu tăng mạnh vào quý II → nên đẩy mạnh marketing sản phẩm đồ uống.</p>
                <p>• Tỷ lệ chuyển đổi chưa cao → cần tối ưu quy trình chăm sóc khách hàng.</p>
            </div>
        </div>
    );
}
