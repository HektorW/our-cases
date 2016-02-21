
import React, { Component, PropTypes } from 'react';


const propTypes = {
	serviceOffers: PropTypes.array.isRequired
};

class ServiceOffers extends Component {

	render() {
		let { serviceOffers } = this.props;
		
		return (
			<div className="service-offers">
				<h2 className="service-offers__title">Service Offers</h2>

				<ul className="service-offers__list">
					{serviceOffers.map((serviceOfferCategory, index) => {
						return (
							<li className="service-offers__category" key={index}>
								<h3 className="service-offers__category-title">{serviceOfferCategory.title}</h3>
								<ul className="service-offers__category-list">
									{serviceOfferCategory.items.map((item, index) => {
										return (
											<li className="service-offers__item" key={index}>
												<a className="service-offers__item-link" href="#">{item.title}</a>
											</li>
										);
									})}
								</ul>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

ServiceOffers.propTypes = propTypes;

export default ServiceOffers;
