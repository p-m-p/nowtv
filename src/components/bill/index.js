import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import assign from 'object-assign';
import Summary from 'components/summary';
import Package from 'components/package';
import CallCharges from 'components/call-charges';
import SkyStore from 'components/sky-store';
import {} from './style.less';
import * as actionCreators from 'actions';

function mapState(state) {
  return {
    isLoading: state.isLoading, summary: assign({total: state.total}, state.statement),
    package: state.package,
    callCharges: assign({showAll: state.showAllCalls}, state.callCharges),
    skyStore: state.skyStore
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class Bill extends Component {
  componentDidMount() {
    this.props.fetchBill();
  }

  render() {
    return this.props.isLoading ? this.loadingState() : this.bill();
  }

  loadingState() {
    return <div className='bill loading'>Loading...</div>;
  }

  bill() {
    return (
      <article className='bill'>
        <Summary {...this.props.summary}/>
        <Package {...this.props.package}/>
        <CallCharges {...this.props.callCharges} onClick={this.props.toggleCallCharges}/>
        <SkyStore {...this.props.skyStore}/>
      </article>
    );
  }
}

export default connect(mapState, mapDispatch)(Bill);
