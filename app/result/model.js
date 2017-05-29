import DS from 'ember-data';

export default DS.Model.extend({
	studentId: DS.attr("number", {defaultValue: 0}),
	lessonId: DS.attr("number", {defaultValue: 0}),
	result: DS.attr("string", {defaultValue: ""}),
	content: DS.attr("string", {defaultValue: ""}),
	isDone: DS.attr("boolean", {defaultValue: false}),
	createdAnswers: DS.attr("boolean", {defaultValue: false}),
	grade: DS.attr("number", {defaultValue: 0}),
});
