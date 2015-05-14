console.log("MOTHA!");
var content ="<div id=\"content\" class=\"content\"></div>";

var say = "My name is Peter Hahn and I am a full stack Web Developer(.js, Ruby on Rails, HTML/CSS) currently living in Brooklyn, NY.  I have recently graduated from General Assembly(NYC campus), where I studied Ruby on Rails and JavaScript.  I feel that I am a solid candidate for your company because of my abilities as a Web Developer and also because of my very strong work ethic - I will be your workhorse if I am hired at your company.<br><br> I am proficient using .js, Ruby on Rails, and HTML/CSS.  My last project was for a mom-&-pop seafood restaurant (www.seafoodbay.net) in Philadelphia which involved designing a PSQL database, a Ruby on Rails back-end server, and implementing .js(HTML/CSS) front-end for user experience.  The project before involved designing a single-page game application called \“uBlank\” on Ruby on Rails back-end server using Backbone.js for front-end.<br><br>  I am also an experienced  IT technician - I have worked as a System Administrator, a Network Manager, and a Network Consultant in my previous jobs.  I have learned a great deal about working within a team structure and following company protocol during these years - I am confident that my transition into working as a Web Developer will be even more seamless because of my past experiences.<br><br>Thank you<br><br>Peter Hahn";
var template = "<h3 class='animated fadeIn' id='name'>Peter Hahn</h3><h2 class='animated fadeIn' id='title'>Full Stack Developer (JavaScript, Ruby, HTML/CSS)</h2>";
var exp = "<h2 class='animated fadeIn' id='exp'>"+say+"</h2>";
var headshot = "<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/headshot_zpssoavnc6u.jpg' class='animated fadeIn' id='photo'>";
var pointer = "<p class='animated fadeIn' id=sites_link>Links:</p>"
var sites ="<a href=https://github.com/jabattack1 target=\"_blank\" class='animated fadeIn' id='sites_github'>GitHub</a><a href=https://www.linkedin.com/in/petertaehahn target=\"_blank\" class='animated fadeIn' id='sites_rebel'>LinkedIn</a>";
var resume = "<iframe src=\"https://docs.google.com/file/d/0B_QUho3Z8WoPck0xRjA5akRvYjA/preview\" class='animated fadeIn' id='resume_doc'></iframe>";
var projects ="<a href=http://www.thecharmingnail.com target=\"_blank\" class='animated fadeIn' id='sites_charming'>www.thecharmingnail.com</a><a href=http://www.seafoodbay.net/ target=\"_blank\" class='animated fadeIn' id='sites_seafood'>www.seafoodbay.net</a><a href=http://www.peterhahn.me/ target=\"_blank\" class='animated fadeIn' id='sites_peter'>www.peterhahn.me</a><a href=http://www.audio-boy.com/ target=\"_blank\" class='animated fadeIn' id='sites_audio'>www.audio-boy.com</a><a href=http://www.miloanddanny.com/ target=\"_blank\" class='animated fadeIn' id='sites_milo'>www.miloanddanny.com</a>"; 
var contact ="<a href=\"mailto:peter.hahn@live.com\" class='animated fadeIn' id='contact_email'>peter.hahn@live.com</a><p class='animated fadeIn' id='contact_phone'>551-689-3517</p>"

var content_tv ="<div id=\"content_tv\" class=\"content\"><script>$('#content_tv').append(tv);</script></div>";
var tv ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/offair%20fast_zpsa4xnexhu.gif' id='tv'>"; 
var snowscreen ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/offair%20fast_zpsa4xnexhu.gif' id='snowscreen'>";

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

	// $('#content_tv').empty();
	$("body").children("#snowscreen").remove();
	$('#content').empty();
	// $('body').append(content);
	$('#content').append(contact);
   // alert('a_onClick');
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
