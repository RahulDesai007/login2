import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {

         login: function() {
             var fname = this.get('fname');
             var lname = this.get('lname');

             console.log("From Login Controller: " + fname + " " + lname);
             this.set('fname', fname);
             this.set('lname', lname);
            this.transitionToRoute('home');
        }
    }
});
