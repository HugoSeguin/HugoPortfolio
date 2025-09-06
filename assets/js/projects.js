document.addEventListener("DOMContentLoaded", () => {
  // List of projects
  const projects = [
    {
      title: `Master's Thesis Code`,
      link: "https://github.com/HugoSeguin/R_Code",
      description: "Examples of R programming projects, including visualizations and analyses from my Master's thesis."
    },
    {
      title: "Chi IRL Calendar",
      link: "https://github.com/HugoSeguin/Chi_IRL_Calendar",
      description: "A calendar application for managing and visualizing events in the Chicago area."
    },
    {
      title: "Machine Learning Article Group",
      link: "https://github.com/HugoSeguin/Machine_Learning_Article_Group",
      description: "A collaborative project focused on exploring and implementing machine learning algorithms."
    },
    {
      title: "Chicago Tech Collaborative Projects",
      link: "https://github.com/HugoSeguin/Chicago_Tech_Collaborative_Projects",
      description: ""
    },
    {
      title: "PHP Project",
      link: "https://github.com/HugoSeguin/PHP",
      description: "Showcasing my skills in PHP development."
    },
    {
      title: "Tech Events Scraping Generic",
      link: "https://github.com/HugoSeguin/Tech_Events_Scraping_Generic",
      description: "A project focused on scraping and analyzing tech event data. I want this to grow into a larger project where multiple cities come together!"
    },
    {
      title: "Machine Learning Project",
      link: "https://github.com/HugoSeguin/Machine_Learning_Project",
      description: "A project focused on exploring and implementing machine learning algorithms."
    }
  ];

  // Render projects into the container
  const container = document.getElementById("projects-container");
  if (!container) return; // stop if container doesn't exist

  projects.forEach(project => {
    const section = document.createElement("section");
    section.innerHTML = `
      <h3 style="text-align:center">
        <b><a href="${project.link}" target="_blank">${project.title}</a></b>
      </h3>
      <p>${project.description}</p>
    `;
    container.appendChild(section);
  });
});