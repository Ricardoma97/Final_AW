import Controller from '@ember/controller';
import { action} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RpslsgameController extends Controller {
	queryParams = ['game_id'];

	@tracked game_id;
	@action
	getBack(){
			this.transitionToRoute( 'app');
	}

	@action
	Play(play_id, newChoise){
			console.log(play_id);
			console.log(newChoise);
			let play = this.store.peekRecord('play',play_id);
			play.set('choise', newChoise);
			console.log(play);
			play.save();
	}

	@action 
	StartGame(id){
		console.log(id);
		let play = this.store.peekRecord('game',id);
			play.set('status', "2");
			play.save();
	}
}
