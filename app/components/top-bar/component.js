import Ember from 'ember';

export default Ember.Component.extend({
	auth: Ember.inject.service(),
	tagName: '',
	actions: {
		logout() {
			Ember.$.get("/rest/logout").then(() => {
				this.get("auth").logout();
				this.sendAction("transitionToSignIn");
			});
		},
		toggleSidebar() {
			let $html = Ember.$("html");
			if ($html.is(".nav-open")) {
				$html.removeClass("nav-open");
			} else {
				$html.addClass("nav-open");
			}
		}
	}
});
