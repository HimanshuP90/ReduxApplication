import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incrementNumber, decrementNumber } from '../actions';

class Number extends Component {
	render () {
		return (
			<div>
				<div className="row col-sm-offset-5">
				<p>{this.props.num}</p>
				</div>
				<div className="row col-sm-offset-4">
					<Button bsStyle="primary" 
						onClick={() => this.props.incrementNumber(this.props.num)} >
						Increment
					</Button>
				</div>
				<div className="row col-sm-offset-8">
					<Button bsStyle="danger" 
						onClick={() => this.props.decrementNumber(this.props.num)} >
						Increment
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