import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  Col, Container, Row, Button, ButtonToolbar,
} from 'reactstrap';

import GerneralInfo from './components/forms/coinsGeneralInfo';
import CoinsDetailsInfo from './components/forms/coinsDetailsInfo';
import validate from './components/forms/validate';

// import showResults from './Show';
import { createCoins } from '../../redux/actions/coinsAtions';

// eslint-disable-next-line react/prefer-stateless-function
class CreateCoin extends Component {
  componentWillMount() {
    console.log(this.props, 'componentWillMount');
  }

  sendindData = () => {
    console.log(this.props, ' PROPPPPPPPPPS');
    if (undefined !== this.props) {
      // eslint-disable-next-line react/prop-types
      const { frm } = this.props;
      console.log(frm.values, 'Antes de enciar');
      createCoins(frm.values, (r) => {
        console.log(r);
      });
    }
  }

  render() {
    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">Create a coins</h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <form id="form" className="form form--horizontal">
              <GerneralInfo />
              <CoinsDetailsInfo />
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="button" onClick={this.sendindData}> Guardar </Button>
                <Button type="button"> Cancel </Button>
              </ButtonToolbar>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state, 'mapStateToProps');
  return {
    coins: state.coins,
    frm: state.form.create_coin,
  };
};
const mapDispatchToProps = dispatch => (
  {
    createCoins() {
      dispatch(createCoins());
    },
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'create_coin', validate })(CreateCoin));
