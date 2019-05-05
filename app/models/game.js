import DS from 'ember-data';

const { Model, attr } = DS;

export default class GameModel extends Model {
	//@attr('number') id;
	@attr('string') code;
	@attr('string') status;
	@attr('number')	winner_id;
	@attr('string') winner_name;
	@attr('number')	total_users;
}
