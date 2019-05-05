import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppIndexRoute extends Route {
	model () {
		// return this.store.query('tweet', { user_id: 1 });
		// return this.store.findAll('tweet');
		return hash({
			//plays: this.store.findAll('play'),
			games: this.store.findAll('game'), 
			users: this.store.findAll('user') 
		})
	}
}
