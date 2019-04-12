import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import FieldsForm from '../fieldForm';

const CoinsDetailsInfo = () => (

  <Col md={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Detail coin info</h5>
        </div>
        <FieldsForm
          name="details_bonus"
          label="Coins bonus"
          component="input"
          type="text"
          placeholder="Coins bonus"
        />
        <FieldsForm
          name="details_bounty"
          label="Coins bounty"
          component="input"
          type="text"
          placeholder="Coins bounty"
        />
        <FieldsForm
          name="details_mvp"
          label="Coins mvp"
          component="input"
          type="text"
          placeholder="Coins mvp"
        />
        <FieldsForm
          name="details_platfrom"
          label="Coins platfrom"
          component="input"
          type="text"
          placeholder="Coins platfrom"
        />
        <FieldsForm
          name="details_accepting"
          label="Coins accepting"
          component="input"
          type="text"
          placeholder="Coins accepting"
        />
        <FieldsForm
          name="details_minimum_investment"
          label="Coins minimum investment"
          component="input"
          type="text"
          placeholder="Coins minimum investment"
        />
        <FieldsForm
          name="details_soft_cap"
          label="Coins soft cap"
          component="input"
          type="text"
          placeholder="Coins soft cap"
        />
        <FieldsForm
          name="details_hard_cap"
          label="Coins hard cap"
          component="input"
          type="text"
          placeholder="Coins hard cap"
        />
      </CardBody>
    </Card>
  </Col>
);
export default CoinsDetailsInfo;
