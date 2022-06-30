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
    },
    calculator: {
      name: "budget calculator",
      imageSrc: "assets/images/calculator.jpg",
      overview:
        "Simple app that calculates income and expenses for the current month. It was an individual project where I could exercise MVC pattern, IIFE functions, and JavaScript Object Prototypes.",
      technology: ["HTML", "CSS", "JS", "MVC pattern"],
      link: "https://lelekaspb.github.io/calculator/",
    },
    palette: {
      name: "color palette",
      imageSrc: "assets/images/color_palette.jpg",
      overview:
        "Individual assignment with a focus on code planning and design. Here I got to practice functions with parameters and return values, building activity diagram before starting to code, DRY principle of coding, and separation of concerns.",
      technology: ["HTML", "CSS", "JS"],
      link: "https://lelekaspb.github.io/color-selector/color_palette.html",
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
    },
    hogwarts: {
      name: "hogwarts student list",
      imageSrc: "assets/images/hogwarts.jpg",
      overview:
        "A very interesting and challenging individual project. The app fetches two json files with the use of Asynchronous JavaScript functions, corrects students' names, constructs image sources, calculates blood statuses, and displays it all in browser. In addition, the app allows users to search, filter, and sort students. The most challenging part of the assignment was to implement a function that would hack the system. The function can be called from the console (hackTheSystem();) or by typing 'hackit' while app is open in browser. It adds myself as a student and won't allow my expelling, it also randomizes blood statuses and makes sure that students added to the inquisitorial squad after hacking, will be removed again after 20 seconds.",
      technology: ["HTML", "CSS", "JS"],
      link: "https://lelekaspb.github.io/hogwarts-list/",
    },
    memover: {
      name: "memover campaign website",
      imageSrc: "assets/images/memover.jpg",
      overview:
        "A campaign website we made during second semester for the Me-Mover start-up. It was my responsibility to create responsive online prototype based on XD prototype my fellow peers had made. The solution is hosted on Netlify and it keeps data that users post with contact form.",
      technology: ["HTML", "CSS", "JS", "Netlify"],
      link: "https://quizzical-mccarthy-7e4615.netlify.app/",
    },
    planner: {
      name: "todos",
      imageSrc: "assets/images/planner.jpg",
      overview:
        "A todo list with suggested defaulf tasks that is kept in Local Storage. Tasks can be added or deleted, plus search task functionality. Individual project.",
      technology: ["HTML", "Bootstrap", "JS", "localStorage"],
      link: "https://lelekaspb.github.io/todo/",
    },
    blog: {
      name: "blogging website",
      imageSrc: "assets/images/blog.jpg",
      overview:
        "A collaborative blogging site where visitors can create new posts and comment on posts. Posts need to be approved before showing on the site. Individual project.",
      technology: ["HTML", "CSS", "JS"],
      link: "https://lelekaspb.github.io/blogging_site/",
    },
    wildorchid: {
      name: "a beauty salon website",
      imageSrc: "assets/images/wildorchid.jpg",
      overview:
        "Website for a beauty salon Wild Orchid. The website is made in two languages with the use of React INTL library. Using AJAX requests, the app posts information gathered from forms into restdb and sends notification emails to Wild Orchid.",
      technology: ["React.js", "CSS modules", "React INTL", "React Router DOM"],
      link: "https://resilient-custard-075d47.netlify.app/",
    },
    foobar: {
      name: "ordering form Foobar",
      imageSrc: "assets/images/foobar.jpg",
      overview:
        "A beer ordering form for an imaginary bar Foobar. The app is meant to be installed on tablets at every table in the bar so that customers can order beer without getting up. The app fetches beer data from backend, and after a user order beer and pay, it posts order into backend. ",
      technology: ["React.js", "SASS", "React Router DOM"],
      link: "https://upbeat-jepsen-337af2.netlify.app/",
    },
    foobardash: {
      name: "staff dashboard Foobar",
      imageSrc: "assets/images/foobardash.jpg",
      overview:
        "Dashboard to help Foobar staff to manage bar operations. The app fetches data every 5 seconds in order to keep the staff updated on beer taps, storage, amount of orders in queue, and what bartenders are doing at the moment.",
      technology: [
        "JavaScript",
        "ES6 JS modules",
        "JS classes",
        "Tailwind",
        "Vite",
      ],
      link: "https://sensational-cranachan-1dd2f5.netlify.app/",
    },
  };

  return {
    projects: projects,
  };
})();
