import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import FieldsForm from '../fieldForm';

const GerneralInfo = () => (

  <Col md={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Coin info</h5>
          <h5 className="subhead">Coin general informations</h5>
        </div>
        <FieldsForm name="name" label="Name" type="text" component="input" placeholder="Coin name" />
        <FieldsForm
          name="descriptions"
          label="Descriptions"
          component="textarea"
          type="textarea"
          placeholder="Coin descriptions"
        />
        <FieldsForm
          name="rating"
          label="Rating"
          component="input"
          type="number"
          placeholder="Coin raiting"
        />
        <FieldsForm
          name="price_time"
          label="Price Time"
          component="input"
          type="text"
          placeholder="Coin Price Time"
        />
        <FieldsForm
          name="ico_time"
          label="Ico Time"
          component="input"
          type="text"
          placeholder="Ico Time"
        />
        <FieldsForm
          name="details_token"
          label="Token"
          component="input"
          type="text"
          placeholder="Coin token"
        />
        <FieldsForm
          name="details_pre_ico_price"
          label="Pre-ico Price"
          component="input"
          type="text"
          placeholder="Pre-ico Price"
        />
        <FieldsForm
          name="details_price"
          label="Coins Price"
          component="input"
          type="text"
          placeholder="Coins Price"
        />
      </CardBody>
    </Card>
  </Col>
);
export default GerneralInfo;
