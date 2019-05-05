import { helper } from '@ember/component/helper';
//ready to start
export default helper(function rts(status/*, hash*/) {
	console.log(status[0]);//status
	console.log(status[1]);//numero de jugadores
  if(parseInt(status[0])===1&&parseInt(status[1])===2)
		return true;
	else return false;
});
