var skills = '<div class="col-md-2 col-sm-6"><img src="./images/%data%.png" alt="" class="img-responsive img-circle"></div>';
var skills_array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

var skills_new = '';

skills_array.forEach(function(skill) {
	skills_new = skills.replace('%data%', skill);
	$('.skills-section-images').append(skills_new);
})

var projects = '<li style="list-style-type: none"><h3 style="padding-left: 88px;"><strong>%data1% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (%data4% - %data5%)</strong></h3><div style="padding-left: 88px;" class="row"><div class="col-md-12"><h4><strong>Language(s): %data2%</strong></h4><h5 style="padding-right: 88px;" class="text-justify">%data3%</h5></div></div></li><br>';

var projects_array = [
	{
		name: 'Video Player',
		language: 'React',
		info: 'Developed a React Video player application+Bootstrap making use of the YouTube API’s. Made API calls to get the top 5 videos for the search term that the user types in. JSON/XML response from the API call is then rendered.',
		start: 'Sept 2017',
		end: 'Oct 2017'
	},
	{
		name: 'Weather App',
		language: 'React and Redux',
		info: 'Developed a React+Redux Weather application which gives us the statistics for temperature, pressure and humidity as a graph. Made use of Weather API to get weather data as JSON/XML then fine-tuned with Bootstrap.',
		start: 'Sept 2017',
		end: 'Oct 2017'
	},
	{
		name: 'Blog App',
		language: 'React and Redux',
		info: 'Developed a React and Redux Blog application. Which had the feature to add, remove and update blogs to and from the backend API. Made use of React Router to navigate between different pages of the application. Added authorization checks by using bootstrap',
		start: 'Oct 2017',
		end: 'Nov 2017'
	},
	{
		name: 'YelpCamp',
		language: 'Node JS',
		info: 'Developed an application which is similar to Yelp where I made use of Express, Node JS, Bootstrap and MongoDB by adding functionality to the routes.Features to add, remove and update campgrounds to Yelp using MongoDB. Made use of body-parser and EJS for parsing and templating. Made HTTP GET and POST requests using the RESTful API services. Each user can add comments about each campground based upon their likes or dislikes.',
		start: 'Aug 2017',
		end: 'Oct 2017'
	},
	{
		name: 'Todo Application',
		language: 'MEAN Stack',
		info: 'Developed a Todo application using the MEAN stack to add, delete and update todos that the user enters. Used MongoDB and Mongoose to setup the schema and the database which was used to store, modify and remove todos.',
		start: 'Jun 2017',
		end: 'Jul 2017'		
	},
	{
		name: 'Weather Forecast Application',
		language: 'Angular JS',
		info: 'Developed an Angular JS Weather Application which gives us the 7-day weather forecast based upon city we enter. Made use of custom directives, services and bootstrap and get the data and display. ',
		start: 'Jul 2017',
		end: 'Aug 2017'	
	},
	{
		name: 'Mobile Application Development',
		language: 'Android Studio, Java',
		info: 'Designed an application which shows us the list of all US state officials based on the location that we type in and starts off with the current location. API call is made to gather the data from the internet in a JSON format and displaying details related to each official.Designed app which holds multiple notes which too can be published and run on any Android Device.Designed an app which gives us live information related to stocks downloading data in parallel and displaying it.',
		start: 'Jan 2017',
		end: 'May 2017'	
	},
	{
		name: 'Dashboard Application',
		language: 'Javascript, Bootstrap, ES6',
		info: 'Developed a prototype of an application for an Internet provider. Structured the overall design using various diagrams such as Use case diagrams, Class Diagrams, Activity Diagrams, Sequence Diagrams. Apply design patterns for building the prototype of the application.Configured dashboard which displays charts for the users using chart.js and dataframe.js based on some filters and criteria that the user applies on the data. Narrowing the data and displaying charts for the data filtered.',
		start: 'Jan 2017',
		end: 'May 2017'			
	},
	{
		name: 'Twitter Friend Analysis',
		language: 'Python',
		info: 'Used Python as the primary programming language to conduct our research on Twitter. Found out followers/friends/users based on a particular time frame and plotted a graph which showed all the followers of a friend and friends of friend.',
		start: 'Aug 2016',
		end: 'Sept 2016'
	},
	{
		name: 'Web Application Design',
		language: 'Java, MongoDB, MySQL, HTML, CSS, JSP, Servlets, Javascript',
		info: 'Designed a website which is like an ecommerce web portal using Java Servlets, JSP, Java Beans, MySQL and MongoDB where customer can choose from a list of products and place an order of their choice. Reviews and ratings for a product were also implemented. Search bar implemented using AJAX.Designed Restaurant web application through which we can book tables and track orders.',
		start: 'Aug 2016',
		end: 'Dec 2016'	
	},
	{
		name: 'Sorting Giga Bytes of Data',
		language: 'Spark and Hadoop',
		info: 'The aim of this project was to sort a Giga byte of data and to design an algorithm to sort big data and check the performance of the sorting algorithm on the Amazon AWS cloud. Here too measured the Latency and time taken to sort.Made use of Hadoop and Spark to sort Giga bytes of data for 1 node and 16 nodes.',
		start: 'Mar 2016',
		end: 'Apr 2016'
	}
];

var projects_new = '';

projects_array.forEach(function(project) {
	projects_new = projects.replace('%data1%', project.name);
	projects_new = projects_new.replace('%data2%', project.language);
	projects_new = projects_new.replace('%data3%', project.info);
	projects_new = projects_new.replace('%data4%', project.start);
	projects_new = projects_new.replace('%data5%', project.end);
	$('.project-section-info').append(projects_new);
});

