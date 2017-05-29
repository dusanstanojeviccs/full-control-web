import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		backAction() {
			this.get("client").rollbackAttributes();
			Ember.$(".modal").modal("hide");
		},
		successAction() {
			this.get("client").save().then(() => {
				this.get("notifications").success("Klijent uspešno sačuvan");
				this.$(".modal").modal("hide");
			});
		}	
	}
});
