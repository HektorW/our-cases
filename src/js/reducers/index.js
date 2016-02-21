
import { combineReducers } from 'redux';

function items() {

	return [{
		id: 'shadowofmordor',
		title: 'Lord of the Rings',
		description: 'Shadow of Mordor',
		image: 'res/shadowofmordor.jpg'
	}, {
		id: 'diablo',
		title: 'Diablo',
		description: 'Lord of Terror',
		image: 'res/diablo.jpg'
	}, {
		id: 'spiderman',
		title: 'The Amazing Spiderman',
		description: 'Your friendly neighborhood spiderman',
		image: 'res/spiderman.jpg'
	}, {
		id: 'starwars',
		title: 'Star Wars',
		description: 'The Force Awakens',
		image: 'res/starwars.jpg'
	}];
}

function serviceOffers() {
	return [{
		title: 'Pillar',
		items: [{
			title: 'Service Offer'
		}, {
			title: 'Service Offer'
		}, {
			title: 'Service Offer'
		}, {
			title: 'Service Offer'
		}]
	}, {
		title: 'Pillar',
		items: [{
			title: 'Service Offer'
		}, {
			title: 'Service Offer'
		}, {
			title: 'Service Offer'
		}, {
			title: 'Service Offer'
		}]
	}, {
		title: 'Pillar',
		items: [{
			title: 'Service Offer'
		}, {
			title: 'Service Offer'
		}, {
			title: 'Service Offer'
		}]
	}, {
		title: 'Pillar',
		items: [{
			title: 'Service Offer'
		}, {
			title: 'Service Offer'
		}, {
			title: 'Service Offer'
		}, {
			title: 'Service Offer'
		}]
	}];
}

const rootReducer = combineReducers({
	items,
	serviceOffers
});

export default rootReducer;
