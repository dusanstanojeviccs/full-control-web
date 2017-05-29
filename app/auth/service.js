import Ember from 'ember';

export default Ember.Service.extend({
	user: null,
	loggedIn: false,
	
	logout() {
		this.set("loggedIn", false);
		this.set("user", null);
		this.set("admin", null);
	},

	logIn(data) {
		if (data === null) {
			this.set("loggedIn", false);
			this.set("user", null);
			this.set("admin", null);
		} else {
			this.set("user", data.user);
			this.set("admin", data.admin);
		}
	},

	checkLogin(errorCallback, successCallback) {
		Ember.$.get("/rest/session").done((data) => {
			this.logIn(data);
			
			if (successCallback) {
				successCallback();
			}
		}).fail((jqXHR) => {
			this.logout();

			if (errorCallback) {
				errorCallback();
			}
		});
		
	},
});
