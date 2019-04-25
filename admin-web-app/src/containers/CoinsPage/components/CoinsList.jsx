import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col, Table,
} from 'reactstrap';

const CoinsList = ({ listado, deleteCoin }) => {
  console.log('Listado:', listado);
  return (
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
                  <th scope="row">
                    {
                      // eslint-disable-next-line no-underscore-dangle
                      list._id
                    }
                  </th>
                  <td>{list.name}</td>
                  <td>{list.rating}</td>
                  <td>{ (undefined === list.details) ? '' : list.details.price }</td>
                  <td>{ (undefined === list.details) ? '' : list.details.pre_ico_price }</td>
                  <td>{list.mvp}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        // eslint-disable-next-line no-underscore-dangle
                        deleteCoin(`${list._id}`);
                      }
                              }
                    >
                      Delete
                    </button>
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
};

CoinsList.propTypes = {
  listado: PropTypes.element.isRequired,
  deleteCoin: PropTypes.element.isRequired,
};

export default CoinsList;
