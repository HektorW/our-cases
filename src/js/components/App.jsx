
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/ourCasesStore';

import OurCases from './OurCases.jsx';

const store = window.store = configureStore();


class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<OurCases />
			</Provider>
		);
	}
}

export default App;
