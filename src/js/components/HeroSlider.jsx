
import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import { TransitionMotion, spring } from 'react-motion';

import HeroSliderItem from './HeroSliderItem.jsx';
import Indicator from './Indicator.jsx';


const propTypes = {
	items: PropTypes.array.isRequired
};

class HeroSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedIndex: 0
		};
	}

	@autobind
	onArrowClick(direction) {
		let itemCount = this.props.items.length;
		let selectedIndex = (itemCount + this.state.selectedIndex + direction) % itemCount;
		this.setState({ selectedIndex });
	}

	@autobind
	onIndicatorClick(selectedIndex) {
		this.setState({ selectedIndex });
	}

	onItemLeave() {
		return { opacity: spring(0), zIndex: 1 };
	}

	onItemEnter() {
		return { opacity: spring(1) };
	}


	render() {
		let { items } = this.props;
		let { selectedIndex } = this.state;
		let selectedItem = items[selectedIndex];

		return (
			<div className="hero-slider">

				{/* Item list */}
				<TransitionMotion
					willEnter={this.onItemEnter}
					willLeave={this.onItemLeave}
					styles={[{
						key: selectedItem.id,
						data: selectedItem,
						style: { opacity: 1 }
					}]}
				>
					{interpolatedStyles => {
						return (
							<div className="hero-slider__list">
								{interpolatedStyles.map(config => {
									return <HeroSliderItem key={config.key} item={config.data} style={config.style} />;
								})}
							</div>
						);
					}}
				</TransitionMotion>

				
				{/* Arrows */}
				<button
					className="hero-slider__arrow hero-slider__arrow--type-previous"
					onClick={() => this.onArrowClick(-1)}
				>
					Previous
				</button>
				<button
					className="hero-slider__arrow hero-slider__arrow--type-next"
					onClick={() => this.onArrowClick(1)}
				>
					Next
				</button>


				{/* Indicator */}
				<Indicator items={items} selectedIndex={selectedIndex} onItemClick={this.onIndicatorClick} />
			</div>
		);
	}
}

HeroSlider.propTypes = propTypes;

export default HeroSlider;
