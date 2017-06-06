/* global ga */

import Ember from 'ember';
import ENV from 'frontend/config/environment';

export default Ember.Route.extend({
	auth: Ember.inject.service(),
	
	beforeModel() {
		let baseUrl = ENV.baseUrl;
		console.log(ENV.baseURL);

		Ember.$.ajaxSetup({
			dataType: 'json',
			contentType : 'application/json; charset=utf-8',
			cache: false,
			// beforeSend: function(xhr, options) {
			// 	options.url = baseUrl + options.url;
			// },
			error: (error) => {
				if (error && error.status === 403) {
					return;	
				}
			}
		});

		Ember.setupAjaxGlobalSettings = function () {
			Ember.$.ajaxSetup({
				dataType: 'json',
				contentType : 'application/json; charset=utf-8',
				cache: false,
				// beforeSend: function(xhr, options) {
				// 	options.url = baseUrl + options.url;
				// },
				error: (error) => {
					if (error && error.status === 403) {
						return;	
					}
				}
	    	});
		};

		Ember.RSVP.on('error', (error) => {
			let transitionToSignin = error.status == "403" || error.status == "401";

			if (!transitionToSignin && error.errors && error.errors.length > 0) {
				transitionToSignin = error.errors[0].status == "403" || error.errors[0].status == "401";
			}
			
			if (transitionToSignin) {
				this.get("auth").logout();
				this.transitionTo("signin");

				Ember.$(".modal").modal("hide");
				//$('body').removeClass('modal-open');
				//$('.modal-backdrop').remove();
				return;
			}

		});

		Ember.$("body").on("keypress", "input", function(e) {
			if (e.key === "^") {
				e.preventDefault();
			}
		});


		this.notifications.setDefaultAutoClear(true);
		this.notifications.setDefaultClearNotification(1500);
	}
});
