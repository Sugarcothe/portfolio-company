import emoji from "react-easy-emoji";

import fullstack from "./assets/img/icons/common/myface.png";
import frontend from "./assets/img/icons/common/Theodore.jpeg";
import product from "./assets/img/icons/common/bobo.jpeg";
import data from "./assets/img/icons/common/oly.jpeg";
import others1 from "./assets/img/icons/common/usman.jpg";
import others2 from "./assets/img/icons/common/elizeu.jpg";

export const greetings = {
	name: "GreenCode Inc",
	title: "Hi, you are welcome",
	description:
		"At Gateway Interactive, our vision is to create a better and interactive website for you and your clients, to increase productivity and add great value to your business.",
	resumeLink: "ifeanyivalentine82@gmail.com",
};

export const openSource = {
	githubUserName: "",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/",
	instagram: "https://www.instagram.com/",
	twitter: "https://twitter.com/",
	github: "https://github.com/",
	linkedin: "https://www.linkedin.com/",
};

export const skillsSection = {
	title: "What we do",
	subTitle:
		"We have great options of about 2000+ tools, and we choose the best in creating excellence in your project",
	skills: [
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
			skillName: "html",
			fontAwesomeClassname: "vscode-icons:file-type-html",
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
			skillName: "Vue",
			fontAwesomeClassname: "logos:vue",
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
			skillName: "flutter",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:angular",
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
			skillName: "python",
			fontAwesomeClassname: "logos:python",
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
		Stack: "UI/UX", //Insert stack or technology you have experience in
		progressPercentage: "100", //Insert relative proficiency in percentage
	},
	{
		Stack: "Frontend Developement", //Insert stack or technology you have experience in
		progressPercentage: "100", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend Developement",
		progressPercentage: "100",
	},
	{
		Stack: "Deployment",
		progressPercentage: "100",
	},
	{
		Stack: "SEO",
		progressPercentage: "100",
	},
	{
		Stack: "Product Management",
		progressPercentage: "100",
	},
];

export const educationInfo = [
	// {
	// 	schoolName: "Harvard University",
	// 	subHeader: "Master of Science in Computer Science",
	// 	duration: "September 2017 - April 2019",
	// 	desc: "Participated in the research of XXX and published 3 papers.",
	// 	descBullets: [
	// 		"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	],
	// },
	// {
	// 	schoolName: "Harvard",
	// 	subHeader: "Master of Science in Computer Science",
	// 	duration: "September 2017 - April 2019",
	// 	desc: "Participated in the research of XXX and published 3 papers.",
	// 	descBullets: [
	// 		"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	],
	// },
	// {
	// 	schoolName: "Stanford University",
	// 	subHeader: "Bachelor of Science in Computer Science",
	// 	duration: "September 2013 - April 2017",
	// 	desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
	// 	descBullets: [
	// 		"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
	// 	],
	// },
];

export const experience = [
	{
		role: "Fullstack Developer",
		company: "Valentine Eze",
		companylogo: fullstack,

	},
	{
		role: "Fullstack Developer",
		company: "Idoko Theodore",
		companylogo: frontend,
	},
	{
		role: "Frontend Developer",
		company: "James Ugwu",
		companylogo: product,
	},
	{
		role: "Data Analyst",
		company: "Oly Ukwueze",
		companylogo: data,
	},
	{
		role: "Product Designer",
		company: "Nipun Ahmart",
		companylogo: others1,
	},
	{
		role: "Devops Engineer",
		company: "Zee Okwesili",
		companylogo: others2,
	},
];


export const projects = [
	{
		name: "Yammieshoppers.com",
		desc: "An ecommerce site built basically on MERN stack, the site is still managed by Gateway Interactive",
		link: "https://yammieshoppers.com",
	},
	{
		name: "Boomtrops.net",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "Alternativecamp.com",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Gateway interactive has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. We have had great customer feed back as well, i am using it without any problem. great job!",
	},
];
