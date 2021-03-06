Template.measurements.formItems = function (){
  return Forms.find();
};

Template.measurements.events({
  'click #submitMeasurements': function(e) {
    e.preventDefault();
    customerId = Session.get('currentCustomer');

    attributes = {};
    attributes.customerId = customerId;

    measurements = {};
    $("input.measurements").each(function(){
      var input = $(this);
      measurementName = input.attr('placeholder');
      measurementValue = input.val();
      if(measurementValue !== '') {
        measurements[measurementName] = measurementValue;
      }
    });

    attributes.measurements = measurements;

    Meteor.call('addMeasurements',attributes, 
      function(error, attributes) {
        if(error) {
          throwError(error.reason, "alert-danger");
          Router.go('measurements');
        }
        else {
          Router.go('landing');
          throwError("Measurements Submitted", "alert-success");
        }
    });

  }
});

Template.measurements.rendered = function() {
  firstFormId = Forms.findOne()._id;
  $('#'+firstFormId).focus();
};
