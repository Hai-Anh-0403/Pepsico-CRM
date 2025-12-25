import "./Client.css";
import {
    UserPlus,
    Search,
    Filter,
    Pencil,
    Trash2,
    MoreVertical,
    Mail,
    Phone
} from 'lucide-react';
const Client = () => {
    const customers = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            company: "PepsiCo",
            phone: "0901 234 567",
            email: "vana@pepsico.com",
            revenue: 120000000,
            status: "Đang hoạt động",
        },
        {
            id: 2,
            name: "Trần Thị B",
            company: "Coca-Cola",
            phone: "0912 345 678",
            email: "thib@cocacola.com",
            revenue: 85000000,
            status: "Tiềm năng",
        },
        {
            id: 3,
            name: "Lê Văn C",
            company: "Nestlé",
            phone: "0987 654 321",
            email: "vanc@nestle.com",
            revenue: 45000000,
            status: "Ngừng giao dịch",
        },
    ];

    return (
        <>
            <h1 style={{ margin: "10px" }}>Khách Hàng</h1>
            <div className="Client-Profile">
                <div className="Client-top">
                    <h4 >Bộ Lọc :</h4>
                    <a href="#">Loại KH</a>
                    <a href="#">Khu vực</a>
                    <a href="#">Ngành hàng</a>
                    <a href="#">Tag</a>

                </div>
                <div className="Client-mid">
                    <h4 style={{ margin: "25px" }}>Danh sách khách hàng :</h4>
                    <table>
                        <thead>


                            <tr>
                                <th>Tên</th>
                                <th> công ty</th>
                                <th>SĐT</th>
                                <th>Email</th>
                                <th>Doanh thu</th>
                                <th colSpan={2}>Trạng Thái</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.company}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.revenue)}</td>
                                        <td><span className={`status-badge ${item.status === "Đang hoạt động" ? "active" : item.status === "Tiềm năng" ? "potential" : "stopped"}`}>{item.status}</span></td>
                                        <td><div className="action-buttons">
                                            <button className="btn-edit" title="chỉnh sửa"><Pencil size={18} color="#0046be" /></button>
                                            <button className="btn-delete" title="xóa"><Trash2 size={18} color="#fa5252" /></button>
                                            <button className="btn-more"><MoreVertical size={18} color="#999" /></button>
                                        </div></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Client;