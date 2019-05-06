import { helper } from '@ember/component/helper';

export default helper(function playGame(params/*, hash*/) {
 if(parseInt(params[0])===parseInt(params[1]))
		return true;
	else return false;
});
