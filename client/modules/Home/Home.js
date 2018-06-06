import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

class Home extends Component {
	render() {
		return (
			<div>
				<h2>Welcome in my BLOG !!!</h2>
				<Link to="/" >Click here to see the posts...</Link>
			</div>
		)
	}
};

export default Home;