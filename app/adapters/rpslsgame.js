import ApplicationAdapter from './application';

export default class RpslsgameAdapter extends ApplicationAdapter {
		host = "http://polar-basin-61192.herokuapp.com";
		urlForUpdateRecord(id, modelname, snapshot){
		console.log(snapshot);
		let baseURL = this.buildURL();
		
		return baseURL+'/games/'+id+'/start';
		}
}
/*urlForUpdateRecord(id, modelname, snapshot){
		let baseURL = this.buildURL();
		if(modelname==='game'){
		return baseURL+'/games/'+id+'/start';
		}
		else if((modelname==='plays')){
			let baseURL = this.buildURL();
			return baseURL+'/plays/'+id;
		}
		return snapshot;
	}
	*/