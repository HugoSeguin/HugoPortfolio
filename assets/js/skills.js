document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    { icon: "fas fa-code", category: "Coding Languages", items: "Python, SQL, SAS, R, Java, JavaScript, Node.js, C++" },
    { icon: "fas fa-database", category: "Database Technologies", items: "MySQL, PostgreSQL, MongoDB, Graph DB, Cloud Data" },
    { icon: "fas fa-cogs", category: "Big Data Technologies", items: "Hadoop, Docker, Pyspark, Airflow, Mage.AI, CLI/Bash, Kubernetes" },
    { icon: "fab fa-github", category: "Version Control", items: "Git, GitHub" },
    { icon: "fas fa-cogs", category: "Architecture as Code", items: "Terraform, Ansible" },
    { icon: "fas fa-paint-brush", category: "Design", items: "Draw.IO, Flowchart" },
    { icon: "fas fa-chart-pie", category: "Business Visualization Tools", items: "Tableau, PowerBI, SAS Visual Analytics (Redshift)" },
    { icon: "fab fa-aws", category: "Cloud Platforms", items: "AWS, Tableau Cloud" },
    { icon: "fas fa-check-circle", category: "Data Quality", items: "Great Expectations, AWS Glue" },
    { icon: "fas fa-database", category: "Database Management", items: "pgAdmin4, DBeaver" },
    { icon: "fas fa-chart-line", category: "Statistics", items: "8 years of quantitative and qualitative analysis" },
    { icon: "fas fa-robot", category: "Machine Learning", items: "Supervised/Unsupervised Learning, NLP (Scikit-learn, Keras, TensorFlow)" },
    { icon: "fas fa-laptop-code", category: "Software", items: "Postman, MS Office/PowerPoint, Google Workspace, Gravity Forms" }
  ];

  const ul = document.getElementById("skills-list");
  if (!ul) return;

  skills.forEach(skill => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="${skill.icon}"></i> <strong>${skill.category}:</strong> ${skill.items}`;
    ul.appendChild(li);
  });
});
