const fetch = require("node-fetch");

const experience = [
    {
        company: "Umpteen Innovation",
        profile: 'Backend Developer - Node.js',
        duration: {
            start: "21 Jun 2022",
            end: "03 Sept 2022",
        },
        ['work-and-responsibility']: [
            "Engaged with a wide range of technologies, such as HTML, CSS, JavaScript, Node.js, and NoSQL database, to expand my technical proficiency.",
            "Worked on multiple tasks and assignments that challenged my problem-solving and coding skills, allowing me to apply what I had learned.",
            "Collaborated with a dedicated team of professionals, actively contributing to project discussions, and receiving mentorship from experienced developers.",
            "Gained practical exposure to the software development lifecycle, from project inception to deployment.",
        ],
    },
    {
        company: "RapidOps Inc.",
        profile: 'Software Engineer Intern',
        duration: {
            start: "06 Sept 2022",
            end: "06 Mar 2023",
        },
        ['work-and-responsibility']: [
            "Collaborated with the development team to understand project requirements and objectives.",
            "Participated in code reviews and worked closely with senior developers to enhance my coding skills.",
            "Wrote and debugged various features within the Experro project, gained hands-on experience with software development and problem-solving.",
            "Learned to work within a professional software development environment, included using version control systems and collaborated with cross-functional teams.",
            "Worked on a real project, which provided me with a practical understanding of software development processes.",
        ],
    },
    {
        company: "RapidOps Inc.",
        profile: 'Software Engineer',
        duration: {
            start: "06 Mar 2023",
            end: "Present",
        },
        ['work-and-responsibility']: [
            "Designed, developed, and maintained high-performance APIs that power Experro’s backend.",
            "Collaborated with cross-functional teams to understand product requirements and delivered scalable solutions.",
            "Debugged and resolved software defects to ensure the reliability and stability of the product.",
            "Wrote comprehensive unit test cases to validate the functionality and performance of the APIs.",
            "Worked with microservices and clean code architecture, ensures code scalability and maintainability.",
            "Contributed to a collaborative and innovative team environment, fostering effective communication and knowledge sharing."
        ],
    },
];

Promise.all(experience.map((data) => {
    fetch('http://localhost:7974/users/me/experience', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).then(data => {
        return data;
    }).catch(err => {
        console.log(err);
    })
}));