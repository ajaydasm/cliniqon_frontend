import React, { useEffect, useState } from "react";
import { Card, Dropdown, Alert } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from "recharts";
import { ChevronDownIcon } from "lucide-react";
import AccountingChartSkeleton from "./AccountingChartSkeleton";
import "./accounting-chart.css";
import { getAccountingDataApi } from "../../../shared/api/apiHelper";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="chart-tooltip">
        <strong>{label}</strong>
        <div className="amount">
          ₹{Number(payload[0].value).toLocaleString()}
        </div>
        <small>FY 2025</small>
      </div>
    );
  }
  return null;
};

const AccountingChart = () => {
  const [chartData, setChartData] = useState([]);
  const [sort, setSort] = useState("monthly");
  const [activeMonth, setActiveMonth] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchChart();
  }, [sort]);

  const fetchChart = async () => {
    try {
      setLoading(true);

      const res = await getAccountingDataApi(sort);

      // 🔥 Transform API data
      const formattedData = res.data.data.map((item) => ({
        month: item.month.substring(0, 3), // June → Jun
        fullMonth: `${item.month} ${item.year}`,
        amount: Number(item.total),
      }));

      setChartData(formattedData);
      setActiveMonth("");
    } catch (err) {
      setError("Failed to load accounting data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <AccountingChartSkeleton />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Card className="accounting-card mb-4">
      <Card.Body>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h5 className="mb-0" style={{ color: "#151831" }}>
              Accounting
            </h5>
            <small className="text-muted">Overall Earnings</small>
          </div>

          <Dropdown align="end">
            <Dropdown.Toggle variant="light" className="sort-toggle">
              Sort by: <strong>{sort}</strong>
              <ChevronDownIcon size={14} className="ms-1" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {["monthly", "weekly", "yearly"].map((item) => (
                <Dropdown.Item
                  key={item}
                  active={sort === item}
                  onClick={() => setSort(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

          {/* Chart */}
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={chartData} barSize={28}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#474a7bff" />
                <stop offset="100%" stopColor="#c9ccff" />
              </linearGradient>

              <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0b0f2f" />
                <stop offset="100%" stopColor="#4b4e7c" />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 6"
              vertical={false}
              stroke="#eef0ff"
            />

            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `₹${v / 1000}k`}
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="amount"
              radius={[12, 12, 0, 0]}
              animationDuration={900}
              onClick={(data) => setActiveMonth(data.month)}
              style={{ cursor: "pointer" }}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    entry.month === activeMonth
                      ? "url(#activeGradient)"
                      : "url(#barGradient)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

export default AccountingChart;
