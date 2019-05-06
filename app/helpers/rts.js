import { helper } from '@ember/component/helper';
//ready to start
export default helper(function rts(status/*, hash*/) {
  if(parseInt(status[0])===1&&parseInt(status[1])===2)
		return true;
	else return false;
});
