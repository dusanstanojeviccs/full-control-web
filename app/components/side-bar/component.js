import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	auth: Ember.inject.service(),

	didRender() {
		Ember.$(".sidebar li").on("click", function() {
			Ember.$(".sidebar li").removeClass("active");
			
			$(this).addClass("active");
		});
	},
	didDestroy() {
		Ember.$(".sidebar li").off();
	},
});
