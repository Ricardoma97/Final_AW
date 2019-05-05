import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GameCardComponent extends Component {
	@tracked state={
  		gameid : 0
  	}
}
