const model = (function () {
  const projects = {
    silfen: {
      name: "silfen website",
      imageSrc: "assets/images/silfen.jpg",
      overview:
        "Redesign of existing website with a focus on Information Architecture and purchase flow. My role in this project was to organize collections in restdb, connect the database with UI via JavaScript fetch requests, create dynamic pages, and make filters work. Plus, I participated in ideation, research, dividing functionality into user stories, and conducted some of the user tests.",
      technology: [
        "HTML",
        "CSS",
        "JS",
        "Restful API",
        "restdb",
        "Insomnia",
        "Github",
      ],
      link: "https://lelekaspb.github.io/silfen_website/",
      repository: "https://github.com/lelekaspb/silfen_website",
    },
    calculator: {
      name: "budget calculator",
      imageSrc: "assets/images/calculator.jpg",
      overview:
        "Simple app that calculates income and expenses for the current month. It was an individual project where I could exercise MVC pattern, IIFE functions, and JavaScript Object Prototypes.",
      technology: ["HTML", "CSS", "JS", "MVC pattern"],
      link: "https://lelekaspb.github.io/calculator/",
      repository: "https://github.com/lelekaspb/calculator",
    },
    travldest: {
      name: "travel destinations",
      imageSrc: "assets/images/travldest.jpg",
      overview:
        "Study project where I got to learn to create API with endpoints including protected endpoints with the use of JWT package. Basics of the MVC pattern were applied, and here I also learned to upload images from frontend to backens, and, then, to Cloudinary storage.",
      technology: [
        "HTML",
        "CSS",
        "JS",
        "Node.js",
        "Express.js",
        "JWT",
        "bcrypt",
        "Multer",
        "Cloudinary",
        "MongoDB",
        "Mongoose",
      ],
      link: "https://shiny-nougat-0551c4.netlify.app",
      repository: "https://github.com/lelekaspb/travel-destinations-backend",
    },
    crm: {
      name: "simple CRM system",
      imageSrc: "assets/images/crm.jpg",
      overview:
        "Very interesting project. User adds bids, the app stores them in Local Storage, renders them on a separate page along with calculating and displaying bids' quantities in every category. When filtering, type of bids and category cross-reference triggering re-render of bids. Users can also edit bids; that would trigger Local Storage update, re-calculating budges with numbers of bids for every category and re-displaying those. Individual project.",
      technology: [
        "HTML",
        "CSS",
        "JS",
        "MVC pattern",
        "localStorage",
        "URL parameters",
        "ES5 modules",
      ],
      link: "https://lelekaspb.github.io/crm/",
      repository: "https://github.com/lelekaspb/crm",
    },
    hogwarts: {
      name: "hogwarts student list",
      imageSrc: "assets/images/hogwarts.jpg",
      overview:
        "A very interesting and challenging individual project. The app fetches two json files with the use of Asynchronous JavaScript functions, corrects students' names, constructs image sources, calculates blood statuses, and displays it all in browser. In addition, the app allows users to search, filter, and sort students. The most challenging part of the assignment was to implement a function that would hack the system. The function can be called from the console (hackTheSystem();) or by typing 'hackit' while app is open in browser. It adds myself as a student and won't allow my expelling, it also randomizes blood statuses and makes sure that students added to the inquisitorial squad after hacking, will be removed again after 20 seconds.",
      technology: ["HTML", "CSS", "JS", "AJAX & Fetch API"],
      link: "https://lelekaspb.github.io/hogwarts-list/",
      repository: "https://github.com/lelekaspb/hogwarts-list",
    },
    memover: {
      name: "memover campaign website",
      imageSrc: "assets/images/memover.jpg",
      overview:
        "A campaign website we made during second semester for the Me-Mover start-up. It was my responsibility to create responsive online prototype based on XD prototype my fellow peers had made. The solution is hosted on Netlify and it keeps data that users post with contact form.",
      technology: ["HTML", "CSS", "JS", "Netlify"],
      link: "https://quizzical-mccarthy-7e4615.netlify.app/",
      repository: "https://github.com/lelekaspb/me-mover_website",
    },
    planner: {
      name: "todos",
      imageSrc: "assets/images/planner.jpg",
      overview:
        "A todo list with suggested defaulf tasks that is kept in Local Storage. Tasks can be added or deleted, plus search task functionality. Individual project.",
      technology: ["HTML", "Bootstrap", "JS", "localStorage"],
      link: "https://lelekaspb.github.io/todo/",
      repository: "https://github.com/lelekaspb/todo",
    },
    blog: {
      name: "blogging website",
      imageSrc: "assets/images/blog.jpg",
      overview:
        "A collaborative blogging site where visitors can create new posts and comment on posts. Posts need to be approved before showing on the site. Individual project.",
      technology: ["HTML", "CSS", "JS", "Restdb", "AJAX & Fetch API"],
      link: "https://lelekaspb.github.io/blogging_site/",
      repository: "https://github.com/lelekaspb/blogging_site",
    },
    wildorchid: {
      name: "a beauty salon website",
      imageSrc: "assets/images/wildorchid.jpg",
      overview:
        "Website for a beauty salon Wild Orchid. The website is made in two languages with the use of React INTL library. Using AJAX requests, the app posts information gathered from forms into restdb and sends notification emails to Wild Orchid.",
      technology: [
        "React.js",
        "CSS modules",
        "React INTL",
        "React Router DOM",
        "AJAX & Fetch API",
      ],
      link: "https://resilient-custard-075d47.netlify.app/",
      repository: "https://github.com/lelekaspb/wildorchid-after-submit",
    },
    foobar: {
      name: "ordering form Foobar",
      imageSrc: "assets/images/foobar.jpg",
      overview:
        "A beer ordering form for an imaginary bar Foobar. The app is meant to be installed on tablets at every table in the bar so that customers can order beer without getting up. The app fetches beer data from backend, and after a user order beer and pay, it posts order into backend. ",
      technology: ["React.js", "SASS", "React Router DOM"],
      link: "https://upbeat-jepsen-337af2.netlify.app/",
      repository: "https://github.com/lelekaspb/foobar-form",
    },
    foobardash: {
      name: "staff dashboard Foobar",
      imageSrc: "assets/images/foobardash.jpg",
      overview:
        "Dashboard to help Foobar staff to manage bar operations. The app fetches data every 5 seconds in order to keep the staff updated on beer taps, storage, amount of orders in queue, and what bartenders are doing at the moment.",
      technology: [
        "HTML",
        "JS",
        "ES6 JS modules",
        "JS classes",
        "Tailwind",
        "Vite",
      ],
      link: "https://sensational-cranachan-1dd2f5.netlify.app/",
      repository: "https://github.com/lelekaspb/foobar-dashboard",
    },
    game: {
      name: "Rescue the kitten",
      imageSrc: "assets/images/game.jpg",
      overview:
        "Fun and cute in-browser game called 'Rescue the kitten'. In order to win, a user needs to collect 20 water drops in the given time while avoiding clicking on the fire drops. The game is made with the use of very basic technologies. Individual project.",
      technology: ["HTML", "CSS", "JS"],
      link: "https://lelekaspb.github.io/rescue_the_kitten_game/",
      repository: "https://github.com/lelekaspb/rescue_the_kitten_game",
    },
    daos: {
      name: "Musik samspil",
      imageSrc: "assets/images/daos2.jpg",
      overview:
        "Study project. Full-stack SPA application where musicians and ensembles can find each other. Musicians can create orchestras and posts as individuals and on behalf of orchestras. The users can only edit and delete the orchestras and posts that they created themselves. They can join and leave orchestras, change passwords, and delete and edit their own profile. In addition, server-side validation is added: there cannot be two users with the same email, users must provide the correct email and password in order to sign in, and required form fields must be present in order for requests to be fulfilled.",
      technology: [
        "React",
        "Node.js",
        "Nest.js",
        "JWT",
        "bcrypt",
        "MongoDB",
        "Mongoose",
      ],
      link: "https://teal-liger-63857f.netlify.app/",
      repository: "https://github.com/lelekaspb/daos-backend",
    },
  };

  return {
    projects: projects,
  };
})();
