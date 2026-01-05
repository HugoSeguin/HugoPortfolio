document.addEventListener("DOMContentLoaded", () => {
  // List of projects
  const projects = [
    {
      title: "PHP Plugins",
      link: "https://github.com/HugoSeguin/PHP_Plugins",
      description: "Custom PHP plugins and extensions for WordPress and other platforms."
    },
    {
      title: "Chicago Engineering & Tech Communities",
      link: "https://github.com/HugoSeguin/chicago-engineering-and-tech-communities",
      description: "A comprehensive resource hub for Chicago's engineering and technology communities, featuring events, meetups, and networking opportunities."
    },
    {
      title: "CHI-IRL",
      link: "https://github.com/HugoSeguin/CHI-IRL",
      description: "Chicago In Real Life - A community networking project connecting tech professionals and enthusiasts in the Chicago area."
    },
    {
      title: "ChiPy.org",
      link: "https://github.com/HugoSeguin/chipy.org",
      description: "Contributions to the Chicago Python User Group website, supporting one of the largest Python communities in the US."
    },
    {
      title: "Master Thesis R Script",
      link: "https://github.com/HugoSeguin/Master-Thesis-R-Script",
      description: "R scripts and statistical analysis code from my Master's thesis in Social Psychology, featuring advanced data analysis and visualizations."
    },
    {
      title: "Machine Learning Projects",
      link: "https://github.com/HugoSeguin/Machine-Learning-Projects",
      description: "A collection of machine learning experiments and implementations, including supervised and unsupervised learning algorithms."
    },
    {
      title: "Python Practice Problems",
      link: "https://github.com/HugoSeguin/Python-Practice-Problems",
      description: "Solutions to various Python coding challenges and algorithm problems from platforms like LeetCode and HackerRank."
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
