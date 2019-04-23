import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Col, Container, Row, ButtonToolbar, Button,
} from 'reactstrap';
import { loadCoinsList, deleteCoin } from '../../redux/actions/coinsAtions';
import CoinsList from './components/CoinsList';


class CoinsPage extends Component {
  state = { listado: [] };

  async componentDidMount() {
    await loadCoinsList((r) => {
      this.setState({
        listado: r.data,
      });
    });
  }

  // eslint-disable-next-line react/sort-comp
  async loadinitialData() {
    await loadCoinsList((r) => {
      this.setState({
        listado: r.data,
      });
    });
  }

  coinDelete = (coinId) => {
    deleteCoin(coinId, (r) => {
      if (r.success) { this.loadinitialData(); }
    });
  }

  render() {
    const { listado } = this.state;
    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">COIN PAGE</h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Col md={6} />
            <Col md={6}>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="button">
                  <Link to="/coins/createcoin" style={{ color: '#FFF' }}>Create Coin</Link>
                </Button>
              </ButtonToolbar>
            </Col>
          </Col>
        </Row>
        <Row>
          <CoinsList listado={listado} coinDelete={this.coinDelete} />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => (
  {
    coins: state.coins,
  }
);
const mapDispatchToProps = dispatch => (
  {
    loadCoinsList() {
      dispatch(loadCoinsList());
    },
    deleteCoin() {
      dispatch(deleteCoin());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CoinsPage);
