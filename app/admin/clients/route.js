import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			clients: this.store.query('client', {}),
			companies: this.store.query('company', {}),
		});	
	}
});
