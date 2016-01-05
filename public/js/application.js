$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- use jQuery to submit an AJAX post to the form's action
  //   4- when the AJAX post is done, display the new die roll using jQuery

  $( "#die_form" ).submit(function(event){
    event.preventDefault();
    var sides = $(this).serialize();
    $.ajax({
      method: "POST",
      url: "/rolls",
      data: sides
    })
    .done(function(roll){
      $(".die").css("display", "block");
      $("#die_image span").html(roll);
      $("#die_form")[0].reset();
    });
  });
});
