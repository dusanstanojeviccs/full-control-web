import Ember from 'ember';

export default Ember.Component.extend({
	didRender() {
		this.$("textarea").val(this.get("value"));
		tinymce.init({ 
			target: this.$("textarea")[0],
			plugins: [
				"autolink lists link image charmap print preview anchor",
				"searchreplace visualblocks code fullscreen",
				"insertdatetime media table contextmenu paste imagetools"
			],
    		toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
			setup: (ed) => {
		        ed.on('change', (e) => {
		            this.set("value", ed.getContent());
		        });
		    }
		});
	},
});
