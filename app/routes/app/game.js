import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppGameRoute extends Route {
	model (params) {
		return hash({
			// plays: this.store.findAll('play'),
			// games: this.store.findAll('game'), 
			// users: this.store.findAll('user'),
			users: this.store.findAll('user'),
			plays: this.store.query('play', { game_id: params.game_id }),
			game: this.store.findRecord('game', params.game_id),
			returnqueryParams:{ user_id: {refreshModel:true}}
		})
		
	}
}
