 /*jshint unused:false*/

import DS from 'ember-data';
export default DS.RESTAdapter.extend({
	namespace: 'rest',
	
	deleteRecord: function (store, type, snapshot) {
		var url = this.get("namespace") + "/" + type.modelName + "/" + snapshot.id;

		return this.ajax(url, "DELETE");
	},

	createRecord: function (store, type, snapshot) {
		var data = {};
		var serializer = store.serializerFor(type.modelName);

		serializer.serializeIntoHash(data, type, snapshot);

		var id = snapshot.id;
		var url = this.get("namespace") + "/" + type.modelName;

		return this.ajax(url, "POST", { data: data });
	},

	updateRecord: function (store, type, snapshot) {
		var data = {};
		var serializer = store.serializerFor(type.modelName);

		serializer.serializeIntoHash(data, type, snapshot);

		var id = snapshot.id;
		var url = this.get("namespace") + "/" + type.modelName;

		return this.ajax(url, "PUT", { data: data });
	},

	findAll(modelName, query, params, modelClass) {
		return Ember.$.getJSON(this.get("namespace") + "/" + modelClass.type.modelName, params);
  	},
  	
	query(modelName, query, params, modelClass) {
		return Ember.$.getJSON(this.get("namespace") + "/" + modelClass.type.modelName, params);
  	},

	shouldReloadRecord: function(store, snapshot) {
		return true;
	},

	shouldReloadAll: function(store, snapshot) {
		return true;
	},

	shouldBackgroundReloadRecord: function(store, snapshot) {
		return true;
	},

	shouldBackgroundReloadAll: function(store, snapshot) {
		return true;
	}
});