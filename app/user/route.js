import Ember from 'ember';

export default Ember.Route.extend({
	auth: Ember.inject.service(),

	beforeModel() {
		var auth = this.get("auth");
		
		return new Ember.RSVP.Promise((resolve, reject) => {
			auth.checkLogin(() => {
				resolve();
				this.transitionTo("signin");
			}, () => {
				resolve();
				
				if (!this.get("auth.user")) {
					this.transitionTo("signin");
				}
			});

		});
	},

	actions: {
		willTransition() {
			this.get("auth").checkLogin(() => {
				this.transitionTo("signin");
			});
		}
	}
});
