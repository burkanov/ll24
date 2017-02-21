/* console.log('hi lekkerland!');
css({'border-top':'5px solid red'});
*/

(function ($) {

  var signUpForm = function() {

    var myform = $("form#sign-up");

    myform.submit(function(event){
    	event.preventDefault();

      var service_id = "default_service";
      var template_id = "anmeldung_1";
      var fieldset = myform.find(".fieldset");
      var headlineOfRegistration = myform.find("> .headline");
      var confirmation = myform.find(".submit-confirmation");

      myform.find("button").text("Anmeldung wird versendet...");
      emailjs.sendForm(service_id, template_id, "sign-up")
      	.then(function(){
          headlineOfRegistration.fadeOut("slow");
          fieldset.fadeOut("slow", function(){
            confirmation.fadeIn("fast");
          });
        }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           myform.find("button").text("Send");
        });
      return false;
    });
  };

  $(document).ready(function () {
    signUpForm();
  });

})(jQuery);
