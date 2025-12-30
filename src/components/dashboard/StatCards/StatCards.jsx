import React, { useEffect, useState } from "react";
import { Row, Col, Card, Alert } from "react-bootstrap";
import {
  Wallet,
  ArrowDownCircle,
  FolderKanban,
  CheckCircle
} from "lucide-react";
import api from "../../../shared/api/axios";
import StatCardsSkeleton from "./StatCardsSkeleton";
import "./StatCard.css";

const StatCards = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await api.get("/dashboard/summary");
        setStats(res.data.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load summary");
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  if (loading) return <StatCardsSkeleton />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Row className="g-4 mb-4">
      {/* Total Earning */}
      <Col xl={3} lg={6}>
        <Card className="stat-card">
          <Card.Body className="d-flex align-items-center gap-3">
            <div className="icon-box ">
              <Wallet size={18} className="text-white" />
            </div>
            <div>
              <small className="text-muted">Total Earning</small>
              <h5 className="mb-0 fw-semibold">
                ${stats.total_earnings / 1000}k
              </h5>
              <small className="text-dark">+10.80%</small>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Withdraw */}
      <Col xl={3} lg={6}>
        <Card className="stat-card">
          <Card.Body className="d-flex align-items-center gap-3">
            <div className="icon-box ">
              <ArrowDownCircle size={18} className="text-white" />
            </div>
            <div>
              <small className="text-muted">Withdraw</small>
              <h5 className="mb-0 fw-semibold">
                ${stats.withdraw_amount / 1000}k
              </h5>
              <small className="text-dark">+5.80%</small>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Total Projects */}
      <Col xl={3} lg={6}>
        <Card className="stat-card">
          <Card.Body className="d-flex align-items-center gap-3">
            <div className="icon-box ">
              <FolderKanban size={18} className="text-white" />
            </div>
            <div>
              <small className="text-muted">Total Projects</small>
              <h5 className="mb-0 fw-semibold">
                {stats.total_projects}
              </h5>
              <small className="text-dark">+10.80%</small>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Ongoing */}
      <Col xl={3} lg={6}>
        <Card className="stat-card">
          <Card.Body className="d-flex align-items-center gap-3">
            <div className="icon-box">
              <CheckCircle size={18} className="text-white" />
            </div>
            <div>
              <small className="text-muted">Ongoing</small>
              <h5 className="mb-0 fw-semibold">
                {stats.ongoing_projects.toString().padStart(2, "0")}
              </h5>
              <small className="text-dark">+10.80%</small>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatCards;
