import React from 'react';
import "./Client.css";
import {
    UserPlus,
    Search,
    Filter,
    Pencil,
    Trash2,
    MoreVertical,
    Download,
    ChevronRight
} from 'lucide-react';
const customers = [
    { id: 1, name: "Nguyễn Văn A", company: "PepsiCo", phone: "0901 234 567", email: "vana@pepsico.com", revenue: 120000000, status: "active", statusText: "Đang hoạt động" },
    { id: 2, name: "Trần Thị B", company: "Coca-Cola", phone: "0912 345 678", email: "thib@cocacola.com", revenue: 85000000, status: "potential", statusText: "Tiềm năng" },
    { id: 3, name: "Lê Văn C", company: "Nestlé", phone: "0987 654 321", email: "vanc@nestle.com", revenue: 45000000, status: "stopped", statusText: "Ngừng giao dịch" },
];

const Client = () => {
    // const [search, setSearch] = useState("");

    return (
        <div className="client-page">
            {/* Header: Gom nhóm tiêu đề và nút bấm chính */}
            <div className="page-header">
                <div className="header-title">
                    <div className="breadcrumb">Dashboard <ChevronRight size={14} /> <span>Khách hàng</span></div>
                    <h1>Danh sách khách hàng</h1>
                </div>
                <div className="header-actions">
                    <button className="btn-secondary"><Download size={18} /> Xuất file</button>
                    <button className="btn-primary"><UserPlus size={18} /> Thêm khách hàng</button>
                </div>
            </div>

            {/* Main Card: Chứa toàn bộ bộ lọc và bảng */}
            <div className="main-card">
                <div className="table-toolbar">
                    <div className="search-wrapper">
                        <Search className="search-icon" size={18} />
                        <input type="text" placeholder="Tìm tên khách hàng, mã số thuế..." />
                    </div>
                    <div className="filter-wrapper">
                        <span className="filter-label"><Filter size={16} /> Bộ lọc:</span>
                        <div className="filter-tags">
                            <button className="tag active">Tất cả</button>
                            <button className="tag">Loại KH</button>
                            <button className="tag">Khu vực</button>
                            <button className="tag">Ngành hàng</button>
                        </div>
                    </div>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Khách hàng</th>
                                <th>Công ty</th>
                                <th className="text-right">Doanh thu</th>
                                <th className="text-center">Trạng thái</th>
                                <th className="text-right">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="customer-cell">
                                            <div className={`avatar color-${item.id % 4}`}>
                                                {item.name.charAt(0)}
                                            </div>
                                            <div className="info">
                                                <span className="name">{item.name}</span>
                                                <span className="sub">{item.phone}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="company-cell">
                                            <span className="company-name">{item.company}</span>
                                            <span className="sub">{item.email}</span>
                                        </div>
                                    </td>
                                    <td className="text-right font-bold">
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.revenue)}
                                    </td>
                                    <td className="text-center">
                                        <span className={`status-pill ${item.status}`}>
                                            {item.statusText}
                                        </span>
                                    </td>
                                    <td className="text-right">
                                        <div className="action-group">
                                            <button className="icon-btn edit" aria-label="Sửa khách hàng"><Pencil size={16} /></button>
                                            <button className="icon-btn delete" aria-label="Xóa khách hàng"><Trash2 size={16} /></button>
                                            <button className="icon-btn"><MoreVertical size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Client;