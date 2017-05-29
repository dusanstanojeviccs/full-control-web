import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			clients: this.store.query('client', {}),
			listdata: Ember.$.getJSON('/rest/listdata'),
		});	
	},

	setupController(controller, model) {
		this._super(controller, model);

		console.log(model.listdata);

		model.clients.forEach(client => {
			client.set("connected", model.listdata.includes(client.get("username")));
		});
	},

	actions: {
		transitionToSignIn() {
			this.transitionTo("signin");
		},
		refresh() {
			this.refresh();
		}
	}
});
