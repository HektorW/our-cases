
import React, { Component, PropTypes } from 'react';


const vignetteImage = 'res/vignette.png';

const propTypes = {
	item: PropTypes.object.isRequired,
	style: PropTypes.object.isRequired
};

class HeroSliderItem extends Component {

	render() {
		let { item, style } = this.props;
		let renderStyle = { ...style };

		renderStyle.backgroundImage = 
			`url(${item.image}), url(${vignetteImage})`;

		return (
			<div className="hero-slider__item" style={renderStyle}>
				<div className="hero-slider__item-inner">
					<h2 className="hero-slider__item-title">{item.title}</h2>
					<p className="hero-slider__item-description">{item.description}</p>
				</div>
			</div>
		);
	}
}

HeroSliderItem.propTypes = propTypes;

export default HeroSliderItem;
