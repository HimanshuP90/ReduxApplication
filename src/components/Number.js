import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incrementNumber, decrementNumber } from '../actions';

class Number extends Component {
	render () {
		return (
			<div>
				<div className="row col-md-offset-5">
					<b>{this.props.num}</b>
				</div>
				<div className="row col-md-offset-4">
					<Button bsStyle="primary" 
						onClick={() => this.props.incrementNumber(this.props.num)} >
						Increment
					</Button>
					<Button bsStyle="danger" className="col-sm-offset-1"
						onClick={() => this.props.decrementNumber(this.props.num)} >
						Decrement
					</Button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('mapStateToProps - Number.js', state);
	return {
		num: state.num
	}
}

function mapDispatchProps(disptach) {
	return bindActionCreators({incrementNumber, decrementNumber}, disptach);
}

export default connect(mapStateToProps, mapDispatchProps)(Number);