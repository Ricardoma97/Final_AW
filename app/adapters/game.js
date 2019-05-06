import ApplicationAdapter from './application';

export default class GameAdapter extends ApplicationAdapter {
	host = "http://polar-basin-61192.herokuapp.com";
	 urlForUpdateRecord(id, modelname, snapshot){
		console.log("Dentro de gameAdapter");
		let baseURL = this.buildURL();
		return baseURL+'/games/'+id+'/start';
}
}
