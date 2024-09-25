// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Lance",
  middleName: "",
  lastName: "Madden",
  message: " Passionate Web Development Aficionado. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/NerdLance",
    },
    /*{
      image: "fa-facebook",
      url: "https://www.facebook.com/nerdlance",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/nerdlance/",
    },*/
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lanceismarketing/",
    },/*
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/nerdlance/",
    },*/
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Lance-Madden.png"),
  imageSize: 375,
  message:
    "My name is Lance Madden. I'm a passionate web developer with a game development hobby. I've been programming since I was in 5th grade, and it's one of the only things I can imagine loving to do every day. When I'm not programming, I'm spending time with family, or driving something German with a manual transmission.",
  resume: "https://drive.google.com/file/d/171xF5YxC7i1xOBOgeNtaMdHr6ilLSfwE/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Other Projects",
  gitHubUsername: "NerdLance", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['ReactEcom', 'ReactPokedex', 'DevGigs', 'NextCodeProject'],
};

const liveProjects = {
  show: true,
  heading: 'Live Projects',
  liveProjects: [
    {
      name: 'My Rent (In Progress)',
      description: 'Rental Management & Rent Payment Software for Tenants and Landlords.',
      image_url: '',
      live_url: 'https://myrnt.com',
      softwares: 'Laravel, Stripe API, Livewire, MySQL, TailwindCSS, AWS S3, AWS SES, DocuSign'
    },
    {
      name: 'Sassy Nails',
      description: 'Salon CRM, Lead Generation, & Appointment Management software for a local Nail Salon.',
      image_url: '',
      live_url: 'https://sassynailsgloucester.com',
      softwares: 'Laravel, Stripe API, HubSpot CRM API, Twilio, Livewire, MySQL, TailwindCSS, AWS S3, AWS SES'
    },
    {
      name: 'Step Worker',
      description: 'A Web App for Documenting and Progressing through a Twelve Step Program.',
      image_url: '',
      live_url: 'https://stepworker.com',
      softwares: 'Laravel, Livewire, MySQL, TailwindCSS, AWS S3, AWS SES'
    },
    {
      name: 'Trip Fern',
      description: 'A Web App for Documenting, Planning, & Sharing Your Travel Adventures.',
      image_url: '',
      live_url: 'https://tripfern.com',
      softwares: 'Node.js, React.js, MongoDB, Express.js, Stripe API, AWS Lambda, AWS S3, AWS SES, TailwindCSS'
    },
  ]
};

const unpublishedProjects = {
  show: true,
  heading: 'Unpublished Projects',
  subheading: 'Private repositories available upon request',
  unpublishedProjects: [
    {
      name: 'AI Website Generator',
      description: 'A ChatGPT-powered website generation tool. Create modern responsive websites based on a simple prompt.',
      softwares: 'OpenAI API, React.js, Node.js'
    },
    {
      name: 'Spreadsheet Comparison Tool',
      description: 'A simple spreadsheet tool for a client designed to parse large datasets, compare selectable columns, and find similar data.',
      softwares: 'Sheets.js, React.js'
    },
    {
      name: 'Mark My Books',
      description: 'A way to track reading progress, keep notes/quotes, save bookmarks, and more.',
      softwares: 'Laravel, React.js, AWS S3'
    },
    {
      name: 'Go Yard Saling',
      description: 'As someone who grew up yardsaling, this tool is designed for fellow yardsalers to create, find, & advertise local yardsales.',
      softwares: 'Laravel, React.js, Google API'
    },
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Lance-Madden.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Lance-Madden.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "PHP", value: 100 },
    { name: "SQL", value: 80 },
    { name: "Laravel", value: 95 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 80 },
    { name: "HTML/CSS", value: 85 },
    { name: "C#", value: 60 },
    { name: "Data Structures", value: 85 },
  ],
  softSkills: [
    { name: "Self-Education", value: 100 },
    { name: "Entrepreneurialism", value: 100 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 85 },
    { name: "Leadership", value: 80 },
    { name: "Empathy", value: 90 },
    { name: "Collaboration", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Web Development opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "lance@gloucestermassmarketing.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Web Developer',
      companylogo: require('../assets/img/Cross-Catholic-Logo.png'),
      date: 'Oct 2022 – Present'
    },
    {
      role: 'Freelance Web Developer',// Here Add Company Name
      companylogo: require('../assets/img/Freelance-Web-Developer-Logo.png'),
      date: 'Aug 2011 – Present',
    },
    {
      role: 'Full-Stack Developer',// Here Add Company Name
      companylogo: require('../assets/img/Gloucester-Mass-Marketing-Logo.png'),
      date: 'Feb 2017 – Jan 2022',
    },
    {
      role: 'Head of Variable Data Development',
      companylogo: require('../assets/img/Shawmut-Logo.png'),
      date: 'Oct 2015 – Feb 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, liveProjects, unpublishedProjects, skills, leadership, getInTouch, experiences };
