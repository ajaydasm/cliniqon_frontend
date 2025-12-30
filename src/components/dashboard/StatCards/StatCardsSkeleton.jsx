import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./Skeleton.css";

const StatCardsSkeleton = () => {
  return (
    <Row className="g-4 mb-4">
      {[1, 2, 3, 4].map((_, index) => (
        <Col xl={3} lg={6} key={index}>
          <Card className="stat-card">
            <Card.Body>
              <div className="skeleton skeleton-text small mb-2"></div>
              <div className="skeleton skeleton-text title"></div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatCardsSkeleton;
