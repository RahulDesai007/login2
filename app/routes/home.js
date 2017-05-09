import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var fname = this.controllerFor('login').get('fname');
        var lname = this.controllerFor('login').get('lname');

        this.controllerFor('home').set('fname', fname);
        this.controllerFor('home').set('lname', lname);
    }
});
