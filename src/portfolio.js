import emoji from "react-easy-emoji";

import fullstack from "./assets/img/icons/common/myface.png";
import frontend from "./assets/img/icons/common/Theodore.jpeg";
import product from "./assets/img/icons/common/bobo.jpeg";
import data from "./assets/img/icons/common/oly.jpeg";
import hackerrank from "./assets/img/har.png";
import freecodecamp from "./assets/img/free.jpg";
import programminghub from "./assets/img/prohub.png";
import others2 from "./assets/img/icons/common/elizeu.jpg";

export const greetings = {
	name: "ICodeTill.xyz",
	title: "Hi, I am Valentine Eze",
	description:
		"My name is Valentine, i enjoy writing code and making Applications work on the web. I have good experiences, and building on them, i learn fast and always open to learn more from anywhere and anybody",
	resumeLink: "mailto:ifeanyivalentine82@gmail.com",
};

export const openSource = {
	githubUserName: "https://github.com/Sugarcothe",
};

export const contact = {};

export const socialLinks = {
	// facebook: "https://www.facebook.com/",
	// instagram: "https://www.instagram.com/",
	twitter: "https://twitter.com/sweetestshuga",
	github: "https://github.com/Sugarcothe",
	linkedin: "https://www.linkedin.com/in/valentineeze/",
};

export const skillsSection = {
	title: "My expertise",
	subTitle:
		"I have great number of tools, which i choose the best in creating excellence in your project",
	skills: [
		emoji(
			"⚡ Great communication skill, and team spirited"
		),
		emoji(
			"⚡ Develop highly interactive Frontend /Backend for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Optimizing your online presence in a safe and steady platform"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean/ others"
		),
		
	],

	softwareSkills: [
		{
			skillName: "Html",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "linux",
			fontAwesomeClassname: "vscode-icons:file-type-ubuntu",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "Redux",
			fontAwesomeClassname: "logos:redux",
		},
		{
			skillName: "Nodejs",
			fontAwesomeClassname: "logos:nodejs",
		},
		{
			skillName: "Nestjs",
			fontAwesomeClassname: "logos:nestjs",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "NPM",
			fontAwesomeClassname: "logos:npm",
		},
		{
			skillName: "Bootstrap",
			fontAwesomeClassname: "logos:bootstrap",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "swift",
			fontAwesomeClassname: "vscode-icons:file-type-swift",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Javascript", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Frontend Developement", //Insert stack or technology you have experience in
		progressPercentage: "100", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend Developement",
		progressPercentage: "80",
	},
	{
		Stack: "Deployment",
		progressPercentage: "87",
	},
	{
		Stack: "SEO",
		progressPercentage: "80",
	},
	{
		Stack: "Product Management/Devops",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "Familylove Fm",
		subHeader: "Fronten Developer",
		duration: "December 2018 - July 2019",
		descBullets: [
			"Built the frontend of the companies Blog",
			"Monitored and managed the company website, improving the SEO",
		],
	},
	{
		schoolName: "Yobetech Corp",
		subHeader: "Froend Tutor",
		duration: "August 2019 - August 2020",
		descBullets: [
			"taught frontend Developement stack (Html, css, React, Bootstrap)",
			"Made weekly assesment on the studente and sends report to the head",
			"Assesed every student and gave advice on how to progress in the technical journey",
		
		],
	},

	{
		schoolName: "Yammieshoppers",
		subHeader: "Fullstack Developer/DevOps",
		duration: "September 2020 - April 2021",
		descBullets: [
			"Participated in the whole lifecycle of the app from design to deployment and monitoring",
		],
	},
];

export const experience = [
	{
		role: "React",
		company: "HackerRank",
		companylogo: hackerrank,

	},
	{
		role: "Frontend Libraries",
		company: "FreeCodeCamp",
		companylogo: freecodecamp,
	},
	{
		role: "Advanced JQuery",
		company: "Programming Hub",
		companylogo: programminghub,
	},
	{
		role: "Javascript",
		company: "HackerRank",
		companylogo: hackerrank,
	},
	{
		role: "Responsive web design",
		company: "FreeCodeCamp",
		companylogo: freecodecamp,
	},
];


export const projects = [
	{
		name: "Yammieshoppers",
		desc: "An ecommerce site built basically on MERN stack, the site is still managed by Gateway Interactive",
		github: "https://github.com/YammieLimited",
		link: "https://yammieshoppers.com",
	},
	{
		name: "Wildfire Indicator",
		desc: "A mern stack, with api fetched from NASA developemnt API, for tracking wildfire occurance around the globe",
		github: "https://sugarcothe.github.io/wild-fire-tracker/",
		link: "https://github.com/Sugarcothe/wildfire-tracker"
	},
	{
		name: "Beatbox",
		desc: "A music producer beatbox made in react",
		github: "https://codepen.io/Sugarcothe/pen/mdWQJBE",
		link: "https://codepen.io/Sugarcothe/full/mdWQJBE",
	},
	{
		name: "Video call",
		desc: "Realtime video chat Application, built on Node using web3tc for peer to peer video chat",
		github: "https://github.com/Sugarcothe/vicallme",
		link: "https://vicall-app.netlify.app/",
	},
];

export const feedbacks = [
	{
		name: "Steve Kakooza",
		feedback:
			"working with val have seen us happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Gateway interactive has been great. He handle things very efficiently and available for any task",
	},
	{
		name: "James Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. great job!",
	},
];
