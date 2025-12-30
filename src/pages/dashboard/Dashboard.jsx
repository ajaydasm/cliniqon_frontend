import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Table, Card, Row, Col } from "react-bootstrap";
import "./Dashboard.css";
import StatCards from "../../components/dashboard/StatCards/StatCards";
import AccountingChart from "../../components/dashboard/AccountingChart/AccountingChart";
import ProjectsTable from "../../components/dashboard/ProjectTable/ProjectsTable";
import BalanceDonutChart from "../../components/dashboard/BalanceDonutChart/BalanceDonutChart";
import Schedule from "../../components/dashboard/schedule/Schedule";

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-container container-fluid px-4">
     
      {/* Header */}
    <div className="mx-2 my-0 p-2">
      <h4>Hello, {user?.name || "User"}</h4>
      <small className="text-muted">
        Check your activities in this dashboard.
      </small>
    </div>

      {/* Chart Section */}
      <Row className="g-4 mb-4">
        <Col xl={9}>

          <StatCards/>
          <AccountingChart />
          <ProjectsTable />

        </Col>

        <Col xl={3}>

          <BalanceDonutChart/>

          <Schedule />

        </Col>
      </Row>

    </div>
  );
};

export default Dashboard;
