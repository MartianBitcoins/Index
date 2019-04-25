import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Col, Container, Row, ButtonToolbar, Button,
} from 'reactstrap';
import { loadCoinsList, deleteCoin } from '../../redux/actions/coinsAtions';
import CoinsList from './components/CoinsList';


class CoinsPage extends Component {
  state = {
    listado: [],
    loading: true,
    loaded: false,
  };

  async componentDidMount() {
    await loadCoinsList((r) => {
      this.setState({
        listado: r.data,
      });
    });
    window.addEventListener('load', () => {
      this.setState({ loading: false });
      setTimeout(() => this.setState({ loaded: true }), 300);
    });
  }

  // eslint-disable-next-line react/sort-comp
  async loadInitialList() {
    await loadCoinsList((r) => {
      this.setState({
        listado: r.data,
      });
    });
  }

  deleteCoin = (coinId) => {
    this.setState({ loading: false });
    this.setState({ loaded: false });

    setTimeout(() => this.setState({ loaded: true }), 300);
    deleteCoin(coinId, (r) => {
      if (r.success) {
        this.loadInitialList();
      }
    });
  }

  render() {
    const { listado, loaded, loading } = this.state;
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
          {!loaded
              && (
              <div className={`load${loading ? '' : ' loaded'}`}>
                <div className="load__icon-wrap">
                  <svg className="load__icon">
                    <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                  </svg>
                </div>
              </div>
              )
              }
          <CoinsList listado={listado} deleteCoin={this.deleteCoin} />
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
