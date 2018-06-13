console.log("MOTHA!");

$( document ).ready(function() {
  $('#content').append(snowscreen);
  $('#content').append(bars);
  $('#content').append(template);
  $('#content').append(resumePage);
  $('#content').append(projects);
  $('#content').append(contact);
  $('#snowscreen').hide()
  $("#barsTV").hide();
  $('#myInfo').hide();
  $('#resume').hide();
  $('#projectContainer').hide();
  $('#contactContainer').hide();

  $('#snowscreen').show();

});

var content ="<div id=\"content\" class=\"content\"></div>";

var say = "New introduction coming soon."
var template = "<div id='myInfo'><h3 class='animated fadeIn' id='name'>Peter Hahn</h3><h2 class='animated fadeIn' id='title'>Full Stack Developer (JavaScript, React, Ruby, HTML/CSS)</h2><img src='https://i.imgur.com/OUfvYhR.jpg' title='source: imgur.com' class='animated fadeIn' id='photo'><h2 class='animated fadeIn' id='exp'>"+say+"</h2><p class='animated fadeIn' id=sites_link>Links:</p><a href=https://github.com/jabattack1 target=\"_blank\" class='animated fadeIn' id='sites_github'>GitHub</a><a href=https://www.linkedin.com/in/petertaehahn target=\"_blank\" class='animated fadeIn' id='sites_linkedin'>LinkedIn</a></div>";
var resumePage = "<div id='resume'><iframe src=\"https://docs.google.com/file/d/0B_QUho3Z8WoPck0xRjA5akRvYjA/preview\" class='animated fadeIn' id='resume_doc'></iframe></div>";
var projects ="<div id='projectContainer'><a href=http://www.retrospacerocket.fun target=\"_blank\" class='animated fadeIn' id='sites_rocket'>www.retrospacerocket.fun</a><a href=http://www.pianokeys.press target=\"_blank\" class='animated fadeIn' id='sites_keys'>www.pianokeys.press</a><a href=http://www.calculatorjr.fun target=\"_blank\" class='animated fadeIn' id='sites_jr'>www.calculatorjr.fun</a><a href=http://www.seafoodbay.net/ target=\"_blank\" class='animated fadeIn' id='sites_seafood'>www.seafoodbay.net</a><a href=http://www.borocleaners.site target=\"_blank\" class='animated fadeIn' id='sites_boro'>www.borocleaners.site</a></div>"; 
var contact ="<div id='contactContainer'><a href=\"mailto:peter.hahn@live.com\" class='animated fadeIn' id='contact_email'>peter.hahn@live.com</a><p class='animated fadeIn' id='contact_phone'>551-689-3517</p></div>"

var content_tv ="<div id=\"content_tv\" class=\"content\"><script>$('#content_tv').append(tv);</script></div>";
var tv ="<img src='https://i.imgur.com/Feb3jDR.gif' title='source: imgur.com' id='tv'>"; 
var snowscreen ="<img src='https://i.imgur.com/Feb3jDR.gif' title='source: imgur.com' id='snowscreen'>";
var bars ="<img src='https://i.imgur.com/cybwiK5.gif' title='source: imgur.com' id='barsTV'>";



function snow_onClick(){

	$("#snowscreen").hide();
	$("#barsTV").hide();
	$("#myInfo").hide();
	$("#resume").hide();
	$('#projectContainer').hide();
	$('#contactContainer').hide();
	$("#snowscreen").show();
}

function about_onClick() {
    $("#snowscreen").hide();
    $("#barsTV").hide();
    $("#resume").hide();
    $('#projectContainer').hide();
    $('#contactContainer').hide();
    $("#myInfo").show();
  }

function resume_onClick() {
	$("#snowscreen").hide();
	$("#barsTV").hide();
	$("#myInfo").hide();
	$('#projectContainer').hide();
	$('#contactContainer').hide();
	$("#resume").show();
  }

function project_onClick() {
	$("#snowscreen").hide();
	$("#barsTV").hide();
	$("#myInfo").hide();
	$("#resume").hide();
	$('#contactContainer').hide();
	$('#projectContainer').show();
  }


function contact_onClick() {
	$("#snowscreen").hide();
	$("#myInfo").hide();
	$("#resume").hide();
	$('#projectContainer').hide();
	$("#barsTV").show();
	$('#contactContainer').show();
  }








