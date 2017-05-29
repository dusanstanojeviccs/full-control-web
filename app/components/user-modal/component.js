import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		backAction() {
			this.get("user").rollbackAttributes();
			Ember.$(".modal").modal("hide");
		},
		successAction() {
			this.get("user").save().then(() => {
				this.get("notifications").success("Korisnik uspešno sačuvan");
				this.$(".modal").modal("hide");
			});
		}	
	}
});
