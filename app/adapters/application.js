// import DS from 'ember-data';

// export default class ApplicationAdapter extends DS.JSONAPIAdapter {
// }

import ActiveModelAdapter from 'active-model-adapter';

export default class ApplicationAdapter extends ActiveModelAdapter {
	host = "http://polar-basin-61192.herokuapp.com";
}