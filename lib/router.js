Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('landing', {path: '/'});
  this.route('customer', {path: '/customer'});
  this.route('measurements', {path: '/measurements'});
  this.route('shopping', {path: '/shopping'});
  this.route('styleChoices', {
    path: '/styleChoices/:type',
    data: function() { return {type: this.params.type}; }
  });
  this.route('orders', {
    path: '/orders',
    waitOn: function() { return Meteor.subscribe('orders'); }
  });
  this.route('itemMenu', {path: '/itemMenu'});
  this.route('takePicture', {path: '/takePicture'});
  this.route('itemPictures', {path: '/itemPictures'});
  this.route('orders', {path: '/orders'});
  this.route('review', {path: '/review'});
  //this.route('uploadStyles', {path: '/uploadStyles'});
  //this.route('itemPictures', {path: '/itemPictures'});
  this.route('addNotes', {path: '/addNotes'});
  this.route('pending', {path: '/*'});
});

var requireCustomer = function() {
  if(_.isUndefined(Session.get("currentCustomer"))) {
    Router.go('landing');
    throwError("You must select a customer", "alert-danger");
  }
};


Router.onBeforeAction(requireCustomer,{except: 
  ['landing','uploadStyles']} );

//This can be used to reset session variables that are really page variables
Router.onBeforeAction(function() {
  clearErrors();
  Session.set('customerButtonClicked', false);
});

//Clear error messages automatically after 4 seconds
Router.onAfterAction(function() {
  Meteor.setTimeout(clearErrors, 4000);
});
