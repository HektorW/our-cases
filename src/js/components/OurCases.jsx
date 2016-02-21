
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
import HeroSlider from './HeroSlider.jsx';
import ServiceOffers from './ServiceOffers.jsx';


const propTypes = {
	items: PropTypes.array.isRequired,
	serviceOffers: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
};


class OurCases extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let { items } = this.props;

		if (!items || items.length === 0) {
			return <div>No Items</div>;
		}

		return (
			<div className="our-cases">
				<Header />

				<HeroSlider items={items} />
				<ServiceOffers serviceOffers={this.props.serviceOffers} />

				<Footer />
			</div>
		);
	}
}

OurCases.propTypes = propTypes;

export default connect(state => state)(OurCases);
