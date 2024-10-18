const SiteData = function () {
  this.title = "Chinedum Onyema",
    this.about = "Full Stack Developer and Data Science enthusiast",
    this.intro = `Full Stack Developer with over 2 years experience in developing Mobile Web Applications`,
    this.work = `My passion is to create software products that enhance and scale with business processes and gives a business the online presence it requires.
  I have experience developing solutions with clean and maintainable code using concepts and tools, such as requirement analysis, UI/UX design, project organization, Responsive Web Design(RWD), Progressive Web Apps (PWA), REST APIs, database design and development, SQL and NoSQL databases, version control (Git/GitHub), collaboration, Test-Driven software Development (TDD) and Continuous Integration (CI).`,

    // logo = "conyema.svg",
    // logo = "conyema.jpg",
    this.logo = "conyema.png",
    this.location = "Abuja, Nigeria",
    this.email = "onyemachinedum@gmail.com",
    this.github = "https://github.com/conyema",
    this.linkedin = "https://www.linkedln.com/in/ceonyema",
    this.twitter = "https://twitter.com/ChinedumOnyema",
    this.skills = [
      {
        title: "Frontend",
        list: ["HTML5", "CSS3", "JavaScript", "Python", "UI/UX Design", "Pug"]
      },
      {
        title: "Backend",
        list: ["NodeJS", "PostgreSQL", "MongoDB"]
      },
      {
        title: "Frameworks",
        list: ["ReactJS", "Bootstrap", "ExpressJS", "Jquery", "Mocha"]
      },
      {
        title: "Build & Deployment Tools",
        list: ["Webpack", "Gulp", "Grunt", "Heroku", "Netlify", "Github"]
      },
      {
        title: "Non-Technical",
        list: ["Test-Driven Development (TDD)", "Leadership", "Detail Oriented"]
      },
    ],
    this.certs = [
      {
        issuer: "Udacity",
        link: "https://confirm.udacity.com/KKFRJJKG",
        title: "AI programming with Python"
      },
      {
        issuer: "Google Cloud Platform (GCP)",
        link: "https://www.credential.net/a6219904-17d3-4c07-9e9a-a4bc8f5742ff",
        title: "Associate Cloud Engineer"
      },
      {
        issuer: "Google Africa Scholarship with Udacity",
        link: "https://confirm.udacity.com/E95EFNV7",
        title: "Mobile Web Specialist Nanodegree"
      },
      {
        issuer: "Google Digital Skills For Africa",
        link: "https://learndigital.withgoogle.com/link/1ar27gu2qdc",
        title: "The Fundamentals of Digital Marketing"
      },
      // {
      //   issuer ="Federal Univerity of Technology, Minna",
      //   link = "#",
      //   title = "BENG in Computer Engineering"
      // },
    ],
    this.projects = [
      {
        title: "AAPN Website",
        imageSrc: "/aapn.png",
        description: "Website design in WordPress(CMS)",
        links: {
          demo: "https://aapn.org.ng/",
          repo: "#",
        },
        tags: "CMS - WordPress - MySQL - Bootstrap - HTML - CSS",
      },
      {
        title: "Financial inclusion africa",
        imageSrc: "/fia.png",
        description: "An end-to-end machine learning project to predict bank account ownership",
        links: {
          demo: "/financial-inclusion-africa",
          repo: "https://github.com/conyema/predict-financial-inclusion-africa",
        },
        tags: "ML - Data Analysis - ReactJS - NextJS - Flask API - Tailwind",
      },
      {
        title: "REAN Website",
        imageSrc: "/rean.png",
        description: "Website redesign and resource migration to WordPress(CMS)",
        links: {
          demo: "https://rean.org.ng/",
          repo: "#",
        },
        tags: "CMS - WordPress - MySQL - Bootstrap - HTML - CSS",
      },
      {
        title: "SEC Website",
        imageSrc: "/sec.png",
        description: "A real estate/business full-stack website",
        links: {
          demo: "https://sec-client.vercel.app/",
          repo: "https://github.com/conyema/sec-client",
        },
        tags: "ReactJS - NodeJS - MySQL - Bootstrap - HTML - CSS",
      },
      {
        title: "Personal portfolio",
        imageSrc: "/grace_onyema.png",
        description: "A Progressive Web Application (PWA)",
        links: {
          demo: "https://www.graceonyema.com/",
          repo: "https://github.com/graceonyema/graceonyema.github.io",
        },
        tags: "PWA - Bootstrap - HTML - CSS - JS",
      },
      {
        title: "Currency Converter",
        imageSrc: "/currency_converter.png",
        description: "Get the latest exchange rate from this WebApp",
        links: {
          demo: "https://conyema.github.io/currency-converter/",
          repo: "https://github.com/conyema/currency-converter",
        },
        tags: "PWA - API - NodeJS",
      },
      {
        title: "Star Match",
        imageSrc: "/star_match.png",
        description: "Game: Beat the clock and match the stars",
        links: {
          demo: "https://conyema.github.io/star-match/",
          repo: "https://github.com/conyema/star-match",
        },
        tags: "React - React-Hook - Bootstrap",
      },
      {
        title: "Restaurant Review",
        imageSrc: "/chow.png",
        description: "Review a select group of restaurants",
        links: {
          demo: "https://chow.netlify.app",
          repo: "https://github.com/conyema/mws-restaurant-stage-1",
        },
        tags: "PWA",
      },
      {
        title: "Alexander Graham Bell",
        imageSrc: "/agb.png",
        description: "My tribute to a man that inspires me",
        links: {
          demo: "https://codepen.io/conyema/full/jJjzKy",
          repo: "https://codepen.io/conyema/pen/jJjzKy",
        },
        tags: "HTML - CSS",
      }
    ]

  // this.cta = {
  //   title = "Do you have a project to discuss?"
  // },
}

module.exports = SiteData;