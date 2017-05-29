import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		signin() {
			Ember.$.getJSON("/rest/login", {
				username: this.get("username"),
				password: this.get("password"),
			}).then((response) => {

				if (response.role === "admin") {
					this.transitionToRoute("admin.users");
				} else if (response.role === "user") {
					this.transitionToRoute("user.clients");
				} else {
					this.get("notifications").error("Unesite ispravne podatke");
				}
			}, () => {
				this.get("notifications").error("Unesite ispravne podatke");
			});
		}
	}
});
