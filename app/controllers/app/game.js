import Controller from '@ember/controller';
import { action} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AppgameController extends Controller {
	queryParams = ['id'];
	id=null;

	@tracked id;
	@action
	getBack(){
			this.transitionToRoute( 'app');
	}

	@action
	PlayGame(play_id, newChoise){
			console.log(play_id);
			console.log(newChoise);
			console.log("PlayGame");
			let play = this.store.peekRecord('play',parseInt(play_id));
			play.set('choice', newChoise);
			console.log(play);
			play.save();
			console.log(play);
			
	}

	@action 
	StartGame(id){
		console.log(id);
		console.log("StartGame");
		let play = this.store.peekRecord('game',id);
		play.set('status', "2");
		play.save();
	}
}
