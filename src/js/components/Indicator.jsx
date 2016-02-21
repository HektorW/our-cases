
import React, { Component, PropTypes } from 'react';

const propTypes = {
	items: PropTypes.array.isRequired,
	selectedIndex: PropTypes.number.isRequired,
	onItemClick: PropTypes.func.isRequired
};

class Indicator extends Component {

	render() {
		let { items, selectedIndex } = this.props;

		return (
			<div className="indicator">
				<ul className="indicator__list">
					{items.map((item, index) => {
						
						let className = 'indicator__item';
						if (index === selectedIndex) {
							className += ' indicator__item--state-selected';
						}

						return (
							<li
								className={className}
								key={item.id}
								onClick={() => this.props.onItemClick(index)}
							>
								{index}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

Indicator.propTypes = propTypes;

export default Indicator;
