import Ember from 'ember';
import SortBy from 'ember-sort-table/mixins/sort-by-d';

export default Ember.Controller.extend(SortBy, {
	store: Ember.inject.service(),
	tableId: "companiesList",
	dataForTable: Ember.computed("model.companies.@each", function() { 
		return this.get("model.companies").toArray(); 
	}),

	notDeleted: Ember.computed("sortedData.@each.isDeleted", function() {
		return this.get("sortedData").filter(o => !o.get("isDeleted"));
	}),

	actions: {
		setupNewCompany() {
			let company = this.get("store").createRecord("company");
			
			this.set("company", company);
		},
		setCompany(company) {
			this.set("company", company);
		}
	}
});
