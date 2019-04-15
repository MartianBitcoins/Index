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
          name="details['token']"
          label="Token"
          component="input"
          type="text"
          placeholder="Coin token"
        />
        <FieldsForm
          name="details['pre_ico_price']"
          label="Pre-ico Price"
          component="input"
          type="text"
          placeholder="Pre-ico Price"
        />
        <FieldsForm
          name="details['price']"
          label="Coins Price"
          component="input"
          type="text"
          placeholder="Coins Price"
        />

        <FieldsForm
          name="details['bonus']"
          label="Coins bonus"
          component="input"
          type="text"
          placeholder="Coins bonus"
        />
        <FieldsForm
          name="details['bounty']"
          label="Coins bounty"
          component="input"
          type="text"
          placeholder="Coins bounty"
        />
        <FieldsForm
          name="details['mvp']"
          label="Coins mvp"
          component="input"
          type="text"
          placeholder="Coins mvp"
        />
        <FieldsForm
          name="details['platfrom']"
          label="Coins platfrom"
          component="input"
          type="text"
          placeholder="Coins platfrom"
        />
        <FieldsForm
          name="details['accepting']"
          label="Coins accepting"
          component="input"
          type="text"
          placeholder="Coins accepting"
        />
        <FieldsForm
          name="details['minimum_investment']"
          label="Coins minimum investment"
          component="input"
          type="text"
          placeholder="Coins minimum investment"
        />
        <FieldsForm
          name="details['soft_cap']"
          label="Coins soft cap"
          component="input"
          type="text"
          placeholder="Coins soft cap"
        />
        <FieldsForm
          name="details['hard_cap']"
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
