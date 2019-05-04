import DS from 'ember-data';
const { Model, attr} = DS;

export default class UserModel extends Model {
	//@attr('string') id;
	@attr('string') username;
	@attr('string') email;
}
