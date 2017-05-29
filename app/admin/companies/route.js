import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			companies: this.store.query('company', {}),
		});	
	}
});
