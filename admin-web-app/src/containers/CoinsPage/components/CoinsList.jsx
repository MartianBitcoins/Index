import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col, Table, ButtonToolbar, Button,
} from 'reactstrap';

const CoinsList = ({ listado, coinDelete }) => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Coin List</h5>
        </div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Pre ico price</th>
              <th>Price</th>
              <th>Platfrom</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { listado.map((list, key) => (
              <tr id={key}>
                <th scope="row">{list.id}</th>
                <td>{list.name}</td>
                <td>{list.rating}</td>
                <td>{ (undefined === list.details) ? '' : list.details.price }</td>
                <td>{ (undefined === list.details) ? '' : list.details.pre_ico_price }</td>
                <td>{list.mvp}</td>
                <td>
                  <ButtonToolbar className="form__button-toolbar">
                    <Button onClick={() => coinDelete(list.id)} color="warning" type="button">
                      Delete
                    </Button>
                  </ButtonToolbar>
                </td>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

CoinsList.propTypes = {
  listado: PropTypes.element.isRequired,
  coinDelete: PropTypes.element.isRequired,
};

export default CoinsList;
