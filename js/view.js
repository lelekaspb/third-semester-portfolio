const view = (function () {
  const DOMStrings = {
    header: ".project_heading",
    image: ".image_container img",
    link: ".text_container h2 a",
    description: ".text_container p",
    technologiesParent: ".text_container ul",
  };

  function renderProject(projectObject) {
    document.querySelector(DOMStrings.header).textContent = projectObject.name;
    document.querySelector(DOMStrings.image).src = projectObject.imageSrc;
    if (projectObject.name === "color palette") {
      document.querySelector(DOMStrings.image).style.objectPosition =
        "left bottom";
    }
    document.querySelector(DOMStrings.link).href = projectObject.link;
    document.querySelector(DOMStrings.description).innerHTML =
      projectObject.overview;
    projectObject.technology.forEach((tech) => {
      const element = createListElement(tech);
      document.querySelector(DOMStrings.technologiesParent).append(element);
    });
  }

  function createListElement(string) {
    const elem = document.createElement("li");
    elem.textContent = string;
    return elem;
  }

  return {
    getDomStrings: function () {
      return DOMStrings;
    },
    renderProject: renderProject,
  };
})();
