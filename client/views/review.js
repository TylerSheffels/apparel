Template.review.emailText = function() {
  var email = Emails.findOne(Session.get('emailId'));
  return email.html;
};

Template.review.events({
  'click #sendEmail': function() {
    e.preventDefault();
    //Grab user input

    //the empty string "", undefined, and null are all falsy 
    Meteor.call('sendEmail', 
        function(error) {
          if(error) {
            throwError(error.reason, "alert-danger");
            Router.go('landing');
          }
          Router.go('landing');
          throwError("Order sent successfully", "alert-success");
      });
  },
});
