console.log("MOTHA!");
var content ="<div id=\"content\" class=\"content\"></div>";

var say = "New introduction coming soon."
var template = "<h3 class='animated fadeIn' id='name'>Peter Hahn</h3><h2 class='animated fadeIn' id='title'>Full Stack Developer (JavaScript, Ruby, HTML/CSS)</h2>";
var exp = "<h2 class='animated fadeIn' id='exp'>"+say+"</h2>";
var headshot = "<img src='https://i.imgur.com/OUfvYhR.jpg' title='source: imgur.com' class='animated fadeIn' id='photo'>";
var pointer = "<p class='animated fadeIn' id=sites_link>Links:</p>"
var sites ="<a href=https://github.com/jabattack1 target=\"_blank\" class='animated fadeIn' id='sites_github'>GitHub</a><a href=https://www.linkedin.com/in/petertaehahn target=\"_blank\" class='animated fadeIn' id='sites_rebel'>LinkedIn</a>";
var resume = "<iframe src=\"https://docs.google.com/file/d/0B_QUho3Z8WoPck0xRjA5akRvYjA/preview\" class='animated fadeIn' id='resume_doc'></iframe>";
var projects ="<a href=http://www.implus.club target=\"_blank\" class='animated fadeIn' id='sites_im'>www.implus.club</a><a href=http://www.retrospacerocket.com target=\"_blank\" class='animated fadeIn' id='sites_rocket'>www.retrospacerocket.com</a><a href=http://www.notes.rocks target=\"_blank\" class='animated fadeIn' id='sites_keys'>www.notes.rocks</a><a href=http://www.calculatorjr.com target=\"_blank\" class='animated fadeIn' id='sites_jr'>www.calculatorjr.com</a><a href=http://www.thecharmingnail.com target=\"_blank\" class='animated fadeIn' id='sites_charming'>www.thecharmingnail.com</a><a href=http://www.borocleaners.xyz target=\"_blank\" class='animated fadeIn' id='sites_boro'>www.borocleaners.xyz</a><a href=http://www.seafoodbay.net/ target=\"_blank\" class='animated fadeIn' id='sites_seafood'>www.seafoodbay.net</a>"; 
var contact ="<a href=\"mailto:peter.hahn@live.com\" class='animated fadeIn' id='contact_email'>peter.hahn@live.com</a><p class='animated fadeIn' id='contact_phone'>551-689-3517</p>"

var content_tv ="<div id=\"content_tv\" class=\"content\"><script>$('#content_tv').append(tv);</script></div>";
var tv ="<img src='https://i.imgur.com/Feb3jDR.gif' title='source: imgur.com' id='tv'>"; 
var snowscreen ="<img src='https://i.imgur.com/Feb3jDR.gif' title='source: imgur.com' id='snowscreen'>";
var bars ="<img src='https://i.imgur.com/cybwiK5.gif' title='source: imgur.com' id='barsTV'>";



function snow_onClick(){

	$("body").children("#snowscreen").remove();
	$('#content').empty();
	// $('body').remove(content);
	// $('body').append(content_tv);
	// $('#content').empty();
	$('body').append(snowscreen);
}

function about_onClick() {
	console.log('about');

    $("body").children("#snowscreen").remove();
	$('#content').empty();
	// $('body').append(content);
	$('#content').append(template);
	$('#content').append(headshot);
	$('#content').append(pointer);
	$('#content').append(sites);
	$('#content').append(exp);

	// e.preventDefault();
	// return false;
  }

function resume_onClick() {
	console.log('resume');

	// $('#content_tv').empty();
	$("body").children("#snowscreen").remove();
	$('#content').empty();
	// $('body').append(content);
	$('#content').append(resume);
   // alert('a_onClick');
  }

function contact_onClick() {
	console.log('contact');

	$("body").children("#snowscreen").remove();
	$('#content').empty();

	$('#content').append(contact);
	$('body').append(bars);

  }

function project_onClick() {
	console.log('project');

	// $('#content_tv').empty();
	$("body").children("#snowscreen").remove();
	$('#content').empty();
	// $('body').append(content);
	$('#content').append(projects);
   // alert('a_onClick');
  }
