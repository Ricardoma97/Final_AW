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
			join.save().then(console.log("exito")).then(this.transitionToRoute('app.game',{queryParams:{game_id: game }}));
		}
	@action
		startGame(game){
			console.log(game);
			let play = this.store.peekRecord('game',parseInt(game));
			console.log(play.status);
			play.set('status', "2");
			console.log(play.status)
			play.save();
			this.transitionToRoute('/'+game+'?id='+game);
		}
	@action
		playGame(game){
			console.log(game);
			this.transitionToRoute('/'+game+'?id='+game);
		}
}
