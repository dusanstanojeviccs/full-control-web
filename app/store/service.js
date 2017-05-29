import Store from 'ember-data/store';

export default Store.extend({
	query(modelName, params) {
		params = params || {};

		if (params.noPeek) {
			return this._super(modelName, params);			
		}

		return this._super(modelName, params).then(() => {
			return this.peekAll(modelName);
		});
	}
});