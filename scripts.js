console.log("MOTHA!");

var clicked = 1;

$( document ).ready(function() {
	$('#content').append(template);
	$('#content').append(snowscreen);
	$('#content').append(bars);
 	$('#content').append(resumePage);
 	$('#content').append(projects);
  	$('#content').append(contact);
  	$('#content').append(octopus);
  	$('#content').append(road);
  	$('#content').append(shy);
  	$('#content').append(crazy);
  	$('#content').append(space);
  	$('#content').append(ball);
  	$('#content').append(burger);
  	$('#snowscreen').hide()
  	$("#barsTV").hide();
  	$('#octopus').hide()
  	$('#road').hide();
  	$('#shy').hide();
  	$('#crazy').hide();
  	$('#space').hide();
  	$('#ball').hide();
  	$('#burger').hide();
  	$('#myInfo').hide();
	$('#resume').hide();
  	$('#projectContainer').hide();
  	$('#contactContainer').hide();

  	$('#snowscreen').show();

});

var content ="<div id=\"content\" class=\"content\"></div>";

var say = "New introduction coming soon."
var template = "<div id='myInfo'><h3 class='animated fadeIn' id='name'>Peter Hahn</h3><h2 class='animated fadeIn' id='title'>Full Stack (JavaScript, React/Flux, Ruby/Rails, HTML/CSS)</h2><img src='https://i.imgur.com/OUfvYhR.jpg' title='source: imgur.com' class='animated fadeIn' id='photo'><h2 class='animated fadeIn' id='exp'>"+say+"</h2><p class='animated fadeIn' id=sites_link>Links:</p><a href=https://github.com/jabattack1 target=\"_blank\" class='animated fadeIn' id='sites_github'>GitHub</a><a href=https://www.linkedin.com/in/petertaehahn target=\"_blank\" class='animated fadeIn' id='sites_linkedin'>LinkedIn</a></div>";
var resumePage = "<div id='resume'><iframe src=\"https://docs.google.com/file/d/0B_QUho3Z8WoPck0xRjA5akRvYjA/preview\" class='animated fadeIn' id='resume_doc'></iframe></div>";
var projects ="<div id='projectContainer'><a href=http://www.retrospacerocket.fun target=\"_blank\" class='animated fadeIn' id='sites_rocket'>www.retrospacerocket.fun</a><a href=http://www.calculatorjr.fun target=\"_blank\" class='animated fadeIn' id='sites_jr'>www.calculatorjr.fun</a><a href=http://www.pianokeys.press target=\"_blank\" class='animated fadeIn' id='sites_keys'>www.pianokeys.press</a><a href=http://www.seafoodbay.net/ target=\"_blank\" class='animated fadeIn' id='sites_seafood'>www.seafoodbay.net</a><a href=http://www.borocleaners.site target=\"_blank\" class='animated fadeIn' id='sites_boro'>www.borocleaners.site</a></div>"; 
var contact ="<div id='contactContainer'><a href=\"mailto:peter.hahn@live.com\" class='animated fadeIn' id='contact_email'>peter.hahn@live.com</a><p class='animated fadeIn' id='contact_phone'>551-689-3517</p></div>"

var content_tv ="<div id=\"content_tv\" class=\"content\"><script>$('#content_tv').append(tv);</script></div>";
var tv ="<img src='https://i.imgur.com/Feb3jDR.gif' title='source: imgur.com' id='tv'>"; 
var snowscreen ="<img src='https://i.imgur.com/Feb3jDR.gif' title='source: imgur.com' id='snowscreen'>";
var bars ="<img src='https://i.imgur.com/cybwiK5.gif' title='source: imgur.com' id='barsTV'>";
var octopus ="<img src='https://i.imgur.com/Q2usshj.gif' title='source: imgur.com' id='octopus'>";
var road ="<img src='https://i.imgur.com/KjQaPg3.gif' title='source: imgur.com' id='road'>";
var shy ="<img src='https://i.imgur.com/SOFOoxu.gif' title='source: imgur.com' id='shy'>";
var crazy ="<img src='https://i.imgur.com/KgTEBZ5.gif' title='source: imgur.com' id='crazy'>";
var space ="<img src='https://i.imgur.com/ITdheo5.gif' title='source: imgur.com' id='space'>";
var ball ="<img src='https://i.imgur.com/tb6DPmG.gif' title='source: imgur.com' id='ball'>";
var burger ="<img src='https://i.imgur.com/7sUJIdA.gif' title='source: imgur.com' id='burger'>";

function snow_onClick(){
	clicked = 1;
	console.log(clicked);
	$("#snowscreen").hide();
	$("#barsTV").hide();
	$("#myInfo").hide();
	$("#resume").hide();
	$('#projectContainer').hide();
	$('#contactContainer').hide();
	$("#road").hide();
    $('#octopus').hide();
    $('#shy').hide();
    $('#crazy').hide();
    $('#space').hide();
    $('#ball').hide();
    $('#burger').hide();
	$("#snowscreen").show();
}

function about_onClick() {
	clicked = 0;
	$("#road").hide();
    $('#octopus').hide();
    $('#shy').hide();
    $('#crazy').hide();
    $('#space').hide();
    $('#ball').hide();
    $('#burger').hide();
    $("#snowscreen").hide();
    $("#barsTV").hide();
    $("#resume").hide();
    $('#projectContainer').hide();
    $('#contactContainer').hide();
    $("#myInfo").show();
  }

function resume_onClick() {
	clicked = 0;
	$("#road").hide();
    $('#octopus').hide();
    $('#shy').hide();
    $('#crazy').hide();
    $('#space').hide();
    $('#ball').hide();
    $('#burger').hide();
	$("#snowscreen").hide();
	$("#barsTV").hide();
	$("#myInfo").hide();
	$('#projectContainer').hide();
	$('#contactContainer').hide();
	$("#resume").show();
  }

function project_onClick() {
	clicked = 0;
	$("#road").hide();
    $('#octopus').hide();
    $('#shy').hide();
    $('#crazy').hide();
    $('#space').hide();
    $('#ball').hide();
    $('#burger').hide();
	$("#snowscreen").hide();
	$("#barsTV").hide();
	$("#myInfo").hide();
	$("#resume").hide();
	$('#contactContainer').hide();
	$('#projectContainer').show();
  }


function contact_onClick() {
	clicked = 0;
	$("#road").hide();
    $('#octopus').hide();
    $('#shy').hide();
    $('#crazy').hide();
    $('#space').hide();
    $('#ball').hide();
    $('#burger').hide();
	$("#snowscreen").hide();
	$("#myInfo").hide();
	$("#resume").hide();
	$('#projectContainer').hide();
	$("#barsTV").show();
	$('#contactContainer').show();
  }

$(".draggable_wp").click(function(){
    console.log('i wanna know');
});

$(function () {
    var dragging = false,
        target_wp,
        o_x, o_y, h_x, h_y, last_angle;
    $('.handle').mousedown(function (e) {
        h_x = e.pageX;
        h_y = e.pageY; // clicked point
        e.preventDefault();
        e.stopPropagation();
        dragging = true;
        target_wp = $(e.target).closest('.draggable_wp');
        if (!target_wp.data("origin")) target_wp.data("origin", {
            left: target_wp.offset().left,
            top: target_wp.offset().top
        });
        o_x = target_wp.data("origin").left;
        o_y = target_wp.data("origin").top; // origin point
        
        last_angle = target_wp.data("last_angle") || 0;
    });

    $(document).mousemove(function (e) {
        if (dragging) {
            var s_x = e.pageX,
                s_y = e.pageY; // start rotate point
            if (s_x !== o_x && s_y !== o_y) { //start rotate
                var s_rad = Math.atan2(s_y - o_y, s_x - o_x); // current to origin
                s_rad -= Math.atan2(h_y - o_y, h_x - o_x); // handle to origin
                s_rad += last_angle; // relative to the last one
                var degree = (s_rad * (360 / (2 * Math.PI)));
                target_wp.css('-moz-transform', 'rotate(' + degree + 'deg)');
                target_wp.css('-moz-transform-origin', '50% 50%');
                target_wp.css('-webkit-transform', 'rotate(' + degree + 'deg)');
                target_wp.css('-webkit-transform-origin', '50% 50%');
                target_wp.css('-o-transform', 'rotate(' + degree + 'deg)');
                target_wp.css('-o-transform-origin', '50% 50%');
                target_wp.css('-ms-transform', 'rotate(' + degree + 'deg)');
                target_wp.css('-ms-transform-origin', '50% 50%');
                
                if(degree > -1 && degree < 45 && clicked === 1){
              		$("#road").hide();
                	$('#octopus').hide();
                	$('#shy').hide();
                	$('#crazy').hide();
                	$('#space').hide();
                	$('#ball').hide();
                	$('#burger').hide();
                	$('#snowscreen').show();
                }
                else if(degree > 44 && degree < 90 && clicked === 1){
                	console.log('45');
                	$("#snowscreen").hide();
                	$("#road").hide();
                	$('#shy').hide();
                	$('#crazy').hide();
                	$('#space').hide();
                	$('#ball').hide();
                	$('#burger').hide();
                	$('#octopus').show();
                }
                else if(degree > 89 && degree < 135 && clicked === 1){
                	console.log('90');
                	$("#snowscreen").hide();
                	$('#octopus').hide();
                	$('#shy').hide();
                	$('#crazy').hide();
                	$('#space').hide();
                	$('#ball').hide();
                	$('#burger').hide();
                	$('#road').show();
                }
                else if(degree > -221 && degree < -180 && clicked === 1){
                	console.log('135');
                	$("#snowscreen").hide();
                	$('#octopus').hide();
                	$('#road').hide();
                	$('#crazy').hide();
                	$('#space').hide();
                	$('#ball').hide();
                	$('#burger').hide();
                	$('#shy').show();
                }
                else if(degree > 134 && degree < 180 && clicked === 1){
                	console.log('135');
                	$("#snowscreen").hide();
                	$('#octopus').hide();
                	$('#road').hide();
                	$('#space').hide();
                	$('#ball').hide();
                	$('#burger').hide();
                	$('#shy').show();                
                }
                else if(degree > -179 && degree < -135 && clicked === 1){
                	console.log('180');
                	$("#snowscreen").hide();
                	$('#octopus').hide();
                	$('#road').hide();
                	$('#shy').hide();
                	$('#space').hide();
                	$('#ball').hide();
                	$('#burger').hide();
                	$('#crazy').show();
                }
                else if(degree > -134 && degree < -90 && clicked === 1){
                	console.log('225');
                	$("#snowscreen").hide();
                	$('#octopus').hide();
                	$('#road').hide();
                	$('#shy').hide();
                	$('#crazy').hide();
                	$('#ball').hide();
                	$('#burger').hide();
                	$('#space').show();
                }
                else if(degree > -89 && degree < -45 && clicked === 1){
                	console.log('270');
                	$("#snowscreen").hide();
                	$('#octopus').hide();
                	$('#road').hide();
                	$('#shy').hide();
                	$('#crazy').hide();
                	$('#space').hide();
                	$('#burger').hide();
                	$('#ball').show();
                }
                else if(degree > -44 && degree < 0 && clicked === 1){
                	console.log('315');
                	$("#snowscreen").hide();
                	$('#octopus').hide();
                	$('#road').hide();
                	$('#shy').hide();
                	$('#crazy').hide();
                	$('#space').hide();
                	$('#ball').hide();
                	$('#burger').show();
                }
            }
        }
    }); // end mousemove
    
    $(document).mouseup(function (e) {
    	if (dragging) {
    		console.log('up');
        	dragging = false;
        	var s_x = e.pageX,
            	s_y = e.pageY;
        
        	// Saves the last angle for future iterations
        	var s_rad = Math.atan2(s_y - o_y, s_x - o_x); // current to origin
        	s_rad -= Math.atan2(h_y - o_y, h_x - o_x); // handle to origin
        	s_rad += last_angle;
        	target_wp.data("last_angle", s_rad);
    	}
    });
});



$(function () {
    var dragging2 = false,
        target_wp2,
        o_x2, o_y2, h_x2, h_y2, last_angle2;
    $('.handle2').mousedown(function (e2) {
        h_x2 = e2.pageX;
        h_y2 = e2.pageY; // clicked point
        e2.preventDefault();
        e2.stopPropagation();
        dragging2 = true;
        target_wp2 = $(e2.target).closest('.draggable_wp2');
        if (!target_wp2.data("origin2")) target_wp2.data("origin2", {
            left: target_wp2.offset().left,
            top: target_wp2.offset().top
        });
        o_x2 = target_wp2.data("origin2").left;
        o_y2 = target_wp2.data("origin2").top; // origin2 point
        
        last_angle2 = target_wp2.data("last_angle2") || 0;
    });

    $(document).mousemove(function (e2) {
        if (dragging2) {
            var s_x2 = e2.pageX,
                s_y2 = e2.pageY; // start rotate point
            if (s_x2 !== o_x2 && s_y2 !== o_y2) { //start rotate
                var s_rad2 = Math.atan2(s_y2 - o_y2, s_x2 - o_x2); // current to origin2
                s_rad2 -= Math.atan2(h_y2 - o_y2, h_x2 - o_x2); // handle2 to origin2
                s_rad2 += last_angle2; // relative to the last one
                var degree2 = (s_rad2 * (360 / (2 * Math.PI)));
                target_wp2.css('-moz-transform', 'rotate(' + degree2 + 'deg)');
                target_wp2.css('-moz-transform-origin2', '50% 50%');
                target_wp2.css('-webkit-transform', 'rotate(' + degree2 + 'deg)');
                target_wp2.css('-webkit-transform-origin2', '50% 50%');
                target_wp2.css('-o-transform', 'rotate(' + degree2 + 'deg)');
                target_wp2.css('-o-transform-origin2', '50% 50%');
                target_wp2.css('-ms-transform', 'rotate(' + degree2 + 'deg)');
                target_wp2.css('-ms-transform-origin2', '50% 50%');
                console.log(degree2);
                if(degree2 > -1 && degree2 < 45 && clicked === 1){
                	console.log('0');
                	$('#bg').css('background-color', 'rgba(0, 0, 0, 0.2)');
                }
                else if(degree2 > 44 && degree2 < 90 && clicked === 1){
                	console.log('45');
                	$('#bg').css('background-color', 'rgba(0, 0, 0, 0.4)');
                }
                else if(degree2 > 89 && degree2 < 135 && clicked === 1){
                	console.log('90');
                	$('#bg').css('background-color', 'rgba(0, 0, 0, 0.5)');
                }
                else if(degree2 > -221 && degree2 < -180 && clicked === 1){
                	console.log('135');
                	$('#bg').css('background-color', 'rgba(0, 0, 0, 0.6)');
                }
                else if(degree2 > 134 && degree2 < 180 && clicked === 1){
                	console.log('135');
                	$('#bg').css('background-color', 'rgba(0, 0, 0, 0.6)');
                }
                else if(degree2 > -179 && degree2 < -135 && clicked === 1){
                	console.log('180');
                	$('#bg').css('background-color', 'rgba(0, 0, 0, 0.7)');
                }
                else if(degree2 > -134 && degree2 < -90 && clicked === 1){
                	console.log('225');
                	$('#bg').css('background-color', 'rgba(0, 0, 0, 0.8)');
                }
                else if(degree2 > -89 && degree2 < -45 && clicked === 1){
                	console.log('270');
                	$('#bg').css('background-color', 'rgba(0, 0, 0, 0.9)');
                }
                else if(degree2 > -44 && degree2 < 0 && clicked === 1){
                	console.log('315');
                	$('#bg').css('background-color', 'rgba(0, 0, 0, 1)');
                }
            }
        }
    }); // end mousemove
    
    $(document).mouseup(function (e2) {
    	if (dragging2) {
    		console.log('up2');
        	dragging2 = false;
        	var s_x2 = e2.pageX,
           		s_y2 = e2.pageY;
        
        	// Saves the last angle for future iterations
        	var s_rad2 = Math.atan2(s_y2 - o_y2, s_x2 - o_x2); // current to origin2
        	s_rad2 -= Math.atan2(h_y2 - o_y2, h_x2 - o_x2); // handle2 to origin2
        	s_rad2 += last_angle2;
        	target_wp2.data("last_angle2", s_rad2);
    	}
    });
});








