const view = (function () {
  const DOMStrings = {
    header: "#site-header",
    main: "#home",
    footer: "#site-footer",
  };

  function createElement(tag, className, text) {
    const elem = document.createElement(tag);
    if (className) elem.className = className;
    if (text) elem.textContent = text;
    return elem;
  }

  function createLink(className, href, text) {
    const link = createElement("a", className, text);
    link.href = href;
    if (/^https?:/.test(href)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    return link;
  }

  function createChips(items) {
    const chips = createElement("div", "chips");
    items.forEach((item) => chips.append(createElement("span", "", item)));
    return chips;
  }

  function createButtons(buttons) {
    const row = createElement("div", "button_row");
    buttons.forEach((button) => {
      const link = createLink(
        "button" + (button.primary ? " button_primary" : ""),
        button.href,
        button.label
      );
      if (button.download) link.download = button.download;
      row.append(link);
    });
    return row;
  }

  function createSection(id, className) {
    const section = createElement("section", className);
    section.id = id;
    section.setAttribute("aria-labelledby", id + "-title");
    return section;
  }

  function createHeading(id, eyebrow, title) {
    const heading = createElement("h2", "", title);
    heading.id = id + "-title";
    return [createElement("p", "eyebrow", eyebrow), heading];
  }

  function renderHeader(profile, nav) {
    const header = document.querySelector(DOMStrings.header);
    const navElement = createElement("nav");
    navElement.setAttribute("aria-label", "Main navigation");
    nav.forEach((item) =>
      navElement.append(createLink("", item.href, item.label))
    );
    header.append(createLink("brand", "#home", profile.name), navElement);
  }

  function createHero(profile, buttons) {
    const section = createSection("hero", "hero");
    const copy = createElement("div", "hero_copy");
    const title = createElement("h1", "", profile.headline);
    title.id = "hero-title";
    copy.append(
      createElement("p", "eyebrow", profile.role),
      title,
      createElement("p", "hero_intro", profile.intro),
      createButtons(buttons)
    );

    const photo = createElement("div", "hero_photo");
    const image = document.createElement("img");
    image.src = profile.photo;
    image.alt = profile.photoAlt;
    photo.append(image);

    section.setAttribute("aria-labelledby", "hero-title");
    section.append(copy, photo);
    return section;
  }

  function createProjectCard(project) {
    const card = createElement("article", "card project_card");

    const imageLink = createLink("project_image", project.link);
    const image = document.createElement("img");
    image.src = project.imageSrc;
    image.alt = project.imageAlt;
    imageLink.append(image);

    const chips = createChips(project.technology);
    chips.setAttribute("aria-label", "Technologies");

    const links = createElement("div", "project_links");
    links.append(
      createLink("text_link", project.link, "Live site"),
      createLink("text_link", project.repository, "GitHub")
    );

    card.append(
      imageLink,
      createElement("h3", "", project.title),
      createElement("p", "", project.summary),
      createElement("p", "project_role", project.role),
      chips,
      links
    );
    return card;
  }

  function createProjects(projects) {
    const section = createSection("projects", "content_section");
    const grid = createElement("div", "card_grid project_grid");
    grid.append(...projects.map(createProjectCard));
    section.append(...createHeading("projects", "Projects", "Selected work"), grid);
    return section;
  }

  function createApproach(approach) {
    const section = createSection("approach", "content_section");
    const grid = createElement("div", "card_grid");
    approach.steps.forEach((step, index) => {
      const card = createElement("article", "card step_card");
      card.append(
        createElement("span", "step_number", String(index + 1)),
        createElement("h3", "", step.title),
        createElement("p", "", step.text)
      );
      grid.append(card);
    });
    section.append(
      ...createHeading("approach", approach.eyebrow, approach.title),
      grid
    );
    return section;
  }

  function createSkills(skills) {
    const section = createSection("skills", "content_section");
    const grid = createElement("div", "card_grid skills_grid");
    skills.groups.forEach((group) => {
      const card = createElement("article", "card skill_card");
      card.append(createElement("h3", "", group.title), createChips(group.items));
      grid.append(card);
    });
    section.append(...createHeading("skills", skills.eyebrow, skills.title), grid);
    return section;
  }

  function createAbout(about) {
    const section = createSection("about", "content_section about_section");

    const text = createElement("div");
    text.append(
      ...createHeading("about", about.eyebrow, about.title),
      ...about.paragraphs.map((paragraph) => createElement("p", "", paragraph))
    );

    const experience = createElement("div", "card experience_card");
    experience.append(createElement("h3", "", about.experienceTitle));
    about.experience.forEach((job) => {
      const line = createElement("p");
      line.append(
        createElement("strong", "", job.role),
        document.createTextNode(
          ", " + job.company + (job.period ? ", " + job.period : "")
        )
      );
      experience.append(line);
    });

    section.append(text, experience);
    return section;
  }

  function createContact(contact) {
    const section = createSection("contact", "card contact_section");
    const title = createElement("h2", "", contact.title);
    title.id = "contact-title";
    section.append(title, createElement("p", "", contact.text), createButtons(contact.buttons));
    return section;
  }

  function renderPage(data) {
    document
      .querySelector(DOMStrings.main)
      .append(
        createHero(data.profile, data.heroButtons),
        createProjects(data.featured.map((id) => data.projects[id])),
        createApproach(data.approach),
        createSkills(data.skills),
        createAbout(data.about),
        createContact(data.contact)
      );
    renderHeader(data.profile, data.nav);
    renderFooter(data.footer);
  }

  function renderFooter(footer) {
    const links = createElement("div");
    footer.links.forEach((link) =>
      links.append(createLink("", link.href, link.label))
    );
    document
      .querySelector(DOMStrings.footer)
      .append(createElement("span", "", footer.copyright), links);
  }

  return {
    renderPage: renderPage,
  };
})();
