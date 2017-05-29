import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr("string", {defaultValue: ""}),
	phone: DS.attr("string", {defaultValue: ""}),
	email: DS.attr("string", {defaultValue: ""}),
	companyId: DS.attr("string", {defaultValue: ""}),
	username: DS.attr("string", {defaultValue: ""}),
	password: DS.attr("string", {defaultValue: ""})
});
