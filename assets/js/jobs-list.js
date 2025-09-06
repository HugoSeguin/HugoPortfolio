document.addEventListener("DOMContentLoaded", () => {
  const resumes = {
    full: [
      {
        title: "Parkway Digital – Software Engineer",
        location: "Remote",
        duration: "Jan 2025 – Present",
        duties: [
          "Developed and deployed analytics pipelines using Excel, SQL, AWS Lambda, to Tableau Dashboards reducing latency by 40% and improving accuracy by 25%.",
          "Designed and maintained API-driven microservices integrated with production workflows, scaling to thousands of daily transactions.",
          "Established CI/CD pipelines with Terraform, GitHub Actions, and automated testing, improving deployment reliability by 40%.",
          "Partnered with analysts and engineers in agile sprints, translating analytical needs into production-grade data solutions."
        ]
      },
      {
        title: "Realm of Caring – Associate Data & Cloud Engineer",
        location: "Remote",
        duration: "Oct 2023 – July 2025",
        duties: [
          "Designed and implemented Snowflake, Python, R and SQL ETL services with dbt model, processing 10M+ records/month to support analytics and reporting in Tableau Dashboards.",
          "Built internal APIs and data tools, reducing reporting turnaround time by 50%.",
          "Authored technical documentation and mentored junior developers on data engineering best practices.",
          "Developed automated testing and monitoring frameworks, ensuring reliability and data quality."
        ]
      },
      // Add remaining full resume items here...
    ],

    technical: [
      {
        title: "Parkway Digital – Software Engineer",
        location: "Remote",
        duration: "Jan 2025 – Present",
        duties: [
          "Excel, SQL, AWS Lambda, Tableau, API-driven microservices, Terraform, GitHub Actions, CI/CD pipelines"
        ]
      },
      {
        title: "Realm of Caring – Associate Data & Cloud Engineer",
        location: "Remote",
        duration: "Oct 2023 – July 2025",
        duties: [
          "Snowflake, Python, R, SQL, dbt, Tableau, APIs, Automated Testing, Monitoring"
        ]
      }
    ]
  };

  // Function to render experiences
  function renderExperiences(resumeType = "full") {
    const container = document.getElementById("experience-container");
    if (!container) return; // safety check
    container.innerHTML = ""; // Clear previous content
    const experiences = resumes[resumeType] || [];

    experiences.forEach(exp => {
      const job = document.createElement("div");
      job.classList.add("job");
      job.innerHTML = `
        <h4>${exp.title}</h4>
        <p><strong>Location:</strong> ${exp.location} | <strong>Duration:</strong> ${exp.duration}</p>
        <ul>
          ${exp.duties.map(d => `<li>${d}</li>`).join("")}
        </ul>
      `;
      container.appendChild(job);
    });
  }

  // Initial render
  renderExperiences();

  // Add button functionality
  const buttons = document.querySelectorAll("#resume-buttons button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const resumeType = button.getAttribute("data-resume");
      renderExperiences(resumeType);
    });
  });
});
