import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		backAction() {
			this.get("company").rollbackAttributes();
			Ember.$(".modal").modal("hide");
		},
		successAction() {
			this.get("company").save().then(() => {
				this.get("notifications").success("Kompanija uspešno sačuvan");
				this.$(".modal").modal("hide");
			});
		}	
	}
});
