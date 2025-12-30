import React from "react";
import { Card } from "react-bootstrap";
import "./accounting-chart.css";

const AccountingChartSkeleton = () => {
  return (
    <Card className="accounting-card">
      <Card.Body>
        <div className="d-flex justify-content-between mb-3">
          <div>
            <div className="skeleton skeleton-title mb-2"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
          <div className="skeleton skeleton-dropdown"></div>
        </div>

        <div className="skeleton-chart">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="skeleton-bar"></div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default AccountingChartSkeleton;
