import DS from 'ember-data';
const { Model,attr} = DS;

export default class PlayModel extends Model {
	@attr('string') user_id;
	@attr('string') game_id;
	@attr('number') choise;
}
