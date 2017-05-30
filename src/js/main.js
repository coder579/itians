// remove preloader when page is loaded
$(window).on("load", function() {
  $("#preloader").delay(500).fadeOut("slow");
});

// On timetable page, determine action when class is selected
$('#it1-opt').click(function() {
  $('#cur-class').html("Information Technology 1");
});
$('#it2-opt').click(function() {
  $('#cur-class').html("Information Technology 2");
});

// sideNav options
$('.button-collapse').sideNav({
    menuWidth: 300,
    edge: 'left',
    closeOnClick: true,
    draggable: true
  }
);
