siteData = {

Name: "David Masad",
About: [
		"I am a Ph.D. candidate at George Mason University's <a href='http://css.gmu.edu/'>Computational Social Science</a> program.", 
		"I'm interested in applying rigorous quantitative techniques to complex social science questions. I use computational models, network analysis, statistics, and visualization to facilitate rapid analysis, with an eye towards policy.",
		"My dissertation research involves developing agent-based models of international conflict and comparatively tested their explanatory and predictive power using event data.",
		"Outside of academia I'm into cooking, road-tripping, rock climbing, and reading and writing fiction."
	],

Sidebar: [
/* Links for the sidebar.
Structure is {text, url}
*/
	{text: "About", url: 'index.html'},
	{text: "Research", url: 'Research.html'},
	{text: 'R&eacute;sum&eacute;', url: "resume.html"},
	{text: 'Blog', url: '/blog'}

],

PeerReviewed: [
/* 
Peer-Reviewed or refereed publications

Project entry structure is:
{name, authors, date, source, image, description, links: [...]}
*/
	{
		name: "Mesa: An Agent-Based Modeling Framework",
		authors: "Jacqueline Kazil and David Masad",
		source: '<a href="http://conference.scipy.org/proceedings/scipy2015/jacqueline_kazil.html">SciPy 2015</a>',
		date: "July, 2015",
		image: 'MesaLogo_sm.png',
		description: 'We are developing Mesa, an agent-based modeling framework in Python that integrates with the scientific Python ecosystem and features modular components and a browser-based visualization.',
		links: [
			{text: "Project GitHub Repository", url: "https://github.com/projectmesa/mesa"}
		]
	},
	{
		name: "International Relations: State-Driven and Citizen-Driven Networks",
		authors: "Andrew Crooks, David Masad, Arie Croitoru, Amy Cotnoir, Anthony Stefanidis, Jacek Radzikowski",
		source: '<a href="http://ssc.sagepub.com/content/early/2013/10/16/0894439313506851.abstract">Social Science Computer Review</a>',
		date: "November, 2013",
		image: 'qpol.png',
		description: 'We compare and contrast inter-state networks formed by national governments with those formed by individual citizens using social media.',
		links: []
	},

	{
		name: "Towards Arms and Influence Networks",
		authors: "David Masad and <a href='http://www.css.gmu.edu/andrew/'>Andrew Crooks</a>",
		source: ' <a href="http://www.rhsmith.umd.edu/ccb/conference/2012/">Complexity in Business 2012, Washington DC</a>',
		date: "2012",
		image: 'ArmsInfluence.png',
		description: 'We present preliminary results of applying the tools of network analysis to the international system, with a focus on the transfer of major arms.',
		links: [
			{text: "Abstract", url: "files/Masad, Crooks - Arms Networks.pdf"},
	        {text: "Presentation",url: "files/CIB_Presentation.pdf"}
		]
	},

	{
		name: "Herd Privacy: Modeling the Spillover Effects of Privacy Settings on Social Networking Sites",
		authors: "David Masad",
		source: '<a href="http://computationalsocialscience.org/conferences/17-2">CSSSA 2011, Santa Fe</a>',
		date: "2011",
		image: 'HerdPrivacy.png',
		description: "The discussion of privacy on Facebook and other social networking sites generally focuses on the privacy settings users can apply to their own content. However, many users have private information controlled by other users too: tagged photos, wall comments, even the friendship itself. This paper used a simple computational model to estimate the way individual users' exposure is affected by the privacy settings of their friends network -- the herd privacy effect.",
		links: [
			{text: "Paper", url: "files/Masad - Herd Privacy.pdf"},
	        {text: "Presentation",url: "files/Herd Privacy - Santa Fe.pdf"}
		]
	}
],

OtherProjects: [
	/*
	Informal projects.
	Project entry structure:
	{Name, link, image, description}
	*/
	{
		name: 'Using GDELT to track the Syrian conflict',
		link: 'http://themonkeycage.org/2013/07/09/how-computers-can-help-us-track-violent-conflicts-including-right-now-in-syria/',
		image: 'SyriaGDELT.png',
		description: "Guest post on <a href='http://themonkeycage.org/'>The Monkey Cage</a> comparing GDELT data on the Syrian civil war with reported casualty numbers."
	},

	{
		name: 'Intro to Phoenix Data',
		link: 'https://github.com/dmasad/PhoenixData/blob/master/Intro%20to%20Phoenix.ipynb',
		image: 'Phoenix.png',
		description: 'Quick tutorial on analyzing Phoenix event data in Python.'
	},

	{
		name: 'Intro to ICEWS',
		link: 'https://gist.github.com/dmasad/f79ce5abfd4fb61d253b',
		image: 'ICEWS.png',
		description: 'Quick tutorial on analyzing ICEWS event data in Python.'
	},

	{
		name: 'Introduction to GDELT',
		link: 'https://github.com/dmasad/GDELT_Intro',
		image: 'GDELT.png',
		description: '(Outdated) Quick introductions to working with the  <a href="http://gdelt.utdallas.edu/">Global Data on Events, Location and Tone</a> dataset, which contains 200+ million geolocated political events from 1979 to 2012. The <a href="http://nbviewer.ipython.org/urls/raw.github.com/dmasad/GDELT_Intro/master/Getting_Started_with_GDELT.ipynb">first tutorial</a> covers event counts, and the <a href="http://nbviewer.ipython.org/urls/raw.github.com/dmasad/GDELT_Intro/master/GDELT_Mapping.ipynb">second tutorial</a> covers basic mapping.<br />I also have a <a href="http://nbviewer.ipython.org/urls/raw.github.com/dmasad/GDELT_Intro/master/GKG%2520Tutorial.ipynb">tutorial</a> on working with the new <a href="http://gdeltblog.wordpress.com/2013/10/27/announcing-the-debut-of-the-gdelt-global-knowledge-graph/">Global Knowledge Graph</a>, the GDELT companion dataset of named entities and themes.'
	},

	{
		name: 'Introduction to GDELT',
		link: 'https://github.com/dmasad/GDELT_Intro',
		image: 'GDELT.png',
		description: '(Outdated) Quick introductions to working with the  <a href="http://gdelt.utdallas.edu/">Global Data on Events, Location and Tone</a> dataset, which contains 200+ million geolocated political events from 1979 to 2012. The <a href="http://nbviewer.ipython.org/urls/raw.github.com/dmasad/GDELT_Intro/master/Getting_Started_with_GDELT.ipynb">first tutorial</a> covers event counts, and the <a href="http://nbviewer.ipython.org/urls/raw.github.com/dmasad/GDELT_Intro/master/GDELT_Mapping.ipynb">second tutorial</a> covers basic mapping.<br />I also have a <a href="http://nbviewer.ipython.org/urls/raw.github.com/dmasad/GDELT_Intro/master/GKG%2520Tutorial.ipynb">tutorial</a> on working with the new <a href="http://gdeltblog.wordpress.com/2013/10/27/announcing-the-debut-of-the-gdelt-global-knowledge-graph/">Global Knowledge Graph</a>, the GDELT companion dataset of named entities and themes.'
	},

	{
		name: "Grey's Anatomy ERGM in Python",
		link: 'https://gist.github.com/dmasad/78cb940de103edbee699',
		image: 'GreyAnatomy.png',
		description: "Analyzing the relationships on the TV series Grey's Anatomy with Exponential Random Graph Models and PyMC."
	},

	{
		name: 'TributeWorld',
		link: 'https://github.com/dmasad/tributeworld',
		image: 'TributeWorld.png',
		description: "As a final project in <a href='http://css.gmu.edu/node/8?q=node/16'>Professor Claudio Cioffi-Revilla</a>'s class on the origins of social complexity, I replicated and expanded Robert Axelrod's Tribute Model in the <a href='http://cs.gmu.edu/~eclab/projects/mason/'>MASON</a> framework. The repository also inclues Python code used to analyze the model outputs."
	},

	{
		name: 'How (Not) to Forecast a Papal Conclave',
		link: 'http://nbviewer.ipython.org/urls/raw.github.com/dmasad/Pope_Forecasting/master/Conclave_Modeling_Tutorial.ipynb',
		image: 'Popecasting.png',
		description: "A quick tutorial on a few computational social science concepts applied to a simple example of complex forecasting. Scrape text from Wikipedia, cluster it, and use that as an input into an agent-based model. I wrote this in the week leading up the the most recent papal conclave. I didn't get the prediction right (but neither did anybody else)."
	}
],

Education: [
	{
		name: "Department of Computational Social Science",
		subtitle: 'Ph.D. Student',
		location: "George Mason University, Fairfax, VA",
		timeframe: "2012 - Present",
		descriptions: [
			"Recipient of Presidential Scholarship",
			"Courses toward Graduate Certificate, January 2011 - May 2012",
			"<b>Research areas:</b> Network analysis, agent-based modeling, international relations, national security policy"]
	},

	{
		name: "Santa Fe Institute",
		subtitle: 'Complex Systems Summer School',
		location: "Santa Fe, NM",
		timeframe: "June, 2013",
		descriptions: [
			"Intense introduction to complexity in mathematical, physical, biological and social sciences.",
			"Included lectures, seminars, and independent research projects.",
			"Received full funding from George Mason University"]
	},


	{
		name: "The University of Chicago",
		subtitle: 'BA - Economics; Minor - Near Eastern Languages and Civilizations',
		location: "Chicago, IL",
		timeframe: "2005 - 2009",
		descriptions: ["GPA: 3.64; Dean's List 2005-2009"]
	}
],

Employment: [
	{
		name: "Department of Computational Social Science",
		subtitle: "Graduate Research Assistant",
		location: "George Mason University, Fairfax, VA",
		timeframe: "2012 - 2015",
		descriptions: [
			"Collaborate with faculty to develop agent-based models, acquire and analyze data, and write results for publication.",
			"Analyzed large-scale Twitter data relating to Syrian conflict, using novel country- level aggregation in conjunction with geopolitical network analysis.",
			"Presented methodologies and results to special interest course given to NGA analysts."]

	},
	{
		name: "The MITRE Corporation",
		subtitle: "Artificial Intelligence Engineer Graduate Intern",
		location: "Arlington, VA",
		timeframe: "Summer 2014",
		descriptions: [
			"Developed modeling approach to assessing and improving large-scale judiciary systems.",
			"Collaborated with external subject-matter experts to operationalize qualitative insights and experience into agent-based models.",
			"Developed multi-user simulation for validation of an agent-based model, and conducted initial experiments with graduate student volunteers.",
			]

	},

	{
		name: "Caerus Analytics",
		subtitle: "Summer Research Fellow",
		location: "Arlington, VA",
		timeframe: "Summer 2013",
		descriptions: [
			"Researched the applications of computational social science methods to national security and humanitarian conflict monitoring.",
			"Studied applications of GDELT data to Syrian civil war.",
			"Built agent-based model of urban conflict, with a focus on Aleppo, and validated results in collaboration with regional subject-matter experts",
			"Surveyed methods for estimating of urban robustness."]

	},

	{
		name: "Institute for Defense Analyses, Cost Analysis and Research Division",
		subtitle: "Research Assistant",
		location: "Alexandria, VA",
		timeframe: "2009 - 2012",
		descriptions: [
			"Worked on teams conducting policy studies to collect and analyze quantitative and qualitative data, and brief results and recommendations to Department of Defense.",
			"Designed, implemented and evaluated econometric models for trend analysis and forecasting.",
			"Refined and executed microsimulation model using million-plus record database.",
			"Introduced computational techniques for rapid data acquisition from online databases."
		]

	}
],

Skills: {
	Methods: [
		"Network analysis",
		"Agent-based modeling",
		"Econometrics",
		"Natural language processing",
		"Machine learning",
		"Web scraping",
		"Data visualization"
	],

	Technical: [
	"Python",
	"Java",
	"R",
	"JavaScript",
	"C/C++/C#",
	"Stata / SPSS",
	],

	Languages: ["Hebrew (fluent)", "Arabic (beginner)"]

}


}