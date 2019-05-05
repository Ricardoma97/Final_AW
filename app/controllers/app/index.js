import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AppIndexController extends Controller {
	@action 
	submitGame(index){
		let game =this.store.createRecord('game');
		game.save();
	     // code to save or sendAction
	     // e.g. let selectedOption = this.get('selectedOption')
	     // this.sendAction('submit', selectedOption)
	}
	@action
	joinGame(user, game){
		console.log(user ,parseInt(game));
		let join = this.store.createRecord('play',{
			user_id:user,
			game_id:game,
			choise: null
		});
		join.save();
		this.transitionToRoute('/game:'+game);
	}
}
