import Ember from 'ember';
import SortBy from 'ember-sort-table/mixins/sort-by-d';

export default Ember.Controller.extend(SortBy, {
	store: Ember.inject.service(),
	auth: Ember.inject.service(),
	tableId: "clientsList",
	streaming: false,
	socketMaster: {},

	init() {
	    this._super(...arguments);
	    setInterval(() => {

	    	if (this.get("streaming") && this.get("socketMaster.readyState") === 3) {
	    		this.reconnect();
	    	}
	    }, 15000);
	},

	dataForTable: Ember.computed("model.clients.@each", function() { 
		return this.get("model.clients").toArray(); 
	}),

	notDeleted: Ember.computed("sortedData.@each.isDeleted", function() {
		return this.get("sortedData").filter(o => !o.get("isDeleted"));
	}),

 	getPathInfo(path) {
		var link = document.createElement('a');
		link.setAttribute('href', path);

		return {
			host:     link.hostname,
			port:     link.port,
			path:     link.pathname,
			protocol: link.protocol
		}
	},

	reconnect() {
		let username = encodeURI(this.get("username"));
		let cu = encodeURI(this.get("auth.user.username"));
		let cp = encodeURI(this.get("auth.user.password"));
		var clientLocation = 'ws://' + this.getPathInfo(window.location)['host'] + ':8084/' + username + "/" + cu + "/" + cp;

		var client = new WebSocket( clientLocation );
		var canvas = document.getElementById('videoCanvas');
		var player = new jsmpeg(client, {canvas:canvas});

		var socketMaster = this.get("socketMaster");
		var reconnectSocket = () => {
			socketMaster = new WebSocket( 'ws://'+this.getPathInfo(window.location)['host']+':8086/' + username + "/" + cu + "/" + cp);
			this.set("socketMaster", socketMaster);

			socketMaster.onclose = function() {
				reconnectSocket();
			};
		};
		reconnectSocket();

		var videoCanvas = document.getElementById("videoCanvas");

		videoCanvas.onclick = (e) => {
			socketMaster.send(JSON.stringify({
				type: "click", 
				x: e.offsetX/videoCanvas.offsetWidth, 
				y: e.offsetY/videoCanvas.offsetHeight
			}));
		};
		videoCanvas.onmousemove = (e) => {
		    socketMaster.send(JSON.stringify({
		    	type: "move", 
		    	x: e.offsetX/videoCanvas.offsetWidth, 
		    	y: e.offsetY/videoCanvas.offsetHeight
		    }));
		};

		document.onkeydown = (evt) => {
		    evt = evt || window.event;
		    if (evt.key === "Enter") {
		    	socketMaster.send(JSON.stringify({type: "enter"}));
		    } else {
		    	socketMaster.send(JSON.stringify({type: "text", value: evt.key}));
		    }
		};
	},

	actions: {
		stopStreaming() {
			videoCanvas.onclick = (e) => {};
			videoCanvas.onmousemove = (e) => {};
			document.onkeydown = (evt) => {};
			this.set("streaming", false);
			this.get("socketMaster").onclose = () => {};
			this.get("socketMaster").close();
			this.set("socketMaster", {});
		},
		startStreaming(username) {
			if (!this.get("streaming")) {
				this.set("streaming", true);
				this.set("username", username);

				Ember.run.next(() => {
					this.reconnect();
				});
			}
		},
		setupNewClient() {
			let client = this.get("store").createRecord("client");
			
			this.set("client", client);
		},
		setClient(client) {
			this.set("client", client);
		}
	}
});
