import Ember from 'ember';
import SortBy from 'ember-sort-table/mixins/sort-by-d';

export default Ember.Controller.extend(SortBy, {
	store: Ember.inject.service(),
	tableId: "usersList",

	dataForTable: Ember.computed("model.users.@each", function() { 
		return this.get("model.users").toArray(); 
	}),

	notDeleted: Ember.computed("sortedData.@each.isDeleted", function() {
		return this.get("sortedData").filter(o => !o.get("isDeleted"));
	}),

	actions: {
		setupNewUser() {
			let user = this.get("store").createRecord("user");
			
			this.set("user", user);
		},
		setUser(user) {
			this.set("user", user);
		}
	}
});
