import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { getBalanceChartApi } from "../../../shared/api/apiHelper";

ChartJS.register(ArcElement, Tooltip);

const BalanceDonutCard = () => {
  const [data, setData] = useState(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBalanceChartApi();
      const apiData = res.data.data;

      const withdraw = Number(apiData.total_withdrawn) || 0;
      const balance = Number(apiData.balance) || 0;
      const total = withdraw + balance;

      setPercentage(total ? ((withdraw / total) * 100).toFixed(1) : 0);

      setData({
        labels: ["Withdraw Amount", "Balance Amount"],
        datasets: [
          {
            data: [withdraw, balance],
            backgroundColor: ["#FF8A8A", "#2F2C5C"],
            borderWidth: 0,
            cutout: "72%",
          },
        ],
      });
    };

    fetchData();
  }, []);

  if (!data) return null;

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Chart</h3>

      <div style={styles.content}>
        {/* Legend */}
        <div style={styles.legend}>
          <Legend color="#FF8A8A" label="Withdraw Amount" />
          <Legend color="#2F2C5C" label="Balance Amount" />
        </div>

        {/* Chart */}
        <div style={styles.chartWrapper}>
          <Doughnut
            data={data}
            options={{
              plugins: { tooltip: { enabled: false } },
              maintainAspectRatio: false,
            }}
          />
          <div style={styles.centerText}>{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

const Legend = ({ color, label }) => (
  <div style={styles.legendItem}>
    <span style={{ ...styles.dot, backgroundColor: color }} />
    <span>{label}</span>
  </div>
);

const styles = {
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    width: "100%",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },
  title: {
    marginBottom: "16px",
    fontSize: "16px",
    fontWeight: 600,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  legend: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    fontSize: "13px",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
  },
  chartWrapper: {
    position: "relative",
    width: "140px",
    height: "140px",
  },
  centerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: 600,
    fontSize: "16px",
  },
};

export default BalanceDonutCard;
