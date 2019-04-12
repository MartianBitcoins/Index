import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Card, CardBody, Col } from 'reactstrap';

class createForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Col md={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Info</h5>
              <h5 className="subhead">Labels are left from fields</h5>
            </div>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">ESTA</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                    placeholder="Default Input"
                  />
                </div>
              </div>
              <button type="button">
                HOLA
              </button>
            </form>
            <p>The coin informations</p>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default createForm;
