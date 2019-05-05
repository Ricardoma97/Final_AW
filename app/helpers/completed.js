import { helper } from '@ember/component/helper';

export default helper(function completed(total/*, hash*/) {
  if(parseInt(total)===3)
		return true;
	else return false;
});
