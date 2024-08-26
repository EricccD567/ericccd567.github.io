export const bgColor = '#112211';

export const scaleFactor = 3.5;

export const playerSpeed = 250;

const computerContent = {
  projects: [
    {
      name: 'Portfolio',
      year: '2024',
      tags: ['Web Dev', 'Portfolio', 'Game'],
      description:
        "This is the site you're on right now! The map was made using Tiled along with some public assets. The game mechanics were based on Kaboom.js tutorials. The UI was built with HTML, CSS, and JavaScript plus some components from a CSS library and a CSS framework. It's responsive so explore on either desktop or mobile!",
      links: [
        {
          host: 'GitHub',
          link: 'https://github.com/EricccD567/ericccd567.github.io',
        },
        {
          host: 'Website',
          link: 'https://ericccd567.github.io/',
        },
      ],
    },
    {
      name: 'Tuesday',
      year: '2022',
      tags: ['Web Dev', 'UI/UX', 'Frontend', 'Backend', 'Database'],
      description:
        "Tuesday was my team's uni capstone project. It's a team task management system where users can add team members and create/assign tasks. Users are also able to view their peers' tasks and workload capacity scores to assist or reassign work. It has a self-reflection feature that provides daily analytical feedback and can personalise task order based on user tendencies, deadlines, and task dependencies. I was responsible for the UI/UX, some of the React.js frontend, and assisted with the Python backend.",
      links: [
        {
          host: 'GitHub',
          link: 'https://github.com/EricccD567/Tuesday',
        },
        {
          host: 'Web App',
          link: 'https://tuesday-0o2u.onrender.com/',
        },
      ],
    },
    {
      name: 'TimerQ',
      year: '2024',
      tags: ['Web App', 'Frontend'],
      description:
        'TimerQ is a countdown timer queue that can manage multiple countdown timers in a queue, built with TypeScript and React.js. It provides a hands-free experience for users to streamline daily routines by automatically starting the next timer in the queue after the previous one ends. It also allows for real-time adjustments, including adding, deleting, and editing timers.',
      links: [
        {
          host: 'GitHub',
          link: 'https://github.com/EricccD567/TimerQ',
        },
        {
          host: 'Website',
          link: 'https://ericccd567.github.io/TimerQ/',
        },
      ],
    },
    {
      name: 'reset-css',
      year: '2024',
      tags: ['Web Dev', 'CSS Reset'],
      description:
        "This is an opinionated CSS reset that deals with inconsistencies between different browsers' user-agent stylesheets as well as enhance developer experience. It improves the default readability of text, responsiveness of media elements, and performance. The reset's effects are highlighted in the website. Try it for your next project!",
      links: [
        {
          host: 'GitHub',
          link: 'https://github.com/EricccD567/reset-css',
        },
        {
          host: 'Website',
          link: 'https://ericccd567.github.io/reset-css/',
        },
      ],
    },
    {
      name: 'Git Cheatsheet',
      year: '2024',
      tags: ['Git'],
      description:
        "A somewhat detailed reference of common Git commands. When I first started coding, I had a vague idea of how Git worked, but as I began using more advanced Git commands, I found myself wondering what the commands were actually doing. So I decided to research and test a bunch of commands to compile a cheatsheet for developers in similar situations. It clarifies Git's structure and processes without getting too in-depth.",
      links: [
        {
          host: 'GitHub Gist',
          link: 'https://gist.github.com/EricccD567/225755178caf24b04f7d2d1a38877120',
        },
      ],
    },
    {
      name: 'sheepy',
      year: '2023',
      tags: ['Python', 'Dash', 'Transpiler'],
      description:
        'Sheepy is a basic Dash script to Python code transpiler. It is a Python script that takes in a Dash script as input, translating it line by line to valid Python code including indentation and imports, and prints the output to the command line.',
      links: [
        {
          host: 'GitHub',
          link: 'https://github.com/EricccD567/sheepy',
        },
      ],
    },
    {
      name: 'scroll-snap-effect',
      year: '2021',
      tags: ['Web Dev', 'Effect'],
      description:
        'A simple scroll-snap page effect with buttons that use scrollTo to smoothly move to different sections of the page. I made this in HTML, CSS, and Javascript when I first started learning web development.',
      links: [
        {
          host: 'GitHub',
          link: 'https://github.com/EricccD567/scroll-snap-effect',
        },
        {
          host: 'Website',
          link: 'https://ericccd567.github.io/scroll-snap-effect/',
        },
      ],
    },
    {
      name: 'txt2report',
      year: '2024-',
      tags: ['Development'],
      description:
        "An auto format report creator. It's curently in development so check back soon!",
      links: [],
    },
  ],
  experience: [
    {
      name: 'ac-redesign',
      year: '2021',
      tags: ['UI/UX', 'Designer'],
      description:
        'Designed a modernised mockup of a desktop website homepage for a bicycle shop. Provided concepts for the shop owner based on design principles and usability heuristics.',
      links: [
        {
          host: 'Figma',
          link: 'https://www.figma.com/design/jt777EgXgY28iZ144aE2R8/ac-redesign?node-id=0-1&t=VtdPlgBP4CFNM11m-1',
        },
      ],
    },
    {
      name: 'Dreamway',
      year: '2019-2020',
      tags: ['Tutor'],
      description:
        'Facilitated academic success in mathematics for students in years 7-12.',
      links: [
        {
          host: 'Website',
          link: 'https://dreamwayeducation.com.au/',
        },
      ],
    },
    {
      name: 'Project Prosthesis',
      year: '2018-2019',
      tags: ['Co-Founder', 'Mechanical', 'Engineer', 'CAD', '3D Printing'],
      description:
        'Founded the startup with my mentor to prototype and build cheap, modular prosthetic legs aimed at children in developing countries. This allows the children to adapt to growth and damage while improving gait. Two other members joined and we managed to build two prototypes using CAD and 3D printing.',
      links: [],
    },
    {
      name: 'JEI',
      year: '2018-2019',
      tags: ['Tutor'],
      description:
        'Taught year 4-9 students to build basic wheeled robots and introductory programming.',
      links: [
        {
          host: 'Website',
          link: 'https://au.jei.com/',
        },
      ],
    },
  ],
};

const skillsContent = {
  technical: [
    {
      skill: 'Git',
      level: 9,
    },
    {
      skill: 'HTML',
      level: 8,
    },
    {
      skill: 'CSS',
      level: 8,
    },
    {
      skill: 'JavaScript',
      level: 7,
    },
    {
      skill: 'Python',
      level: 7,
    },
    {
      skill: 'Shell',
      level: 7,
    },
    {
      skill: 'Figma',
      level: 7,
    },
    {
      skill: 'TypeScript',
      level: 6,
    },
    {
      skill: 'React.js',
      level: 6,
    },
    {
      skill: 'HCI',
      level: 6,
    },
    {
      skill: 'Java',
      level: 5,
    },
    {
      skill: 'C',
      level: 5,
    },
    {
      skill: 'Networking',
      level: 5,
    },
    {
      skill: 'MongoDB',
      level: 4,
    },
    {
      skill: 'Security',
      level: 4,
    },
    {
      skill: 'SQL',
      level: 3,
    },
  ],
  soft: [
    {
      skill: 'Learning',
      level: 9,
    },
    {
      skill: 'Detailed',
      level: 9,
    },
    {
      skill: 'Organisation',
      level: 9,
    },
    {
      skill: 'Problem Solving',
      level: 8,
    },
    {
      skill: 'Communication',
      level: 7,
    },
    {
      skill: 'Teamwork',
      level: 7,
    },
    {
      skill: 'Leadership',
      level: 5,
    },
  ],
};

export const data = {
  computer: {
    uiBase: 'ui-large',
    ui: 'computer',
    uiClose: 'computer-btn-close',
    content: computerContent,
  },
  console: {
    uiBase: 'ui-large',
    ui: 'console',
    uiClose: 'console-btn-close',
    content: {},
  },
  resume: {
    uiBase: 'ui-medium',
    ui: 'resume',
    uiClose: 'resume-btn-close',
    content: {},
  },
  skills: {
    uiBase: 'ui-medium',
    ui: 'skills',
    uiClose: 'skills-btn-close',
    content: skillsContent,
  },
  degree: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: {
      text: "I studied at The University of New South Wales (UNSW Sydney) from 2018 to 2024 with a dual bachelor's degree in Computer Science and Mechanical Engineering (Honours).",
    },
  },
  about: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: {
      text: "Hi! I'm <strong>Eric Dai</strong>, a <strong>developer</strong> and <strong>engineer</strong>, based in <strong>Sydney, AU</strong>. I'm passionate about building cool things with technology, currently focused on full-stack development. Feel free to look around!",
    },
  },
  bag: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: {
      text: 'A pair of running shoes and boxing gloves...',
    },
  },
  food: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: {
      text: 'Eggs, chicken, tuna, rice, yogurt, melon, leftover pizza...',
    },
  },
  music: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: {
      text: 'I enjoy lo-fi and bedroom pop. I\'m learning music production and if I ever make something cool I\'ll post it to my <a href="https://soundcloud.com/nopei" target="_blank" rel="noopener noreferrer">SoundCloud</a>. Stay tuned!',
    },
  },
  art: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: {
      text: 'Coming soon!',
    },
  },
};
