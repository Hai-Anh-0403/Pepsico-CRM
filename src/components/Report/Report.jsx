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
    CartesianGrid,
} from "recharts";
import {
    BarChart3,
    Users,
    TrendingUp,
    Percent
} from "lucide-react";

const revenueData = [
    { month: "Jan", revenue: 1200 },
    { month: "Feb", revenue: 2100 },
    { month: "Mar", revenue: 1800 },
    { month: "Apr", revenue: 2600 },
    { month: "May", revenue: 3000 },
];

const kpiData = [
    {
        name: "Khách hàng mới",
        value: 320,
        icon: <Users size={22} />
    },
    {
        name: "Cơ hội bán hàng",
        value: 85,
        icon: <TrendingUp size={22} />
    },
    {
        name: "Tỷ lệ chuyển đổi",
        value: "42%",
        icon: <Percent size={22} />
    },
];

export default function Report() {
    return (
        <div className="report">
            <div className="report-header">
                <h1>Báo cáo & Phân tích kinh doanh</h1>
                <button className="report-btn">Xuất báo cáo</button>
            </div>

            <div className="report-kpi">
                {kpiData.map((kpi, index) => (
                    <div
                        key={index}
                        className={`report-card kpi-card kpi-${index + 1}`}
                    >
                        <div className="kpi-header">
                            <span className="kpi-icon">{kpi.icon}</span>
                            <p className="kpi-name">{kpi.name}</p>
                        </div>
                        <p className="kpi-value">{kpi.value}</p>
                    </div>
                ))}
            </div>

            <div className="report-charts">
                <div className="report-card">
                    <h2 className="card-title">
                        <BarChart3 size={18} />
                        Doanh thu theo tháng
                    </h2>
                    <ResponsiveContainer width="100%" height={260}>
                        <BarChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip formatter={(v) => `${v.toLocaleString()} $`} />
                            <Bar dataKey="revenue" fill="var(--primary-color)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="report-card">
                    <h2 className="card-title">
                        <BarChart3 size={18} />
                        Xu tăng trưởng
                    </h2>
                    <ResponsiveContainer width="100%" height={260}>
                        <LineChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip formatter={(v) => `${v.toLocaleString()} $`} />
                            <Line
                                type="monotone"
                                dataKey="revenue"
                                stroke="var(--primary-color)"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="report-card ai-card">
                <h2>Gợi ý chiến lược từ AI</h2>
                <p>• Doanh thu tăng mạnh vào quý II → nên đẩy mạnh marketing.</p>
                <p>• Tỷ lệ chuyển đổi chưa cao → cần tối ưu quy trình chăm sóc.</p>
            </div>
        </div>
    );
}
