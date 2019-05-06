import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GameCardComponent extends Component {
	@tracked state={
		gameid : 0
	}
}
