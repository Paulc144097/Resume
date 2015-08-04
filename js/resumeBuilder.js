var bio = {
	"name" : "Paul Chua",
	"age" : 18,
	"role" : "web developer",
	"contacts": {
		"mobile": "623-555-5555",
		"email": "pmchua@asu.edu",
		"location": "Phoenix, AZ",
		"github": "paulc144097"
	},
	"pictureURL"  : "images/lights.jpg",
	"welcomeMsg" : "Hello, welcome to my resume page!",
	"skills": [
		"HTML and CSS", "Javascript", "Sleeping", "Eating", "Doing", "Nothing"
	],

	"show": function(){
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	    $("#header").append(formattedWelcome);
	    var formattedbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	    $("#header").append(formattedbioPic);
	    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	    $("#topContacts").append(formattedMobile);
	    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	    $("#topContacts").append(formattedEmail);
	    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	    $("#topContacts").append(formattedGithub);
	    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	    $("#topContacts").append(formattedLocation);

	if(bio.skills.length > 0) {
	    $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
	}
	}
};
bio.show();

var work = {
	"jobs": [
	{
		"employer": "Lukas Ruebbelke",
		"title": "Apprentice",
		"dates": "July 2015-present",
		"location": "Peoria, AZ",
		"description": "Learn web-developing through Udacity, carry out tasks, use html and css to create web pages, etc."
	}
	],

	"show": function(){
		for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
	}
};
work.show();	

var projects = {
	"projects": [
	{
		"title": "Profile Page",
		"dates": "July 2015",
		"description": "A personal responsive profile page created with html, css, and bootstrap.",
		"images": ["http://i57.tinypic.com/2dcfqyv.png"]
	}
	]
}

projects.display = function() {
  for (project in projects.projects){
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if (projects.projects[project].images.length > 0){
		for (image in projects.projects[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
  }
}
projects.display();

var education = {
	"schools": [
	{
		"name" : "Arizona State University",
		"major": "Biomedical Engineering",
		"dates": "August 2014-present",
		"location": "Tempe, AZ",
		"url": "http://www.asu.edu"
	}
	],
	"online": [
	{
		"title": "Front End Web Developer",
		"school": "Udacity",
		"dates": "July, 2015",
		"url": "http://www.udacity.com"
	}
    ],

	"display": function(){
	for (var school in education.schools){
		$("#education").append(HTMLschoolStart);
			var formattedName= HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedName);			
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);	
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);		
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);

		}
		
		for (var course in education.online) {
			$("#online").append(HTMLonlineStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.online[course].title);
			var formattedSchool= HTMLonlineSchool.replace("%data%", education.online[course].school);
			var formattedOnlineTitle = formattedTitle + formattedSchool;
			$(".online-entry:last").append(formattedOnlineTitle);
			var formattedSchoolDates = HTMLonlineDates.replace("%data%", education.online[course].dates);
			$(".online-entry:last").append(formattedSchoolDates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.online[course].url);
			$(".online-entry:last").append(formattedURL);
		}
	}
};
education.display();


$('#mapDiv').append(googleMap);

window.addEventListener('load', initializeMap);

//window.addEventListener('resize', function(e) {
 // Make sure the map bounds get updated on page resize
// map.fitBounds(mapBounds);
//});

google.maps.event.addListener(marker, 'click', function(){
	infowindow.open(map, marker);
});

/*function locationizer(work_obj) {
    var locationArray=[];
    for (var job in work_obj.jobs) {
     var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

/*$('#main').append(internationalizeButton);
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase;
	 name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

/*$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};*/