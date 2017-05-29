import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			users: this.store.query('user', {}),
			companies: this.store.query('company', {}),
		});	
	}
});
