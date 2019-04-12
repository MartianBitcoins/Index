import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Example Three</h5>
          <h5 className="subhead">Example 333333</h5>
        </div>
        <p>Your content here</p>
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
