import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppGameRoute extends Route {
	model () {
		// return this.store.query('tweet', { user_id: 1 });
		// return this.store.findAll('tweet');
		return hash({
			//plays: this.store.query('play',{user_id: params.user_id}),
			//game: this.store.peekRecord('game',{game_id : params.game_id})
		})
	}
}
