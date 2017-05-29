import Ember from 'ember';
import SortBy from 'ember-sort-table/mixins/sort-by-d';

export default Ember.Controller.extend(SortBy, {
	store: Ember.inject.service(),
	tableId: "clientsList",
	dataForTable: Ember.computed("model.clients.@each", function() { 
		return this.get("model.clients").toArray(); 
	}),

	notDeleted: Ember.computed("sortedData.@each.isDeleted", function() {
		return this.get("sortedData").filter(o => !o.get("isDeleted"));
	}),

	actions: {
		setupNewClient() {
			let client = this.get("store").createRecord("client");
			
			this.set("client", client);
		},
		setClient(client) {
			this.set("client", client);
		}
	}
});
