import { helper } from '@ember/component/helper';

export default helper(function dif(total/*, hash*/) {
	if(parseInt(total)===2)
		return true;
	else return false;
});
