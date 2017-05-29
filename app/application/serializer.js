import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	primaryKey: '_id',
	serializeIntoHash(data, type, snapshot) {
		this._super(data, type, snapshot);

		console.log(type);
		data[type.modelName]._id = snapshot.id;
	},
	normalizeDeleteRecordResponse(store, primaryModelClass, payload, id, requestType) {
		var payload_ = {};
		payload_[Ember.Inflector.inflector.pluralize(primaryModelClass.modelName)] = {"_id": id};
		
		return this._super(store, primaryModelClass, payload_, id, requestType);
	},
	normalizeSingleResponse: function(store, primaryModelClass, payload, id, requestType) {
		var newpayload = {};
		var typeKey = primaryModelClass.modelName;
		
		newpayload[typeKey] = payload[Ember.Inflector.inflector.pluralize(primaryModelClass.modelName)];
		
		return this._super(store, primaryModelClass, newpayload, id, requestType);
	},

	normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
		var newpayload = {};
		var typeKey = Ember.Inflector.inflector.pluralize(primaryModelClass.modelName);
		newpayload[typeKey] = payload[primaryModelClass.modelName];
		
		return this._super(store, primaryModelClass, newpayload, id, requestType);
	},

	normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
		let loadedRecords = store.peekAll(primaryModelClass.modelName);

		let payloadRecords = payload[Object.keys(payload)[0]];
		let payloadRecordIds = payloadRecords.map(record => record.id);

		let size = loadedRecords.get("length");
		

		for (var i = 0; i < size; i++) {
			let loadedRecord = loadedRecords.objectAt(i);

			/**
			* Immediately unload the record if it should not be in the store
			*/

			if (payloadRecordIds.indexOf(Number(loadedRecord.get("id"))) == -1) {
				if (loadedRecord) {
					loadedRecord.unloadRecord();
				}
			} else {
				/**
				* Rollback attributes if the model is dirty.
				* This preps unsaved changes to be overwritten
				*/
				if (loadedRecord && loadedRecord.get("hasDirtyAttributes")) {
					loadedRecord.rollbackAttributes();
				}
			}
		}

		return this._super(store, primaryModelClass, payload, id, requestType);
	}

});