import DS from 'ember-data';
const { Model } = DS;

export default class GameModel extends Model {
	@attr('number') id;
	@attr('string') code;
	@attr('string') status;
	@attr('string') winner_name;
	@attr('number')	total_users;
}
