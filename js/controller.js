const controller = (function (data, ui) {
  const DOM = ui.getDomStrings();

  const urlParams = new URLSearchParams(window.location.search);
  const project = urlParams.get("project");

  ui.renderProject(data.projects[project]);
})(model, view);
