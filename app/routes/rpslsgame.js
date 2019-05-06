import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class RPSLSgameRoute extends Route {
	model (params) {
		return hash({
			plays: this.store.findAll('play'),
			games: this.store.findAll('game'), 
			returnqueryParams:{ember_id: {refreshModel:true}}
		})
		
	}
}

