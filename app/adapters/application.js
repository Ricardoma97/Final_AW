// import DS from 'ember-data';

// export default class ApplicationAdapter extends DS.JSONAPIAdapter {
// }

import ActiveModelAdapter from 'active-model-adapter';

export default class ApplicationAdapter extends ActiveModelAdapter {
	host = "http://polar-basin-61192.herokuapp.com";
	// urlForUpdateRecord(id, modelname, snapshot){
	// 	console.log(snapshot);
	// 	let baseURL = this.buildURL();
	// 	if(modelname==='game'){
	// 	return baseURL+'/games/'+id+'/start';
	// 	}
	// 	else if((modelname==='plays')){
	// 		let baseURL = this.buildURL();
	// 		return baseURL+'/plays/'+id;
	// 	}
	// 	return baseURL+'/plays/'+id;
	// }
}