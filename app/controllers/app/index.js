import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AppIndexController extends Controller {
	@action 
		submitGame(){
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
			join.save().then(console.log("exito"));
			this.transitionToRoute('RPSLSgame',{queryParams:{game_id: game }});
		}
	@action
		startGame(game){
			console.log(game);
			let play = this.store.peekRecord('game',parseInt(game));
			console.log(play.status);
			play.set('status', "2");
			console.log(play.status)
			play.save();
		}
	@action
		@action
		playGame(game){
			//this.transitionToRoute('RPSLSgame',{queryParams:{game_id: game }});
		}
}
