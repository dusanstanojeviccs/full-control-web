import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  willTransition: function() {
    Ember.$(".modal").modal("hide");
    Ember.$(".ember-application").removeClass("modal-open");
    Ember.$(".modal-backdrop").remove();
  },
});

Router.map(function() {
  this.route('signin');

  this.route('learn', function() {
    this.route('users');
    this.route('levels');
    this.route('lessons');
    this.route('languages');
    this.route('courses');

    this.route('assign-to', function() {
      this.route('course', {path: '/course/:id'});
    });
  });

  this.route('professor', function() {
    this.route('courses');

    this.route('course', function() {
      this.route('users', {path: '/users/:id'});
      this.route('lessons', {path: '/lessons/:id'});
      this.route('learning-objects', {path: '/learning-objects/:id'});
      this.route('learning-object', {path: '/learning-object/:id'});
      this.route('student-grades', {path: '/student-grades/:courseId/:userId'});
    });
  });

  this.route('student', function() {
    this.route('courses');

    this.route('course', function() {
      this.route('lessons', {path: '/lessons/:id'});
      this.route('learning-objects', {path: '/learning-objects/:id'});
      this.route('learning-object', {path: '/learning-object/:id'});
    });
  });

  this.route('admin', function() {
    this.route('users');
    this.route('clients');
    this.route('companies');
  });

  this.route('user', function() {
    this.route('clients');
  });
});

export default Router;
