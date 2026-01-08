import React from 'react';
import './KPI.css';
import { TrendingUp, TrendingDown } from 'lucide-react';

const KPI = ({ title, value, icon: Icon, trend, percentage, variant }) => {
    const isPositive = trend === 'up';

    return (
        <div className={`kpi-card kpi-${variant}`}>
            <div className="kpi-header">
                <div className="kpi-icon-wrapper">
                    {Icon && <Icon size={24} />}
                </div>
                <div className={`kpi-trend ${trend}`}>
                    {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    <span>{percentage}</span>
                </div>
            </div>

            <div className="kpi-content">
                <p className="kpi-value">{value}</p>
                <h3 className="kpi-title">{title}</h3>
            </div>
        </div>
    );
}

export default KPI;