// remove preloader when page is loaded
$(window).on("load", function() {
  $("#preloader").delay(500).fadeOut("slow");
  $('body').css("overflow", "visible");
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

function on() {
document.getElementById("overlay").style.display = "block";
}

function off() {
document.getElementById("overlay").style.display = "none";
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var p;
var name;
var div;
var head;
var back;
$('.col-sm-2').click(function(){
    p = $(this).find('p');
    //alert(p.text());
    name = p.text();
    console.log(name)
    //alert(p.text());
    //$('.col-sm-2').css("display","none");
    $('.col-sm-2').fadeOut(500);
    sleep(1000);
    head = document.getElementById("head");
    //setTimeout(function(){console.log('done');},2000);
    head.innerHTML = name + " Notes";
    back = document.getElementById('back')
    div = document.getElementById(name);
    //alert(div.innerHTML);
    sleep(1000);
    div.style.display = "block";
    back.style.display = "block";
});

$('#btn-back').click(function(){
    back.style.display = "none";
    div.style.display = "none";
    sleep(1000);
    head.innerHTML = "Notes Available to Download!";
    $('.col-sm-2').fadeIn(500);
});
