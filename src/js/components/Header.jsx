
import React, { Component, PropTypes } from 'react';

const propTypes = {};

class Header extends Component {

	render() {
		return (
			<header className="header">
				<div className="header__inner">
					<div className="header__logo">DigitasLBi</div>
				</div>
			</header>
		);
	}
}

Header.propTypes = propTypes;

export default Header;
