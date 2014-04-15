Template.orders.events({
  'click #sendEmail': function(e) {
    e.preventDefault();

    //Grab user input
    targetEmail = $('#targetEmail').val();
    //toBeOrderedArray = $('.btn-success');

    attributes = {
      targetEmail: targetEmail,
      toBeOrderedArray: '',
      fromEmail: 'duncanrenfrow@gmail.com'
    }

    console.log(attributes)
    Meteor.call('sendEmail', attributes);
  },

  'click .active-order.btn-default': function(e) {
    e.preventDefault();
    var current = e.currentTarget.id;
    $("#" + current).addClass('btn-success').removeClass('btn-default');
  },

  'click .active-order.btn-success': function(e) {
    e.preventDefault();
    var current = e.currentTarget.id;
    $("#" + current).addClass('btn-default').removeClass('btn-success');
  }
});
Template.orders.activeOrder = function() {
  return Orders.find();
}
